import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':restaurantName',
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'item-detail',
        loadComponent: () =>
          import('./pages/item-detail/item-detail.page').then(
            (m) => m.ItemDetailPage
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/cart/cart.page').then((m) => m.CartPage),
      },
      {
        path: 'specify-location',
        loadComponent: () =>
          import('./pages/specify-location/specify-location.page').then(
            (m) => m.SpecifyLocationPage
          ),
      },
      {
        path: 'new-address',
        loadComponent: () =>
          import('./pages/new-address/new-address.page').then(
            (m) => m.NewAddressPage
          ),
      },
      {
        path: 'check-out',
        loadComponent: () =>
          import('./pages/check-out/check-out.page').then(
            (m) => m.CheckOutPage
          ),
      },
      {
        path: 'order-tracking',
        loadComponent: () =>
          import('./pages/order-tracking/order-tracking.page').then(
            (m) => m.OrderTrackingPage
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
