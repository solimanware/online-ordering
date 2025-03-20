import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Item } from 'src/app/interfaces/categories';
import { Branch } from 'src/app/interfaces/metaData';
import { HomePageService } from 'src/app/services/home-page.service';
import { LoggerService } from 'src/app/services/logger.service';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let homePageServiceSpy: jasmine.SpyObj<HomePageService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let loggerServiceSpy: jasmine.SpyObj<LoggerService>;

  const mockItem: Item = {
    id: 'item1',
    name: { en: 'Test Item', ar: 'اختبار' },
    sequence: '1',
    fromTime: '',
    toTime: '',
    itemId: 'item1',
    barcode: '',
    code: '',
    description: { en: 'Test Description', ar: 'وصف الاختبار' },
    calories: 0,
    tags: [],
    uom: '',
    preparationTime: 0,
    imageUrl: '',
    taxIds: [],
    outOfStock: false,
    variantCategories: [],
    modifierCategories: [],
    price: { amount: 100, currency: 'EGP' },
    selectedModifierId: '',
    selectedVariantId: '',
    totalPrice: 100,
    quantity: 1,
    subtotal: 100,
    total: 100,
    currency: 'EGP',
  };

  const mockBranch: Branch = {
    posId: 1,
    branchName: 'Test Branch',
    branchId: 'branch1',
    areaId: 1,
    areaName: 'Test Area',
    price: 0,
    deliveryFees: 0,
    deliveryTax: { id: 1, amount: 0, priceInclude: false },
    distance: '0',
    unit: 'km',
    discounts: [],
    promotions: [],
    paymentMethods: [],
    note: '',
    menuUrl: 'test-url',
  };

  beforeEach(waitForAsync(() => {
    const homePageSpy = jasmine.createSpyObj('HomePageService', [
      'selectedItem$',
      'nearestBranch$',
      'userLocation$',
      'shouldShowPickupActionSheet$',
    ]);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const loggerSpyObj = jasmine.createSpyObj('LoggerService', [
      'debug',
      'info',
      'error',
      'warn',
    ]);

    TestBed.configureTestingModule({
      declarations: [HomePage],
      providers: [
        { provide: HomePageService, useValue: homePageSpy },
        { provide: Router, useValue: routerSpyObj },
        { provide: LoggerService, useValue: loggerSpyObj },
      ],
    }).compileComponents();

    homePageServiceSpy = TestBed.inject(
      HomePageService
    ) as jasmine.SpyObj<HomePageService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    loggerServiceSpy = TestBed.inject(
      LoggerService
    ) as jasmine.SpyObj<LoggerService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;

    // Set default behavior for observables
    homePageServiceSpy.selectedItem$ = of(null);
    homePageServiceSpy.nearestBranch$ = of(null);
    homePageServiceSpy.userLocation$ = of(null);
    homePageServiceSpy.shouldShowPickupActionSheet$ = of(false);

    fixture.detectChanges();
  });

  describe('Pickup Flow', () => {
    it('should show branch selection when no branch is selected', () => {
      // Setup
      component.orderType = 'pickup';
      homePageServiceSpy.nearestBranch$.getValue.and.returnValue(null);

      // Action
      component.selectItem(mockItem);

      // Assert
      expect(homePageServiceSpy.selectedItem$.next).toHaveBeenCalledWith(
        mockItem
      );
      expect(
        homePageServiceSpy.shouldShowPickupActionSheet$.next
      ).toHaveBeenCalledWith(true);
      expect(routerSpy.navigate).not.toHaveBeenCalled();
    });

    it('should navigate directly to item detail when branch is already selected', () => {
      // Setup
      component.orderType = 'pickup';
      homePageServiceSpy.nearestBranch$.getValue.and.returnValue(mockBranch);

      // Action
      component.selectItem(mockItem);

      // Assert
      expect(homePageServiceSpy.selectedItem$.next).toHaveBeenCalledWith(
        mockItem
      );
      expect(
        homePageServiceSpy.shouldShowPickupActionSheet$.next
      ).not.toHaveBeenCalled();
      expect(routerSpy.navigate).toHaveBeenCalledWith([
        '/',
        component.restaurantName$.value,
        'item-detail',
      ]);
    });
  });

  describe('Delivery Flow', () => {
    it('should navigate to specify location when no address is set', () => {
      // Setup
      component.orderType = 'delivery';
      homePageServiceSpy.userLocation$.getValue.and.returnValue(null);

      // Action
      component.selectItem(mockItem);

      // Assert
      expect(homePageServiceSpy.selectedItem$.next).toHaveBeenCalledWith(
        mockItem
      );
      expect(routerSpy.navigate).toHaveBeenCalledWith(
        ['/', component.restaurantName$.value, 'specify-location'],
        { queryParams: { returnTo: 'item-detail' } }
      );
    });

    it('should navigate directly to item detail when address is already set', () => {
      // Setup
      component.orderType = 'delivery';
      homePageServiceSpy.userLocation$.getValue.and.returnValue([
        37.7749, -122.4194,
      ]);

      // Action
      component.selectItem(mockItem);

      // Assert
      expect(homePageServiceSpy.selectedItem$.next).toHaveBeenCalledWith(
        mockItem
      );
      expect(routerSpy.navigate).toHaveBeenCalledWith([
        '/',
        component.restaurantName$.value,
        'item-detail',
      ]);
    });
  });
});
