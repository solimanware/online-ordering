import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { AppService } from './app.service';
import { StorageService } from './storage.service';

export type UserType =
  | 'newUserDelivery'
  | 'newUserPickup'
  | 'currentUserDelivery'
  | 'currentUserPickup';

export interface UserResponse {
  code: string;
  mobile: string;
  legacyId: string;
  phoneStatus: string;
  tenantId: string;
  account: string;
  addresses: Address[];
  createdAt: number;
  email: string;
  id: string;
  name: string;
}

export interface Address {
  city: string;
  street: string;
  flat: string;
  coordinates: Coordinates;
  street2: string;
  floor: string;
  landmark: string;
  street_name: string;
  building: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface AddressResponse {
  ResultItems: ResultItem[];
}

export interface ResultItem {
  PlaceId: string;
  PlaceType: string;
  Title: string;
  Address: Address;
  Position: number[];
  Distance: number;
  MapView: number[];
  AccessPoints: AccessPoint[];
}

export interface Address {
  Label: string;
  Country: Country;
  Region: Region;
  SubRegion: SubRegion;
  Locality: string;
  District: string;
  PostalCode: string;
  Street: string;
  StreetComponents: StreetComponent[];
  AddressNumber: string;
}

export interface Country {
  Code2: string;
  Code3: string;
  Name: string;
}

export interface Region {
  Code: string;
  Name: string;
}

export interface SubRegion {
  Name: string;
}

export interface StreetComponent {
  BaseName: string;
  Type: string;
  TypePlacement: string;
  TypeSeparator: string;
  Prefix: string;
  Language: string;
}

export interface AccessPoint {
  Position: number[];
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userType$: UserType = 'newUserDelivery';
  userLocation$: [number, number] | null = null;
  userPhoneNumber$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  userName$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  userAddress$: BehaviorSubject<AddressResponse> =
    new BehaviorSubject<AddressResponse>({
      ResultItems: [],
    });

  private userId$ = new BehaviorSubject<string | null>(null);
  userAddresses$ = new BehaviorSubject<Address[]>([]);

  constructor(
    private storage: StorageService,
    private appService: AppService,
    private http: HttpClient
  ) {
    this.initializeUser();
  }

  private async initializeUser() {
    const userId = await this.storage.get('userId');
    if (userId) {
      this.userId$.next(userId);
    }
  }

  sendWhatsAppOTP(phoneNumber: string) {
    return from(
      fetch(
        `https://api-test.tappya.com/auth/otp?account=${
          this.appService.restaurantName$.value
        }&mobile=${encodeURIComponent(phoneNumber)}`
      )
    );
  }

  verifyOTP(phoneNumber: string, otp: string) {
    return this.http.post<UserResponse>(
      `https://api-test.tappya.com/auth/otp?account=${
        this.appService.restaurantName$.value
      }&mobile=${encodeURIComponent(this.userPhoneNumber$.value)}&code=${otp}`,
      {},
      { observe: 'response' }
    );
  }

  saveUserName(name: string) {
    this.storage.set('user', {
      ...this.storage.get('user'),
      name,
    });
  }

  // private fetchUserData() {
  //   return from(
  //     fetch(
  //       `https://api-test.tappya.com/users/${this.userId$.value}?account=${this.appService.restaurantName$.value}`
  //     ).then((res) => res.json() as Promise<UserResponse>)
  //   ).pipe(
  //     map((response) => {
  //       if (response.name) {
  //         this.userName$.next(response.name);
  //       }
  //       if (response.addresses) {
  //         this.userAddresses$.next(response.addresses);
  //       }
  //       return response;
  //     })
  //   );
  // }
}
