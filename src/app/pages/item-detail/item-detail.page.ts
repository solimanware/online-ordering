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
import { Item, Modifier, Variant } from 'src/app/interfaces/categories';
import { AppService } from 'src/app/services/app.service';
import { CartService } from 'src/app/services/cart.service';
import { HomePageService } from 'src/app/services/home-page.service';

export interface ItemDetail extends Item {
  selectedModifierId: string;
  selectedVariantId: string;
  totalPrice: number;
  quantity: number;
  subtotal: number;
  total: number;
  tax?: number;
  serviceFee?: number;
  currency?: string;
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
        selectedModifierId: item?.modifierCategories?.length
          ? item.modifierCategories[0]?.modifiers[0]?.id
          : '',
        selectedVariantId: item?.variantCategories?.length
          ? item.variantCategories[0]?.variants[0]?.id
          : '',
        totalPrice: 0,
        quantity: 1,
        subtotal: 0,
        total: 0,
      };
      console.log(this.itemDetail);
      this.calculateTotalPrice(this.itemDetail);
    });
  }

  calculateTotalPrice(itemDetail: ItemDetail) {
    let variantPrice = 0;
    let modifierPrice = 0;

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

    // Calculate modifier price if selected
    if (
      itemDetail.selectedModifierId &&
      itemDetail.modifierCategories?.length > 0
    ) {
      const selectedModifier = itemDetail.modifierCategories[0].modifiers.find(
        (m) => m.id === itemDetail.selectedModifierId
      );
      modifierPrice = selectedModifier?.price?.amount || 0;
    }

    // Calculate final price
    const finalBasePrice = variantPrice > 0 ? variantPrice : basePrice;
    const totalBeforeQuantity = finalBasePrice + modifierPrice;

    // Set total price with quantity
    this.itemDetail.totalPrice = totalBeforeQuantity * this.quantity;

    // Update other price-related fields
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
      modifierPrice,
      quantity: this.quantity,
      totalPrice: this.itemDetail.totalPrice,
    });
  }

  selectVariant(variant: Variant) {
    this.itemDetail.selectedVariantId = variant.id;
    this.itemDetail.totalPrice = variant.price.amount;
    this.calculateTotalPrice(this.itemDetail);
  }

  selectModifier(modifier: Modifier) {
    this.itemDetail.selectedModifierId = modifier.id;
    this.itemDetail.totalPrice = modifier.price.amount;
    this.calculateTotalPrice(this.itemDetail);
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
    // Make sure item has all necessary price information before adding to cart
    this.calculateTotalPrice(this.itemDetail);

    // Create a cart item that matches the ItemDetail interface
    const cartItem: ItemDetail = {
      ...this.itemDetail,
      id: this.itemDetail.id,
      sequence: this.itemDetail.sequence,
      fromTime: this.itemDetail.fromTime,
      toTime: this.itemDetail.toTime,
      product_id: this.itemDetail.product_id,
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
      selectedModifierId: this.itemDetail.selectedModifierId,
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
