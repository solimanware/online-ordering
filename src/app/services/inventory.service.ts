import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../global';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private http: HttpClient) {}

  getOutOfStockItems(
    branchId: string,
    posId: string,
    account: string
  ): Observable<string[]> {
    return this.http.get<string[]>(
      `${API_URL}/branch/${branchId}/pos/${posId}/out-of-stock?account=${account}`
    );
  }
}
