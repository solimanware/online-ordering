import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddressResponse } from './user.service';

const PLACES_API_URL = 'https://places.geo.eu-west-1.amazonaws.com/v2';
const API_KEY =
  'v1.public.eyJqdGkiOiI1OWZkZjQ4My1lZTI0LTRiNzUtYTUxOS1mY2M2NTVhZjNjY2EifdHxJgL-Gw-jZjzFQa1QwFY8Ag79JkmI4QB09vWqzMvgrr14KNPIMv-gSIdaWbROoDYN0-Q8m1-ow5oQ5E3L1kmFDwI0rLHooetc_Uu5OtSCEvXKkPO1688_5XGFIXuf_DgyqGzqF9UihjWEAFXC9BzRXdc_iMYDDy0FcAgjnN8hG50apca6Jc_Putfxu8vGHm6EuO9P2KvPwB-fLf5pCg3xq3P7Xq0qd1uIFpu9DCS-hBebCDfco249oHcK3KMJAQog1rmcUx1g3yR9ELlhulILqgTJnFmuKpkfgXGimaCqq6ShUaYPadz-TUyUOsYJkZeZE7qHK22v_OO5skweWMk.ZGQzZDY2OGQtMWQxMy00ZTEwLWIyZGUtOGVjYzUzMjU3OGE4';

export interface PlacesSearchResponse {
  ResultItems: any[];
}

export interface PlaceDetails {
  Position: [number, number];
}

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getCurrentPosition(): Observable<GeolocationPosition> {
    return new Observable((observer) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position);
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  searchPlaces(searchText: string): Observable<PlacesSearchResponse> {
    return this.http.post<PlacesSearchResponse>(
      `${PLACES_API_URL}/autocomplete?key=${API_KEY}`,
      { QueryText: searchText }
    );
  }

  getPlaceDetails(placeId: string): Observable<[number, number]> {
    return this.http
      .get<PlaceDetails>(`${PLACES_API_URL}/place/${placeId}?key=${API_KEY}`)
      .pipe(map((data) => [data.Position[0], data.Position[1]]));
  }

  reverseGeocode(location: [number, number]): Observable<AddressResponse> {
    return this.http.post<AddressResponse>(
      `${PLACES_API_URL}/reverse-geocode?key=${API_KEY}`,
      {
        QueryPosition: [location[0], location[1]].reverse(),
      }
    );
  }
}
