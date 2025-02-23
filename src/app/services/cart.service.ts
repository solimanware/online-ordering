import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';
import { BehaviorSubject } from 'rxjs';
import { ItemDetail } from '../pages/item-detail/item-detail.page';

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

  constructor(private toastController: ToastController) {
    // Update the payment summary whenever the cart summary changes.
    this.cartSummary$.subscribe((cartSummary) => {
      this.paymentSummary$.next(this.calculatePaymentSummary(cartSummary));
      console.log(cartSummary);
    });
  }

  /**
   * Adds an item to the cart. If the item already exists, it increases the quantity.
   */
  async addOnceToCart(item: ItemDetail): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Item added to cart!',
      duration: 2000,
      position: 'bottom',
    });
    toast.present();

    const currentCart = this.cartSummary$.value;
    const index = currentCart.findIndex((i) => i.item.id === item.id);
    if (index !== -1) {
      this.increaseQuantity(item);
    } else {
      const newCartItem: CartSummary = {
        item,
        description: item.description.en,
        quantity: 1,
        totalPrice: item.price.amount,
        currency: item.price.currency,
        subtotal: item.price.amount,
        serviceFee: item.price.amount * 0.1,
        tax: item.price.amount * 0.15,
        total:
          item.price.amount +
          item.price.amount * 0.1 +
          item.price.amount * 0.15,
      };
      this.cartSummary$.next([...currentCart, newCartItem]);
    }
  }

  /**
   * Removes an item completely from the cart.
   */
  removeOnceFromCart(item: ItemDetail): void {
    const updatedCart = this.cartSummary$.value.filter(
      (i) => i.item.id !== item.id
    );
    this.cartSummary$.next(updatedCart);
  }

  /**
   * Increases the quantity of an item in the cart and recalculates its totals.
   */
  increaseQuantity(item: ItemDetail): void {
    const updatedCart = this.cartSummary$.value.map((cartItem) => {
      if (cartItem.item.id === item.id) {
        // Increase the quantity and recalc totals based on the unit price.
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
    const updatedCart = this.cartSummary$.value
      .map((cartItem) => {
        if (cartItem.item.id === item.id) {
          const newQuantity = cartItem.quantity - 1;
          // Remove the item if quantity becomes zero.
          if (newQuantity <= 0) {
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
   * Recalculates the price details of a cart item based on its quantity.
   */
  private recalcCartItem(cartItem: CartSummary): CartSummary {
    const unitPrice = cartItem.item.price.amount;
    const quantity = cartItem.quantity;
    const totalPrice = unitPrice * quantity;
    const serviceFee = totalPrice * 0.1;
    const tax = totalPrice * 0.15;
    const total = totalPrice + serviceFee + tax;
    return {
      ...cartItem,
      totalPrice,
      subtotal: totalPrice,
      serviceFee,
      tax,
      total,
    };
  }

  /**
   * Aggregates the payment summary from the current cart items.
   */
  private calculatePaymentSummary(cartItems: CartSummary[]): PaymentSummary {
    if (cartItems.length === 0) {
      return {
        itemsCount: 0,
        subtotal: 0,
        serviceFee: 0,
        tax: 0,
        total: 0,
        currency: '',
      };
    }
    return {
      // Here, itemsCount can represent either the number of unique items or the total quantity.
      // This example sums up the quantities for a total count.
      itemsCount: cartItems.reduce((acc, item) => acc + item.quantity, 0),
      subtotal: cartItems.reduce((acc, item) => acc + item.totalPrice, 0),
      serviceFee: cartItems.reduce((acc, item) => acc + item.serviceFee, 0),
      tax: cartItems.reduce((acc, item) => acc + item.tax, 0),
      total: cartItems.reduce((acc, item) => acc + item.total, 0),
      // Safely use the currency from the first item if available.
      currency: cartItems[0].currency,
    };
  }
}
