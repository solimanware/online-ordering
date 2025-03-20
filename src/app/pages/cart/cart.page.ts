import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
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
import { CodeInputModule } from 'angular-code-input';
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
import { AnimationsService } from '../../services/animations.service';
import { AuthService } from '../../services/auth.service';
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
  animations: [
    // Add animations
    trigger('cartItemAnimation', [
      transition(':enter', [
        style({ opacity: 0, height: 0, transform: 'translateX(-10px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, height: '*', transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, height: '*' }),
        animate(
          '250ms ease-in',
          style({ opacity: 0, height: 0, transform: 'translateX(-10px)' })
        ),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger('50ms', [
              animate(
                '300ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('buttonPulse', [
      transition('* => *', [
        animate('300ms ease-in-out', style({ transform: 'scale(1.05)' })),
        animate('300ms ease-in-out', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class CartPage implements OnInit {
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
    private checkOutService: CheckOutService,
    private authService: AuthService,
    private animationService: AnimationsService
  ) {
    this.cartService.cartSummary$.subscribe((cartSummary) => {
      console.log(cartSummary);
    });
  }

  ngOnInit() {
    // ... existing code ...
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
}
