import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AsyncPipe, CommonModule, NgStyle } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import {
  IonContent,
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
import { BehaviorSubject } from 'rxjs';
import { AddressPopoverComponent } from 'src/app/components/action-sheets/address-popover/address-popover.component';
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
  Address,
  UserResponse,
  UserService,
  UserType,
} from 'src/app/services/user.service';
import { AnimationsService } from '../../services/animations.service';
import { AuthService } from '../../services/auth.service';
import { InventoryService } from '../../services/inventory.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
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
    CodeInputModule,
    LoaderComponent,
    PhoneVerificationComponent,
    OtpComponent,
    EnterNameComponent,
    ChoosePickupBranchComponent,
    AddressPopoverComponent,
    CommonModule,
    RouterModule,
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translateY(30px)', opacity: 0 }),
        animate(
          '400ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
    ]),
    trigger('staggerList', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger('60ms', [
              animate(
                '400ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
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
  action: 'phone-verification' | 'name' | 'otp' | 'address-popover' | null =
    null;
  otp$: BehaviorSubject<string> = new BehaviorSubject('');
  outOfStockItems$ = new BehaviorSubject<string[]>([]);
  orderType: OrderType = 'delivery';
  userAddresses$ = this.userService.userAddresses$;
  selectedAddressIndex: number = 0;

  constructor(
    private homePageService: HomePageService,
    private toastController: ToastController,
    private router: Router,
    private cartService: CartService,
    private route: ActivatedRoute,
    private appService: AppService,
    private userService: UserService,
    private storage: StorageService,
    private authService: AuthService,
    private inventoryService: InventoryService,
    private logger: LoggerService,
    private animationsService: AnimationsService
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
    this.orderType$.subscribe((orderType) => {
      console.log('order type', orderType);
      this.orderType = orderType;
    });
    console.log('I am here');
    this.metaData$.subscribe((metaData) => {
      if (metaData && metaData.branches.length > 0) {
        this.inventoryService
          .getOutOfStockItems(
            metaData.branches[0].branchId.toString(),
            metaData.branches[0].posId.toString(),
            this.appService.restaurantName$.value
          )
          .subscribe(
            (data) => {
              this.outOfStockItems$.next(data);
            },
            (error) => {
              console.log('Error: ', error.error.message);
            }
          );
      }
    });
    //See if user is logged in
    this.storage.get('user').then((user) => {
      if (user) {
        console.log('user', user);

        this.isUserLoggedIn$.next(true);
        this.userService.userPhoneNumber$.next(user.mobile);
        this.userService.userName$.next(user.name);
      } else {
        console.log('user not found');

        this.isUserLoggedIn$.next(false);
      }
    });
  }

  handleOTP(otp: number) {
    console.log(otp);
    this.otp$.next(otp.toString());
    this.action = 'otp';
  }

  isOutOfStock(itemId: string): boolean {
    if (this.outOfStockItems$.value.length > 0) {
      return this.outOfStockItems$?.value?.includes(itemId) || false;
    }
    return false;
  }

  async handleOTPResult(res: HttpResponse<UserResponse>) {
    console.log('response', res);

    if (res.status === 201) {
      console.log('should show name action sheet');

      //new user
      this.action = 'name';
      this.isUserLoggedIn$.next(true);
    } else if (res.status === 200) {
      console.log('should show addresses dropdown');

      this.isUserLoggedIn$.next(true);
      this.action = null;

      const user = await res.body;
      if (user.addresses.length) {
        this.router.navigate(
          ['/', this.restaurantName$.value, 'specify-location'],
          {
            queryParams: { returnTo: 'home' },
          }
        );
      } else {
        this.storage.set('user', res.body);
        // Find and set nearest branch based on user location
        this.homePageService.findAndSetNearestBranch([
          parseFloat(user.addresses[0].coordinates.latitude),
          parseFloat(user.addresses[0].coordinates.longitude),
        ]);
      }
    }
  }

  login() {
    this.action = 'phone-verification';
  }

  selectItem(item: Item) {
    this.homePageService.selectedItem$.next(item);
    this.logger.debug('HomePage', 'Item selected', {
      itemId: item.id,
      itemName: item.name?.en,
      orderType: this.orderType,
    });

    // Check if it's a pickup or delivery flow
    if (this.orderType === 'pickup') {
      // PICKUP FLOW
      // Check if branch is selected
      const selectedBranch = this.homePageService.nearestBranch$.getValue();

      if (!selectedBranch) {
        // No branch selected, open pickup branch selection
        this.logger.info(
          'HomePage',
          'No branch selected for pickup, showing branch selection'
        );
        this.homePageService.shouldShowPickupActionSheet$.next(true);
        // User will be redirected to item-detail after selecting a branch in the action sheet
      } else {
        // Branch already selected, go directly to item detail
        this.logger.info(
          'HomePage',
          'Branch already selected for pickup, navigating to item detail',
          {
            branchId: selectedBranch.branchId,
            branchName: selectedBranch.branchName,
          }
        );
        this.router.navigate(['/', this.restaurantName$.value, 'item-detail']);
      }
    } else {
      // DELIVERY FLOW
      // Check if user has a delivery address set
      const userLocation = this.homePageService.userLocation$.getValue();

      if (!userLocation) {
        // No address set, go to specify location page
        this.logger.info(
          'HomePage',
          'No address set for delivery, redirecting to specify location'
        );
        this.router.navigate(
          ['/', this.restaurantName$.value, 'specify-location'],
          {
            queryParams: { returnTo: 'item-detail' }, // This allows the location page to navigate back properly
          }
        );
      } else {
        // Address already set, go directly to item detail
        this.logger.info(
          'HomePage',
          'Address already set for delivery, navigating to item detail',
          {
            location: userLocation,
          }
        );
        this.router.navigate(['/', this.restaurantName$.value, 'item-detail']);
      }
    }
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
        if (rect.top <= 150) {
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
    console.log('event', event);
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

  closeBranchChooseActionSheet(event: any) {
    console.log('event', event);
  }

  toggleAddressPopover() {
    if (this.action === 'address-popover') {
      this.action = null;
    } else {
      this.action = 'address-popover';
    }
  }

  handleAddressSelected(address: Address) {
    // Store selected address index
    const addresses = this.userAddresses$.value;
    const index = addresses.findIndex(
      (a) =>
        a.coordinates.latitude === address.coordinates.latitude &&
        a.coordinates.longitude === address.coordinates.longitude
    );

    if (index !== -1) {
      this.selectedAddressIndex = index;
    }

    // Find and set nearest branch based on user location
    this.homePageService.findAndSetNearestBranch([
      parseFloat(address.coordinates.latitude),
      parseFloat(address.coordinates.longitude),
    ]);

    this.action = null;
  }
}
