import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonToolbar,
  ToastController,
} from '@ionic/angular/standalone';
import { fakeCategoriesData } from 'src/app/data/fakeCategoriesData';
import { Item, Modifier, Variant } from 'src/app/interfaces/categories';
import { CartService } from 'src/app/services/cart.service';
import { HomePageService } from 'src/app/services/home-page.service';
import { environment } from 'src/environments/environment';

export interface ItemDetail extends Item {
  selectedModifierId: string;
  selectedVariantId: string;
  totalPrice: number;
  quantity: number;
}

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonFooter,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class ItemDetailPage implements OnInit {
  quantity: number = 1;
  itemDetail: ItemDetail;

  constructor(
    private toastController: ToastController,
    private homePageService: HomePageService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    if (environment.demoMode) {
      this.itemDetail = {
        ...fakeCategoriesData[0].items[0],
        selectedModifierId:
          fakeCategoriesData[0].items[0].modifierCategories[0].modifiers[0].id,
        selectedVariantId:
          fakeCategoriesData[0].items[0].variantCategories[0].variants[0].id,
        totalPrice: fakeCategoriesData[0].items[0].price.amount,
        quantity: 1,
      };
      this.calculateTotalPrice(this.itemDetail);
    } else {
      this.homePageService.selectedItem$.subscribe((item) => {
        this.itemDetail = {
          ...item,
          selectedModifierId: item.modifierCategories[0].modifiers[0].id,
          selectedVariantId: item.variantCategories[0].variants[0].id,
          totalPrice: 0,
          quantity: 1,
        };
        this.calculateTotalPrice(this.itemDetail);
      });
    }

    console.log(this.itemDetail);
  }

  calculateTotalPrice(itemDetail: ItemDetail) {
    const variantPrice = itemDetail.variantCategories[0].variants.find(
      (v) => v.id === itemDetail.selectedVariantId
    )?.price.amount;
    const modifierPrice = itemDetail.modifierCategories[0].modifiers.find(
      (m) => m.id === itemDetail.selectedModifierId
    )?.price.amount;
    this.itemDetail.totalPrice =
      (Number(variantPrice) + Number(modifierPrice)) * Number(this.quantity);
    console.log({
      variantPrice,
      modifierPrice,
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
    this.cartService.addOnceToCart(this.itemDetail);
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
    toast.present();
    this.router.navigate(['/home']);
  }
}
