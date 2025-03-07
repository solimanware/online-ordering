import { AsyncPipe, NgStyle } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  IonContent,
  IonIcon,
  IonLabel,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonSpinner,
  ToastController,
} from '@ionic/angular/standalone';
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
import { CartSummryCtaComponent } from 'src/app/components/cart-summry-cta/cart-summry-cta.component';
import { ChoosePickupBranchActionSheetComponent } from 'src/app/components/choose-pickup-branch-action-sheet/choose-pickup-branch-action-sheet.component';
import { Category, Item } from 'src/app/interfaces/categories';
import { Branch, MetaData } from 'src/app/interfaces/metaData';
import { AppService } from 'src/app/services/app.service';
import { CartService } from 'src/app/services/cart.service';
import { HomePageService, OrderType } from 'src/app/services/home-page.service';
import { UserType } from 'src/app/services/user.service';

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
    ChoosePickupBranchActionSheetComponent,
    NgStyle,
    IonSpinner,
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

  constructor(
    private homePageService: HomePageService,
    private toastController: ToastController,
    private router: Router,
    private cartService: CartService,
    private route: ActivatedRoute,
    private appService: AppService
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
    if (this.userLocation$.getValue()) {
      this.router.navigate(['/', this.restaurantName$.value, 'item-detail']);
    } else {
      this.router.navigate([
        '/',
        this.restaurantName$.value,
        'specify-location',
      ]);
    }
  }

  async login() {
    this.orderType$.next('delivery');
    this.homePageService.isUserLoggedIn$.next(true);
    const toast = await this.toastController.create({
      message: 'You have logged in successfully',
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });
    // await toast.present();
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
