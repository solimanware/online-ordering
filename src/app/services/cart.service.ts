import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';
import { BehaviorSubject } from 'rxjs';
import { ItemDetail } from '../pages/item-detail/item-detail.page';
import { HomePageService } from './home-page.service';
import { LoggerService } from './logger.service';

export interface CartSummary {
  item: ItemDetail;
  description: string;
  quantity: number;
  totalPrice: number;
  currency: string;
  subtotal: number;
  serviceFee: number;
  tax: number;
  total: number;
}

export interface PaymentSummary {
  itemsCount: number;
  subtotal: number;
  serviceFee: number;
  tax: number;
  total: number;
  currency: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Holds the current state of the cart items summary.
  cartSummary$ = new BehaviorSubject<CartSummary[]>([]);
  // Exposes the aggregated payment summary.
  paymentSummary$ = new BehaviorSubject<PaymentSummary>({
    itemsCount: 0,
    subtotal: 0,
    serviceFee: 0,
    tax: 0,
    total: 0,
    currency: '',
  });

  constructor(
    private toastController: ToastController,
    private logger: LoggerService,
    private homePageService: HomePageService
  ) {
    this.logger.info('CartService', 'Service initialized');
    // Update the payment summary whenever the cart summary changes.
    this.cartSummary$.subscribe((cartSummary) => {
      this.paymentSummary$.next(this.calculatePaymentSummary(cartSummary));
      this.logger.debug('CartService', 'Cart summary updated', cartSummary);
    });
  }

  /**
   * Adds an item to the cart. If the item already exists, it increases the quantity.
   */
  async addOnceToCart(item: ItemDetail): Promise<void> {
    // const toast = await this.toastController.create({
    //   message: 'Item added to cart!',
    //   duration: 2000,
    //   position: 'bottom',
    // });
    // toast.present();

    const currentCart = this.cartSummary$.value;
    this.logger.info('CartService', 'Adding item to cart', {
      itemId: item.id,
      name: item.name?.en,
    });

    // Use more robust check: Compare both ID and variant/modifier
    const index = currentCart.findIndex(
      (cartItem) =>
        cartItem.item.id === item.id &&
        cartItem.item.selectedVariantId === item.selectedVariantId &&
        cartItem.item.selectedModifierId === item.selectedModifierId
    );

    if (index !== -1) {
      this.logger.debug(
        'CartService',
        'Item already exists in cart, increasing quantity',
        {
          itemId: item.id,
          name: item.name?.en,
        }
      );
      this.increaseQuantity(item);
    } else {
      // Determine the correct price to use
      let priceAmount = 0;
      let priceCurrency = 'EGP';

      // If item has totalPrice (from item detail calculation)
      if (item.totalPrice && item.totalPrice > 0) {
        priceAmount = item.totalPrice;
        priceCurrency = item.currency || 'EGP';
      }
      // If item has variant price
      else if (item.selectedVariantId && item.variantCategories?.length > 0) {
        const selectedVariant = item.variantCategories[0].variants.find(
          (v) => v.id === item.selectedVariantId
        );
        if (selectedVariant?.price) {
          priceAmount = selectedVariant.price.amount;
          priceCurrency = selectedVariant.price.currency;
        }
      }
      // Fallback to base price
      else if (item.price?.amount) {
        priceAmount = item.price.amount;
        priceCurrency = item.price.currency;
      }

      // Calculate other financial fields
      const subtotal = priceAmount;
      const serviceFee = subtotal * 0.1;
      const tax = subtotal * 0.15;
      const total = subtotal + serviceFee + tax;

      const newCartItem: CartSummary = {
        item,
        description: item.description?.en || '',
        quantity: item.quantity || 1,
        totalPrice: priceAmount,
        currency: priceCurrency,
        subtotal: subtotal,
        serviceFee: serviceFee,
        tax: tax,
        total: total,
      };

      this.logger.debug('CartService', 'Adding new item to cart', {
        itemId: item.id,
        name: item.name?.en,
        price: priceAmount,
        currency: priceCurrency,
      });

      this.cartSummary$.next([...currentCart, newCartItem]);
    }
  }

  /**
   * Removes an item completely from the cart.
   */
  removeOnceFromCart(item: ItemDetail): void {
    this.logger.info('CartService', 'Removing item from cart', {
      itemId: item.id,
      name: item.name?.en,
    });

    const updatedCart = this.cartSummary$.value.filter(
      (i) => i.item.id !== item.id
    );
    this.cartSummary$.next(updatedCart);
  }

