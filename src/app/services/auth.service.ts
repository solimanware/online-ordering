import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../global';

export interface UserResponse {
  mobile: string;
  name: string;
  addresses: any[];
  // ... other properties
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  sendWhatsAppOTP(account: string, phoneNumber: string): Observable<string> {
    return this.http.get<string>(
      `${API_URL}/auth/otp?account=${account}&mobile=${encodeURIComponent(
        phoneNumber
      )}`
    );
  }

  verifyOTP(
    account: string,
    phoneNumber: string,
    otp: string
  ): Observable<HttpResponse<UserResponse>> {
    return this.http.post<UserResponse>(
      `${API_URL}/auth/otp?account=${account}&mobile=${encodeURIComponent(
        phoneNumber
      )}&code=${otp}`,
      {},
      { observe: 'response' }
    );
  }
}
