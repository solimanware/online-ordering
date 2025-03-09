import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  ToastController,
} from '@ionic/angular/standalone';
import { CodeInputModule } from 'angular-code-input';
import { BehaviorSubject } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { ItemDetail } from '../item-detail/item-detail.page';

export interface CartDisplayedItem extends ItemDetail {
  quantity: number;
  totalPrice: number;
}

export interface CartSummary {
  subtotal: number;
  serviceFee: number;
  total: number;
  currency: string;
}

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonContent,
    IonHeader,
    CommonModule,
    FormsModule,
    IonFooter,
    CodeInputModule,
    RouterLink,
  ],
})
export class CartPage {
  cartSummary$ = this.cartService.cartSummary$;
  paymentSummary$ = this.cartService.paymentSummary$;
  action: 'cta' | 'phone-verification' | 'otp' | 'name' = 'cta';
  phoneNumber$: BehaviorSubject<string> = this.userService.userPhoneNumber$;
  name$: BehaviorSubject<string> = this.userService.userName$;
  restaurantName$ = this.appService.restaurantName$;
  otp$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(
    private cartService: CartService,
    private router: Router,
    private userService: UserService,
    private appService: AppService,
    private toastController: ToastController,
    private storage: StorageService
  ) {
    this.cartService.cartSummary$.subscribe((cartSummary) => {
      console.log(cartSummary);
    });
  }
  decreaseQuantity(item: ItemDetail) {
    this.cartService.decreaseQuantity(item);
  }
  increaseQuantity(item: ItemDetail) {
    this.cartService.increaseQuantity(item);
  }

  checkout() {
    this.storage.get('user').then((user) => {
      if (user) {
        this.router.navigate(['/', this.restaurantName$.value, 'new-address']);
      } else {
        this.presentPhoneVerification();
      }
    });
  }
  async presentPhoneVerification() {
    this.action = 'phone-verification';
  }

  async sendWhatsAppOTP(phoneNumber: string) {
    // Implement your WhatsApp OTP sending logic here
    console.log('Sending OTP to:', phoneNumber);
    this.phoneNumber$.next(phoneNumber);
    fetch(
      `https://api-test.tappya.com/auth/otp?account=${this.appService.restaurantName$.value}&mobile=+2${phoneNumber}`
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      });
    this.action = 'otp';
  }
  // this called every time when user changed the code
  onCodeChanged(code: string) {
    this.otp$.next(code);
  }

  // this called only if user entered full code
  onCodeCompleted(code: string) {}

  async verifyOTP(otp: string) {
    // Implement your OTP verification logic here
    fetch(
      `https://api-test.tappya.com/auth/otp?account=${this.appService.restaurantName$.value}&mobile=+2${this.phoneNumber$.value}&code=${this.otp$.value}`,
      {
        method: 'POST',
      }
    )
      .then((response) => {
        if (response.status === 200) {
          this.action = 'name';
        } else {
          this.toastController
            .create({
              message: 'Invalid OTP code. Please try again.',
              duration: 2000,
              position: 'bottom',
              color: 'danger',
            })
            .then((toast) => toast.present());
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error verifying OTP:', error);
      });
  }
  continue() {
    console.log('continue');

    this.router.navigate(['/', this.restaurantName$.value, 'new-address']);
  }
}
