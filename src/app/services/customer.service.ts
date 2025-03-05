import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customerId$ = new BehaviorSubject<string>('');

  constructor() {}
}
