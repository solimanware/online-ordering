import { Injectable } from '@angular/core';
import { BehaviorSubject, from, map, switchMap } from 'rxjs';
import { AppService } from './app.service';
import { StorageService } from './storage.service';

export type UserType =
  | 'newUserDelivery'
  | 'newUserPickup'
  | 'currentUserDelivery'
  | 'currentUserPickup';

interface UserResponse {
  status: 200 | 201;
  id: string;
  name?: string;
  addresses?: Address[];
}

interface Address {
  id: string;
  location: [number, number];
  label: string;
  isDefault: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userType$: UserType = 'newUserDelivery';
  userLocation$: [number, number] | null = null;
  userPhoneNumber$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  userName$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  userAddress$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private userId$ = new BehaviorSubject<string | null>(null);
  userAddresses$ = new BehaviorSubject<Address[]>([]);

  constructor(private storage: StorageService, private appService: AppService) {
    this.initializeUser();
  }

  private async initializeUser() {
    const userId = await this.storage.get('userId');
    if (userId) {
      this.userId$.next(userId);
      this.fetchUserData();
    }
  }

  verifyOTP(phoneNumber: string, otp: string) {
    return from(
      fetch(
        `https://api-test.tappya.com/auth/otp?account=${this.appService.restaurantName$.value}&mobile=+2${this.userPhoneNumber$.value}&code=${otp}`,
        {
          method: 'POST',
        }
      ).then((res) => res.json() as Promise<UserResponse>)
    ).pipe(
      switchMap(async (response) => {
        await this.storage.set('userId', response.id);
        this.userId$.next(response.id);

        if (response.name) {
          this.userName$.next(response.name);
        }
        if (response.addresses) {
          this.userAddresses$.next(response.addresses);
        }

        return response;
      })
    );
  }

  saveUserName(name: string) {
    return from(
      fetch(
        `https://api-test.tappya.com/users/${this.userId$.value}/name?account=${this.appService.restaurantName$.value}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name }),
        }
      ).then((res) => res.json())
    ).pipe(
      map(() => {
        this.userName$.next(name);
        return true;
      })
    );
  }

  private fetchUserData() {
    return from(
      fetch(
        `https://api-test.tappya.com/users/${this.userId$.value}?account=${this.appService.restaurantName$.value}`
      ).then((res) => res.json() as Promise<UserResponse>)
    ).pipe(
      map((response) => {
        if (response.name) {
          this.userName$.next(response.name);
        }
        if (response.addresses) {
          this.userAddresses$.next(response.addresses);
        }
        return response;
      })
    );
  }
}
