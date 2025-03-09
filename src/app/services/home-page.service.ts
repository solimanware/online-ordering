import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';
import { BehaviorSubject } from 'rxjs';
import { Category, Item } from 'src/app/interfaces/categories';
import { Branch } from 'src/app/interfaces/metaData';
import { MetaData } from '../interfaces/metaData';
import { AppService } from './app.service';
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
  constructor(
    private toastController: ToastController,
    private appService: AppService
  ) {}

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
      // toast.present();
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

  async findAndSetNearestBranch(location: [number, number]) {
    try {
      const response = await fetch(
        `https://api-test.tappya.com/link/search/nearest-branch?lng=${location[1].toString()}&lat=${location[0].toString()}&account=${
          this.appService.restaurantName$.value
        }`,
        {
          method: 'GET',
        }
      );

      const nearestBranch = await response.json();
      this.nearestBranch$.next(nearestBranch);
      return nearestBranch;
    } catch (error) {
      console.error('Error finding nearest branch:', error);
      // Keep the existing branch if the API call fails
      const branches = this.metaData$.value?.branches;
      if (branches?.length) {
        this.nearestBranch$.next(branches[0]);
      }
    }
  }

  getMetaData(segment: string) {
    return new Promise((resolve, reject) => {
      fetch(`https://api-test.tappya.com/link/search?account=${segment}`)
        .then((res) => res.json())
        .then((data: MetaData) => {
          console.log('meta data', data);
          this.metaData$.next(data);
          this.getCategories(data.branches[0].menuUrl);
          resolve(true);
        });
    });
  }
}
