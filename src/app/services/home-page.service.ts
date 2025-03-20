import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { Category, Item } from 'src/app/interfaces/categories';
import { Branch } from 'src/app/interfaces/metaData';
import { API_URL } from '../global';
import { MetaData } from '../interfaces/metaData';
import { AppService } from './app.service';
import { LoggerService } from './logger.service';
import { StorageService } from './storage.service';

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
    private appService: AppService,
    private storage: StorageService,
    private http: HttpClient,
    private logger: LoggerService
  ) {
    this.logger.info('HomePageService', 'Service initialized');
  }

  async setDemoMode() {
    this.logger.info('HomePageService', 'Setting demo mode');
    setTimeout(async () => {
      this.isUserLoggedIn$.next(true);
      this.orderType$.next('delivery');
      this.userLocation$.next([37.7749, -122.4194]);
      this.logger.debug('HomePageService', 'Demo mode activated', {
        isLoggedIn: true,
        orderType: 'delivery',
        location: [37.7749, -122.4194],
      });

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
    this.logger.info('HomePageService', 'Fetching categories', { url });
    this.http.get<{ categories: Category[] }>(url).subscribe({
      next: (data) => {
        this.logger.debug(
          'HomePageService',
          'Categories fetched successfully',
          {
            count: data.categories.length,
          }
        );
        this.categories$.next(data.categories);
      },
      error: (error) => {
        this.logger.error(
          'HomePageService',
          'Failed to fetch categories',
          error
        );
      },
    });
  }

  async findAndSetNearestBranch(location: [number, number]) {
    this.logger.info('HomePageService', 'Finding nearest branch', { location });
    try {
      const url = `${API_URL}/link/search/nearest-branch?lng=${location[1].toString()}&lat=${location[0].toString()}&account=${
        this.appService.restaurantName$.value
      }`;
      const nearestBranch = await lastValueFrom(this.http.get<Branch>(url));
      this.nearestBranch$.next(nearestBranch);
      this.logger.debug('HomePageService', 'Nearest branch found', {
        branchId: nearestBranch.branchId,
        name: nearestBranch.branchName,
      });
      return nearestBranch;
    } catch (error) {
      this.logger.error(
        'HomePageService',
        'Error finding nearest branch',
        error
      );
      // Keep the existing branch if the API call fails
      const branches = this.metaData$.value?.branches;
      if (branches?.length) {
        this.nearestBranch$.next(branches[0]);
        this.logger.warn('HomePageService', 'Using first branch as fallback', {
          branchId: branches[0].branchId,
        });
        return branches[0];
      }
      return null;
    }
  }

  getMetaData(segment: string) {
    this.logger.info('HomePageService', 'Fetching metadata', { segment });
    return new Promise((resolve, reject) => {
      this.http
        .get<MetaData>(`${API_URL}/link/search?account=${segment}`)
        .subscribe({
          next: (data: MetaData) => {
            this.logger.debug(
              'HomePageService',
              'Metadata fetched successfully',
              {
                branchesCount: data.branches?.length || 0,
              }
            );
            this.metaData$.next(data);
            if (data.branches && data.branches.length > 0) {
              this.getCategories(data.branches[0].menuUrl);
            } else {
              this.logger.warn(
                'HomePageService',
                'No branches found in metadata'
              );
            }
            resolve(data);
          },
          error: (error) => {
            this.logger.error(
              'HomePageService',
              'Failed to fetch metadata',
              error
            );
            reject(error);
          },
        });
    });
  }
}
