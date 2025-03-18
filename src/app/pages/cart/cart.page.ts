import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
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
import { phone } from 'phone';
import { BehaviorSubject } from 'rxjs';
import { EnterNameComponent } from 'src/app/components/action-sheets/enter-name/enter-name.component';
import { OtpComponent } from 'src/app/components/action-sheets/otp/otp.component';
import { PhoneVerificationComponent } from 'src/app/components/action-sheets/phone-verification/phone-verification.component';
import { AppService } from 'src/app/services/app.service';
import { CartService } from 'src/app/services/cart.service';
import { CheckOutService } from 'src/app/services/check-out.service';
import { HomePageService } from 'src/app/services/home-page.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserResponse, UserService } from 'src/app/services/user.service';
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
    EnterNameComponent,
    PhoneVerificationComponent,
    OtpComponent,
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
  notes$ = this.checkOutService.notes$;

  constructor(
    private cartService: CartService,
    private router: Router,
    private userService: UserService,
    private appService: AppService,
    private toastController: ToastController,
    private storage: StorageService,
    private homePageService: HomePageService,
    private checkOutService: CheckOutService
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
    this.homePageService.isPickupFlow$.subscribe((isPickupFlow) => {
      this.storage.get('user').then((user) => {
        if (user && !isPickupFlow) {
          this.router.navigate([
            '/',
            this.restaurantName$.value,
            'new-address',
          ]);
        } else {
          this.presentPhoneVerification();
        }
      });
    });
  }
  async presentPhoneVerification() {
    this.action = 'phone-verification';
  }

  handleOTP(otp: number) {
    console.log(otp);
    this.otp$.next(otp.toString());
    this.action = 'otp';
  }

  async handleOTPResult(res: HttpResponse<UserResponse>) {
    console.log('response', res);

    if (res.status === 201) {
      this.action = 'name';
      this.homePageService.isUserLoggedIn$.next(true);
      //TODO: choose location if no location is set
    } else if (res.status === 200) {
      this.homePageService.isUserLoggedIn$.next(true);
      this.action = null;
      const user = await res.body;
      this.storage.set('user', res.body);
      if (
        !user?.addresses?.length &&
        !this.homePageService.isPickupFlow$.value
      ) {
        this.router.navigate(
          ['/', this.restaurantName$.value, 'specify-location'],
          {
            queryParams: { returnTo: 'home' },
          }
        );
      } else if (this.homePageService.isPickupFlow$.value) {
        this.router.navigate(['/', this.restaurantName$.value, 'check-out']);
      }
    }
  }

  async sendWhatsAppOTP(phoneNumber: string) {
    // Implement your WhatsApp OTP sending logic here
    console.log('Sending OTP to:', phoneNumber);
    const phoneNumberFormatted = phone(phoneNumber, { country: 'EG' });
    if (phoneNumberFormatted.isValid) {
      this.phoneNumber$.next(phoneNumberFormatted.phoneNumber);
      fetch(
        `https://api-test.tappya.com/auth/otp?account=${
          this.appService.restaurantName$.value
        }&mobile=${encodeURIComponent(phoneNumberFormatted.phoneNumber)}`
      )
        .then((res) => res.text())
        .then((data) => {
          console.log(data);
        });
      this.action = 'otp';
    } else {
      this.toastController
        .create({
          message: 'Invalid phone number. Please try again.',
          duration: 2000,
          position: 'bottom',
          color: 'danger',
        })
        .then((toast) => toast.present());
    }
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
      `https://api-test.tappya.com/auth/otp?account=${
        this.appService.restaurantName$.value
      }&mobile=${encodeURIComponent(this.phoneNumber$.value)}&code=${
        this.otp$.value
      }`,
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
