import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  ToastController,
} from '@ionic/angular/standalone';
import {
  Item,
  Modifier,
  ModifierCategory,
  Variant,
} from 'src/app/interfaces/categories';
import { AppService } from 'src/app/services/app.service';
import { CartService } from 'src/app/services/cart.service';
import { HomePageService } from 'src/app/services/home-page.service';

interface SelectedModifier {
  id: string;
  quantity: number;
}

interface ModifierValidation {
  isValid: boolean;
  message?: string;
}

export interface ItemDetail extends Item {
  selectedModifiers: SelectedModifier[];
  selectedVariantId: string;
  totalPrice: number;
  quantity: number;
  subtotal: number;
  total: number;
  tax?: number;
  serviceFee?: number;
}

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonContent,
    IonHeader,
    IonFooter,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class ItemDetailPage implements OnInit {
  quantity: number = 1;
  itemDetail: ItemDetail;
  restaurantName$ = this.appService.restaurantName$;
  constructor(
    private toastController: ToastController,
    private homePageService: HomePageService,
    private cartService: CartService,
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.homePageService.selectedItem$.subscribe((item) => {
      this.itemDetail = {
        ...item,
        selectedModifiers: [],
        selectedVariantId: item?.variantCategories?.length
          ? item.variantCategories[0]?.variants[0]?.id
          : '',
        totalPrice: 0,
        quantity: 1,
        subtotal: 0,
        total: 0,
      };
      this.calculateTotalPrice(this.itemDetail);
    });
  }

  calculateTotalPrice(itemDetail: ItemDetail) {
    let variantPrice = 0;
    let modifiersPrice = 0;

    // Get base price from the item
    const basePrice = itemDetail.price?.amount || 0;

    // Calculate variant price if selected
    if (
      itemDetail.selectedVariantId &&
      itemDetail.variantCategories?.length > 0
    ) {
      const selectedVariant = itemDetail.variantCategories[0].variants.find(
        (v) => v.id === itemDetail.selectedVariantId
      );
      variantPrice = selectedVariant?.price?.amount || 0;
    }

    // Calculate total modifiers price
    if (itemDetail.modifierCategories?.length > 0) {
      modifiersPrice = itemDetail.selectedModifiers.reduce(
        (total, selected) => {
          const modifier = this.findModifierById(selected.id);
          return total + (modifier?.price?.amount || 0) * selected.quantity;
        },
        0
      );
    }

    // Calculate final price
    const finalBasePrice = variantPrice > 0 ? variantPrice : basePrice;
    const totalBeforeQuantity = finalBasePrice + modifiersPrice;

    // Update prices
    this.itemDetail.totalPrice = totalBeforeQuantity * this.quantity;
    this.itemDetail.quantity = this.quantity;
    this.itemDetail.subtotal = this.itemDetail.totalPrice;
    this.itemDetail.total = this.itemDetail.totalPrice;
    this.itemDetail.currency =
      itemDetail.price?.currency ||
      itemDetail.variantCategories?.[0]?.variants?.[0]?.price?.currency ||
      'EGP';

    console.log('Price calculation:', {
      basePrice,
      variantPrice,
      modifiersPrice,
      quantity: this.quantity,
      totalPrice: this.itemDetail.totalPrice,
    });
  }

  findModifierById(modifierId: string): Modifier | undefined {
    for (const category of this.itemDetail.modifierCategories || []) {
      const modifier = category.modifiers.find((m) => m.id === modifierId);
      if (modifier) return modifier;
    }
    return undefined;
  }

  toggleModifier(modifier: Modifier, category: ModifierCategory) {
    const isSelected = this.isModifierSelected(modifier.id);

    if (isSelected) {
      // Handle deselection
      if (category.minSelection > 0) {
        const currentSelections = this.getCurrentSelectionsCount(category);
        if (currentSelections <= category.minSelection) {
          this.showToast(
            `You must select at least ${category.minSelection} ${category.name.en}`
          );
          return;
        }
      }
      this.itemDetail.selectedModifiers =
        this.itemDetail.selectedModifiers.filter((m) => m.id !== modifier.id);
    } else {
      // Handle selection
      const validationResult = this.validateModifierSelection(
        modifier,
        category
      );
      if (!validationResult.isValid) {
        this.showToast(validationResult.message);
        return;
      }

      if (!category.isMultiSelect) {
        // Remove any existing selection in this category for single select
        this.itemDetail.selectedModifiers =
          this.itemDetail.selectedModifiers.filter(
            (m) => !category.modifiers.some((mod) => mod.id === m.id)
          );
      }

      this.itemDetail.selectedModifiers.push({
        id: modifier.id,
        quantity: 1,
      });
    }

    this.calculateTotalPrice(this.itemDetail);
  }

  validateModifierSelection(
    modifier: Modifier,
    category: ModifierCategory
  ): ModifierValidation {
    const currentSelections = this.getCurrentSelectionsCount(category);

    if (currentSelections >= category.maxSelection) {
      return {
        isValid: false,
        message: `You can only select up to ${category.maxSelection} items from ${category.name.en}`,
      };
    }

    return { isValid: true };
  }

  getCurrentSelectionsCount(category: ModifierCategory): number {
    return this.itemDetail.selectedModifiers
      .filter((selected) =>
        category.modifiers.some((m) => m.id === selected.id)
      )
      .reduce((total, modifier) => total + modifier.quantity, 0);
  }

  incrementModifierQuantity(
    event: Event,
    modifier: Modifier,
    category: ModifierCategory
  ) {
    event.stopPropagation();
    const selectedModifier = this.itemDetail.selectedModifiers.find(
      (m) => m.id === modifier.id
    );
    if (!selectedModifier) return;

    const currentTotal = this.getCurrentSelectionsCount(category);
    if (currentTotal >= category.maxSelection) {
      this.showToast(
        `You can only select up to ${category.maxSelection} items from ${category.name.en}`
      );
      return;
    }

    selectedModifier.quantity += 1;
    this.calculateTotalPrice(this.itemDetail);
  }

  decrementModifierQuantity(
    event: Event,
    modifier: Modifier,
    category: ModifierCategory
  ) {
    event.stopPropagation();
    const selectedModifier = this.itemDetail.selectedModifiers.find(
      (m) => m.id === modifier.id
    );
    if (!selectedModifier) return;

    if (selectedModifier.quantity <= 1) {
      this.toggleModifier(modifier, category);
    } else {
      selectedModifier.quantity -= 1;
      this.calculateTotalPrice(this.itemDetail);
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color: 'warning',
    });
    toast.present();
  }

  selectVariant(variant: Variant) {
    this.itemDetail.selectedVariantId = variant.id;
    this.itemDetail.totalPrice = variant.price.amount;
    this.calculateTotalPrice(this.itemDetail);
  }

  isModifierSelected(modifierId: string): boolean {
    return this.itemDetail.selectedModifiers.some((m) => m.id === modifierId);
  }

  getModifierQuantity(modifierId: string): number {
    const selectedModifier = this.itemDetail.selectedModifiers.find(
      (m) => m.id === modifierId
    );
    return selectedModifier?.quantity || 0;
  }

  incrementQuantity() {
    this.quantity = Math.min(this.quantity + 1, 10); // Max 10 items
    this.calculateTotalPrice(this.itemDetail);
    console.log(this.itemDetail);

    this.cartService.addOnceToCart(this.itemDetail);
  }

  decrementQuantity() {
    this.quantity = Math.max(this.quantity - 1, 1); // Min 1 item
    this.calculateTotalPrice(this.itemDetail);
    this.cartService.removeOnceFromCart(this.itemDetail);
  }

  // updatePrice() {
  //   let extrasTotal = this.extras
  //     .filter((extra) => extra.selected)
  //     .reduce((sum, extra) => sum + extra.price, 0);
  //   this.totalPrice =
  //     Math.round((this.basePrice + extrasTotal) * this.quantity * 100) / 100;
  // }

  async addToCart() {
    // Validate minimum selections before adding to cart
    for (const category of this.itemDetail.modifierCategories || []) {
      const currentSelections = this.getCurrentSelectionsCount(category);
      if (currentSelections < category.minSelection) {
        this.showToast(
          `Please select at least ${category.minSelection} ${category.name.en}`
        );
        return;
      }
    }

    // Make sure item has all necessary price information before adding to cart
    this.calculateTotalPrice(this.itemDetail);

    // Create a cart item that matches the ItemDetail interface
    const cartItem: ItemDetail = {
      ...this.itemDetail,
      id: this.itemDetail.id,
      sequence: this.itemDetail.sequence,
      fromTime: this.itemDetail.fromTime,
      toTime: this.itemDetail.toTime,
      itemId: this.itemDetail.itemId,
      barcode: this.itemDetail.barcode,
      name: this.itemDetail.name,
      code: this.itemDetail.code,
      description: this.itemDetail.description,
      calories: this.itemDetail.calories,
      tags: this.itemDetail.tags,
      uom: this.itemDetail.uom,
      preparationTime: this.itemDetail.preparationTime,
      imageUrl: this.itemDetail.imageUrl,
      taxIds: this.itemDetail.taxIds,
      outOfStock: this.itemDetail.outOfStock,
      variantCategories: this.itemDetail.variantCategories,
      modifierCategories: this.itemDetail.modifierCategories,
      price: this.itemDetail.price,
      selectedModifiers: this.itemDetail.selectedModifiers,
      selectedVariantId: this.itemDetail.selectedVariantId,
      totalPrice: this.itemDetail.totalPrice,
      quantity: this.quantity,
      subtotal: this.itemDetail.subtotal,
      total: this.itemDetail.total,
      tax: this.itemDetail.tax,
      serviceFee: this.itemDetail.serviceFee,
      currency: this.itemDetail.currency,
    };

    this.cartService.addOnceToCart(cartItem);

    this.cartService.cartSummary$.subscribe((cartSummary) => {
      console.log(cartSummary);
    });

    const toast = await this.toastController.create({
      message: 'Item added to cart!',
      duration: 2000,
      position: 'bottom',
      color: 'success',
      cssClass: 'custom-toast',
    });

    // toast.present();
    this.router.navigate(['/', this.restaurantName$.value, 'home']);
  }
}
