import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../global';
import { CheckoutBody } from '../interfaces/checkout';

export interface OrderResponse {
  order: string;
  // ... other properties
}

export interface OrderStatus {
  status:
    | 'Accepted By Branch'
    | 'Preparing'
    | 'In Delivery'
    | 'Delivered'
    | 'Ready for Pickup'
    | 'Picked Up';
  // ... other properties
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  createOrder(
    branchId: string,
    posId: string,
    account: string,
    body: CheckoutBody
  ): Observable<OrderResponse> {
    const url = `${API_URL}/branch/${branchId}/pos/${posId}/create-order?account=${account}`;
    return this.http.post<OrderResponse>(url, body);
  }

  getOrderStatus(
    branchId: string,
    posId: string,
    accountId: string,
    orderId: string
  ): Observable<OrderStatus> {
    const url = `${API_URL}/branch/${branchId}/pos/${posId}/get-order-status?account=${accountId}&orderId=${orderId}`;
    return this.http.get<OrderStatus>(url);
  }
}
