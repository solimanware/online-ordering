import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';
import { BehaviorSubject } from 'rxjs';
import { Category, Item } from 'src/app/interfaces/categories';
import { Branch } from 'src/app/interfaces/metaData';
import { environment } from 'src/environments/environment';
import { fakeCategoriesData } from '../data/fakeCategoriesData';
import { fakeMetaData } from '../data/fakeMetaData';
import { MetaData } from '../interfaces/metaData';
export type OrderType = 'delivery' | 'pickup' | null;

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  shouldShowPrices$ = new BehaviorSubject<boolean>(false);
  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  orderType$ = new BehaviorSubject<OrderType>('delivery');
  userLocation$ = new BehaviorSubject<[number, number] | null>(null);
  categories$ = new BehaviorSubject<Category[]>([]);
  metaData$ = new BehaviorSubject<MetaData>(null);
  selectedItem$ = new BehaviorSubject<Item | null>(null);
  nearestBranch$ = new BehaviorSubject<Branch | null>(null);
  shouldShowPickupActionSheet$ = new BehaviorSubject<boolean>(false);
  isPickupFlow$ = new BehaviorSubject<boolean>(false);
  constructor(private toastController: ToastController) {
    this.getMetaData();
  }

  async setDemoMode() {
    setTimeout(async () => {
      this.isUserLoggedIn$.next(true);
      this.orderType$.next('delivery');
      this.userLocation$.next([37.7749, -122.4194]);
      console.log('demo mode');
      const toast = await this.toastController.create({
        message: 'You have Logged in Successfully',
        duration: 2000,
        position: 'bottom',
        color: 'success',
      });
      toast.present();
    }, 1000);
  }

  getCategories(url: string) {
    fetch(url)
      .then((res) => res.json())
      .then((data: { categories: Category[] }) => {
        console.log('categories', data);
        this.categories$.next(data.categories);
      });
  }

  getMetaData() {
    if (environment.production) {
      const url = new URL(window.location.href);
      let firstSegment = url.pathname.split('/')[1];
      console.log(firstSegment);
      fetch(`https://api-test.tappya.com/link/search?account=${firstSegment}`)
        .then((res) => res.json())
        .then((data: MetaData) => {
          console.log('meta data', data);
          this.metaData$.next(data);
          this.getCategories(data.branches[0].menuUrl);
        });
    } else {
      this.metaData$.next(fakeMetaData);
      this.categories$.next(fakeCategoriesData);
    }
  }
}
