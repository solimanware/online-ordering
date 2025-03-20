import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_URL } from '../global';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customerId$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  createCustomer(account: string, customer: Customer): Observable<any> {
    return this.http.post<any>(
      `${API_URL}/customer/create-customer?account=${account}`,
      JSON.stringify(customer)
    );
  }
}