  /**
   * Increases the quantity of an item in the cart and recalculates its totals.
   */
  increaseQuantity(item: ItemDetail): void {
    this.logger.debug('CartService', 'Increasing item quantity', {
      itemId: item.id,
      name: item.name?.en,
    });

    const updatedCart = this.cartSummary$.value.map((cartItem) => {
      // Check for matching item including variants and modifiers
      if (
        cartItem.item.id === item.id &&
        cartItem.item.selectedVariantId === item.selectedVariantId &&
        cartItem.item.selectedModifierId === item.selectedModifierId
      ) {
        // Increase the quantity and recalc totals
        const updatedItem = { ...cartItem, quantity: cartItem.quantity + 1 };
        return this.recalcCartItem(updatedItem);
      }
      return cartItem;
    });
    this.cartSummary$.next(updatedCart);
  }

  /**
   * Decreases the quantity of an item in the cart.
   * Removes the item if the quantity drops to zero.
   */
  decreaseQuantity(item: ItemDetail): void {
    this.logger.debug('CartService', 'Decreasing item quantity', {
      itemId: item.id,
      name: item.name?.en,
    });

    const updatedCart = this.cartSummary$.value
      .map((cartItem) => {
        // Check for matching item including variants and modifiers
        if (
          cartItem.item.id === item.id &&
          cartItem.item.selectedVariantId === item.selectedVariantId &&
          cartItem.item.selectedModifierId === item.selectedModifierId
        ) {
          const newQuantity = cartItem.quantity - 1;
          // Remove the item if quantity becomes zero
          if (newQuantity <= 0) {
            this.logger.debug(
              'CartService',
              'Item quantity is zero, removing from cart',
              {
                itemId: item.id,
                name: item.name?.en,
              }
            );
            return null;
          }
          const updatedItem = { ...cartItem, quantity: newQuantity };
          return this.recalcCartItem(updatedItem);
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem !== null) as CartSummary[];
    this.cartSummary$.next(updatedCart);
  }

  /**
   * Aggregates the payment summary from the current cart items.
   */
  private calculatePaymentSummary(cartItems: CartSummary[]): PaymentSummary {
    if (cartItems.length === 0) {
      this.logger.debug('CartService', 'Cart is empty, payment summary reset');
      return {
        itemsCount: 0,
        subtotal: 0,
        serviceFee: 0,
        tax: 0,
        total: 0,
        currency: '',
      };
    }

    const summary = {
      // Here, itemsCount can represent either the number of unique items or the total quantity.
      // This example sums up the quantities for a total count.
      itemsCount: cartItems.reduce((acc, item) => acc + item.quantity, 0),
      subtotal: cartItems.reduce((acc, item) => acc + item.totalPrice, 0),
      serviceFee:
        this.homePageService.nearestBranch$.value.price ||
        this.homePageService.nearestBranch$.value.deliveryFees,
      tax: Number(
        cartItems.reduce((acc, item) => acc + item.tax, 0).toFixed(2)
      ),
      get total() {
        return this.subtotal + this.tax + this.serviceFee;
      },
      // Safely use the currency from the first item if available.
      currency: cartItems[0].currency,
    };

    this.logger.debug('CartService', 'Payment summary calculated', summary);
    return summary;
  }

  private recalcCartItem(cartItem: CartSummary): CartSummary {
    // Determine the correct base price per unit
    let unitPrice = 0;

    // First check if variant is selected
    if (
      cartItem.item.selectedVariantId &&
      cartItem.item.variantCategories?.length > 0
    ) {
      const selectedVariant = cartItem.item.variantCategories[0].variants.find(
        (v) => v.id === cartItem.item.selectedVariantId
      );
      if (selectedVariant?.price) {
        unitPrice = selectedVariant.price.amount;
      }
    }
    // If no variant or variant has no price, use base price
    else if (cartItem.item.price?.amount) {
      unitPrice = cartItem.item.price.amount;
    }

    // Add modifier price if any
    if (
      cartItem.item.selectedModifierId &&
      cartItem.item.modifierCategories?.length > 0
    ) {
      const selectedModifier =
        cartItem.item.modifierCategories[0].modifiers.find(
          (m) => m.id === cartItem.item.selectedModifierId
        );
      if (selectedModifier?.price) {
        unitPrice += selectedModifier.price.amount;
      }
    }

    const quantity = cartItem.quantity;
    const totalPrice = unitPrice * quantity;
    const serviceFee = totalPrice * 0.1;
    const tax = totalPrice * 0.15;
    const total = totalPrice + serviceFee + tax;

    this.logger.trace('CartService', 'Cart item recalculated', {
      itemId: cartItem.item.id,
      name: cartItem.item.name?.en,
      quantity,
      unitPrice,
      totalPrice,
      serviceFee,
      tax,
      total,
    });

    return {
      ...cartItem,
      totalPrice,
      subtotal: totalPrice,
      serviceFee,
      tax,
      total,
    };
  }
}
