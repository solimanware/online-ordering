import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export type UserType =
  | 'newUserDelivery'
  | 'newUserPickup'
  | 'currentUserDelivery'
  | 'currentUserPickup';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  userType$: UserType = 'newUserDelivery';
  userLocation$: [number, number] | null = null;
  userPhoneNumber$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  userName$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  userAddress$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}
}
