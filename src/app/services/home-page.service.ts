import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';
import { BehaviorSubject } from 'rxjs';
import { Category, Item } from 'src/app/interfaces/categories';
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
  orderType$ = new BehaviorSubject<OrderType>(null);
  userLocation$ = new BehaviorSubject<[number, number] | null>(null);
  categories$ = new BehaviorSubject<Category[]>([]);
  metaData$ = new BehaviorSubject<MetaData>(null);
  selectedItem$ = new BehaviorSubject<Item | null>(null);
  constructor(private toastController: ToastController) {
    this.getCategories();
    this.getMetaData();
    if (environment.demoMode) {
      this.setDemoMode();
    }
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

  getCategories() {
    this.categories$.next(fakeCategoriesData);
    console.log(this.categories$.value);
  }

  getMetaData() {
    this.metaData$.next(fakeMetaData);
  }
}
