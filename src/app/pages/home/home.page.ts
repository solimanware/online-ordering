import { AsyncPipe, NgStyle } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  IonContent,
  IonFooter,
  IonIcon,
  IonLabel,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  ToastController,
} from '@ionic/angular/standalone';
import { CodeInputModule } from 'angular-code-input';
import { addIcons } from 'ionicons';
import {
  cartOutline,
  chevronDownOutline,
  closeOutline,
  globeOutline,
  locationOutline,
  personOutline,
  searchOutline,
} from 'ionicons/icons';
import { phone } from 'phone';
import { BehaviorSubject } from 'rxjs';
import { ChoosePickupBranchComponent } from 'src/app/components/action-sheets/choose-pickup-branch/choose-pickup-branch.component';
import { EnterNameComponent } from 'src/app/components/action-sheets/enter-name/enter-name.component';
import { OtpComponent } from 'src/app/components/action-sheets/otp/otp.component';
import { PhoneVerificationComponent } from 'src/app/components/action-sheets/phone-verification/phone-verification.component';
import { CartSummryCtaComponent } from 'src/app/components/cart-summry-cta/cart-summry-cta.component';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { Category, Item } from 'src/app/interfaces/categories';
import { Branch, MetaData } from 'src/app/interfaces/metaData';
import { AppService } from 'src/app/services/app.service';
import { CartService } from 'src/app/services/cart.service';
import { HomePageService, OrderType } from 'src/app/services/home-page.service';
import { StorageService } from 'src/app/services/storage.service';
import {
  UserResponse,
  UserService,
  UserType,
} from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    RouterLink,
    IonIcon,
    NgStyle,
    AsyncPipe,
    FormsModule,
    CartSummryCtaComponent,
    ChoosePickupBranchComponent,
    NgStyle,
    CodeInputModule,
    IonFooter,
    LoaderComponent,
    PhoneVerificationComponent,
    OtpComponent,
    EnterNameComponent,
  ],
})
export class HomePage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;
  @ViewChild(IonSegment) segment!: IonSegment;
  isFixedContentSticky: boolean = false;
  didScroll: boolean = false;
  userType: UserType = 'newUserDelivery';
  resturntName: string = '';
  shouldShowPrices$: BehaviorSubject<boolean> =
    this.homePageService.shouldShowPrices$;
  metaData$: BehaviorSubject<MetaData> = this.homePageService.metaData$;
  categories$: BehaviorSubject<Category[]> = this.homePageService.categories$;
  userLocation$: BehaviorSubject<[number, number]> =
    this.homePageService.userLocation$;
  orderType$: BehaviorSubject<OrderType> = this.homePageService.orderType$;
  activeCategory$: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.categories$.getValue()[0]?.name.en || ''
  );
  isUserLoggedIn$: BehaviorSubject<boolean> =
    this.homePageService.isUserLoggedIn$;
  paymentSummary$ = this.cartService.paymentSummary$;
  nearestBranch$: BehaviorSubject<Branch> = this.homePageService.nearestBranch$;
  shouldShowPickupActionSheet$: BehaviorSubject<boolean> =
    this.homePageService.shouldShowPickupActionSheet$;
  isPickupFlow$: BehaviorSubject<boolean> = this.homePageService.isPickupFlow$;
  returnTo: string = 'home';
  restaurantName$ = this.appService.restaurantName$;
  phoneNumber$: BehaviorSubject<string> = this.userService.userPhoneNumber$;
  name$: BehaviorSubject<string> = this.userService.userName$;
  action: 'phone-verification' | 'name' | 'otp' | null = null;
  otp$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(
    private homePageService: HomePageService,
    private toastController: ToastController,
    private router: Router,
    private cartService: CartService,
    private route: ActivatedRoute,
    private appService: AppService,
    private userService: UserService,
    private storage: StorageService
  ) {
    addIcons({
      globeOutline,
      cartOutline,
      searchOutline,
      chevronDownOutline,
      locationOutline,
      personOutline,
      closeOutline,
    });
    this.categories$.subscribe((categories) => {
      if (categories.length > 0) {
        this.activeCategory$.next(categories[0].name.en);
        console.log('active category', this.activeCategory$.value);
      }
    });
  }

  ngOnInit() {
    console.log('I am here');
    this.metaData$.subscribe((metaData) => {
      fetch(
        `https://api-test.tappya.com/branch/${this.metaData$.value.branches[0].id}/pos/${this.metaData$.value.branches[0].posId}/out-of-stock?account=${this.appService.restaurantName$.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });
    //See if user is logged in
    this.storage.get('user').then((user) => {
      if (user) {
        console.log('user', user);

        this.isUserLoggedIn$.next(true);
      } else {
        console.log('user not found');

        this.isUserLoggedIn$.next(false);
      }
    });
    //Get user location and get nearest branch automatically
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation: [number, number] = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          this.userService.userLocation$ = userLocation;
          this.homePageService.userLocation$.next(userLocation);
          console.log(userLocation);

          this.homePageService
            .findAndSetNearestBranch(userLocation)
            .then((res) => {
              console.log(res.data[0]);

              this.homePageService.nearestBranch$.next(res.data[0]);
            });
        },
        (error) => {
          console.error('Error getting location:', error);
          // Use default branch if location access is denied
          const branches = this.metaData$.value?.branches;
          if (branches?.length) {
            this.homePageService.nearestBranch$.next(branches[0]);
          }
        }
      );
    } else {
      console.log('Geolocation not supported by this browser');
      // Use default branch if geolocation is not supported
      const branches = this.metaData$.value?.branches;
      if (branches?.length) {
        this.homePageService.nearestBranch$.next(branches[0]);
      }
    }
  }

  handleOTP(otp: number) {
    console.log(otp);
    this.otp$.next(otp.toString());
    this.action = 'otp';
  }

  handleOTPResult(res: UserResponse) {
    this.homePageService.isUserLoggedIn$.next(true);
    console.log(res);
    if (!res.name) {
      this.action = 'name';
    } else if (!res.addresses.length) {
      this.storage.set('user', res);
      this.router.navigate([
        '/',
        this.restaurantName$.value,
        'specify-location',
      ]);
      this.action = null;
    } else {
      this.action = null;
    }
  }

  sendWhatsAppOTP(phoneNumber: string) {
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

  onCodeChanged(code: string) {
    this.otp$.next(code);
  }

  onCodeCompleted(code: string) {
    // this.verifyOTP(this.phoneNumber$.value);
  }

  verifyOTP(phoneNumber: string) {
    if (!this.otp$.value) return;

    this.userService.verifyOTP(phoneNumber, this.otp$.value).subscribe({
      next: (response) => {
        if (!response.name) {
          // New user
          this.action = 'name';
        } else {
          // Existing user
          console.log(response);

          if (!response.addresses.length) {
            this.router.navigate(
              ['/', this.restaurantName$.value, 'specify-location'],
              {
                queryParams: { returnTo: 'home' },
              }
            );
          } else {
            this.storage.set('user', response);
            // Find and set nearest branch based on user location
            this.homePageService.findAndSetNearestBranch([
              parseFloat(response.addresses[0].coordinates.latitude),
              parseFloat(response.addresses[0].coordinates.longitude),
            ]);
          }
          this.action = null;
          this.homePageService.isUserLoggedIn$.next(true);
        }
      },
      error: (error) => {
        console.error('OTP verification failed:', error);
        // Show error toast
      },
    });
  }

  continue() {
    if (!this.name$.value) return;

    this.userService.saveUserName(this.name$.value);

    if (!this.userLocation$.getValue()) {
      this.router.navigate(
        ['/', this.restaurantName$.value, 'specify-location'],
        {
          queryParams: { returnTo: 'home' },
        }
      );
    }
    this.action = null;
    this.homePageService.isUserLoggedIn$.next(true);
  }

  async presentPhoneVerification() {
    this.action = 'phone-verification';
  }

  ionWillEnter() {
    this.homePageService.isUserLoggedIn$.next(true);
    this.orderType$.next('delivery');
    console.log(this.userLocation$.getValue());

    if (this.userLocation$.getValue()) {
      this.homePageService.nearestBranch$.next(
        this.metaData$.value.branches[0]
      );
    } else {
      //pickup mode
      this.nearestBranch$.next(null);
    }
  }

  closeBranchChooseActionSheet(event: any) {
    console.log('event', event);
  }

  selectBranch() {
    this.homePageService.nearestBranch$.next(this.metaData$.value.branches[0]);
  }

  selectItem(item: Item) {
    this.homePageService.selectedItem$.next(item);
    console.log(item);
    this.storage.get('user').then((user) => {
      if (user) {
        this.router.navigate(['/', this.restaurantName$.value, 'item-detail']);
      } else {
        this.login();
      }
    });
  }

  async login() {
    this.orderType$.next('delivery');
    this.action = 'phone-verification';
  }

  itemChoosen() {
    const isLoggedIn = this.homePageService.isUserLoggedIn$.getValue();
    const isLocationSet = this.homePageService.userLocation$.getValue();
    console.log(isLoggedIn, isLocationSet);
    if (isLocationSet) {
      this.router.navigate(['/', this.restaurantName$.value, 'item-detail']);
    } else {
      this.router.navigate([
        '/',
        this.restaurantName$.value,
        'specify-location',
      ]);
    }
  }

  async handleScroll(event: any) {
    const scrollPosition = await this.content
      .getScrollElement()
      .then((element) => element.scrollTop);

    // Handle sticky header
    this.isFixedContentSticky = scrollPosition > 300;

    // Handle active category
    const categories = this.categories$.getValue();
    const categoryElements = categories.map((cat) =>
      document.getElementById(`category-${cat.name.en}`)
    );

    // Find the category currently in view
    for (let i = categoryElements.length - 1; i >= 0; i--) {
      const element = categoryElements[i];
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100) {
          // Adjust this value based on your layout
          this.activeCategory$.next(categories[i].name.en);
          this.segment.value = this.activeCategory$.value;
          break;
        }
      }
    }
  }

  scrollToCategory(categoryName: string) {
    const element = document.getElementById(`category-${categoryName}`);
    this.content.scrollToPoint(0, element.offsetTop - 128, 500);
  }

  onOrderTypeChange(event: any) {
    this.orderType$.next(event.detail.value);

    if (event.detail.value === 'pickup') {
      setTimeout(() => {
        this.homePageService.shouldShowPickupActionSheet$.next(true);
        this.isPickupFlow$.next(true);
      }, 0);
    } else {
      this.homePageService.shouldShowPickupActionSheet$.next(false);
      this.isPickupFlow$.next(false);
    }
  }

  closePickupMode() {
    this.orderType$.next('delivery');
  }
}
