import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Location } from '@aws-sdk/client-location';
import {
  IonHeader,
  IonIcon,
  IonSegment,
  IonSegmentButton,
} from '@ionic/angular/standalone';
import { MapComponent } from '@maplibre/ngx-maplibre-gl';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  location,
  locationOutline,
  searchOutline,
} from 'ionicons/icons';
import { Map } from 'maplibre-gl';
import {
  debounceTime,
  from,
  Observable,
  Subject,
  Subscriber,
  switchMap,
} from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { HomePageService } from 'src/app/services/home-page.service';
const awsRegion = 'eu-west-1';
const mapStyle = 'Standard';
const apiKey =
  'v1.public.eyJqdGkiOiJlNzhmNzczMS1iN2JiLTQzNmYtYTI0ZS0xZDIzODI2ZWUwZjkifRpvdITR-1CVNbYwlc1aaEitntKMMpQXaX3rg1myP0ZwV94dLRkniQNpQYzw19kOKqztasNhSFCcReeI3GEANGlvcX2J0XmzSSPonvB-3QOMhdaww7t_TxrUDfqUEI72uayQcno3EpZLkNDlM2xdzD265YU3DbbbcKn6lqE2SS_ho4O4NUKu1TjqDfEeB5APJT2GJ0tzh53m_rxS_KoHIZrlD5hbXb6Ma7pCUENZspPDE7fXisPDTPYY9zlqhBvDhIVN8Lot2WXhLRX87r9-5thfKlWIDs6ZkzHX71uLHGc1PF_GmMl2-QLbk0ZUnF4voWuBuZaSRgypwrFfgqRWySM.ZGQzZDY2OGQtMWQxMy00ZTEwLWIyZGUtOGVjYzUzMjU3OGE4';
export const style = `https://maps.geo.${awsRegion}.amazonaws.com/v2/styles/${mapStyle}/descriptor?key=${apiKey}`;
@Component({
  selector: 'app-specify-location',
  templateUrl: './specify-location.page.html',
  styleUrls: ['./specify-location.page.scss'],
  standalone: true,
  imports: [
    MapComponent,
    IonHeader,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    FormsModule,
    RouterLink,
    NgFor,
    NgIf,
    AsyncPipe,
  ],
})
export class SpecifyLocationPage {
  selectedSegment = 'delivery';
  mapStyle: string = style;
  zoomLevel: [number] = [5];
  mapCenter: [number, number] = [30.0444, 31.2357];
  map: Map;
  returnTo: string = 'item-detail';
  restaurantName$ = this.appService.restaurantName$;
  searchResults: any[] = [];
  searchText: string = '';
  disabled: boolean = false;

  private locationClient = new Location({
    region: awsRegion,
    credentials: {
      accessKeyId: 'AKIA2YICAPKI7G2F5C7O',
      secretAccessKey: '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',
    },
  });

  constructor(
    private homePageService: HomePageService,
    private router: Router,
    private appService: AppService
  ) {
    addIcons({ arrowBackOutline, searchOutline, locationOutline, location });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const params = new URLSearchParams(event.url.split('?')[1]);
        if (params.get('returnTo') === 'home') {
          this.returnTo = 'home';
        } else if (params.get('returnTo') === 'item-detail') {
          this.returnTo = 'item-detail';
        }
      }
    });
  }

  locationChoosen() {
    //TODO: find nearest branch based on user location
    this.homePageService.nearestBranch$.next(
      this.homePageService.metaData$.value.branches[0]
    );
    console.log(
      'fake nearest branch',
      this.homePageService.metaData$.value.branches[0]
    );
    if (this.returnTo === 'home') {
      this.router.navigate(['/', this.restaurantName$.value, 'home']);
    } else if (this.returnTo === 'item-detail') {
      this.router.navigate(['/', this.restaurantName$.value, 'item-detail']);
      this.homePageService.userLocation$.next([
        this.mapCenter[0],
        this.mapCenter[1],
      ]);
    }
  }

  onMapLoaded(event: Map) {
    this.map = event;
    //TODO: Request user location permossion.
    this.centerMap();
  }

  private mapMoveSubject = new Subject<[number, number]>();

  ngOnInit() {
    this.mapMoveSubject
      .pipe(
        debounceTime(500),
        switchMap((coordinates: [number, number]) =>
          from(this.homePageService.findAndSetNearestBranch(coordinates))
        )
      )
      .subscribe((branch: any) => {
        console.log('branch', branch);
        this.disabled = !branch.data.length;
      });
  }

  onMapMoveEnd(event: any) {
    const center = this.map.getCenter();
    this.homePageService.userLocation$.next([center.lat, center.lng]);
    this.mapMoveSubject.next([center.lat, center.lng]);
  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  centerMap(): void {
    this.getCurrentPosition().subscribe((position: any) => {
      this.map.flyTo({
        center: [position.longitude, position.latitude],
        zoom: 15,
      });
      this.homePageService.userLocation$.next([
        position.latitude,
        position.longitude,
      ]);
    });
  }

  async searchAddress(event: any) {
    const searchText = event.target.value;
    this.searchText = searchText;

    if (searchText.length < 3) {
      this.searchResults = [];
      return;
    }

    try {
      const response = await fetch(
        `https://places.geo.eu-west-1.amazonaws.com/v2/autocomplete?key=v1.public.eyJqdGkiOiI1OWZkZjQ4My1lZTI0LTRiNzUtYTUxOS1mY2M2NTVhZjNjY2EifdHxJgL-Gw-jZjzFQa1QwFY8Ag79JkmI4QB09vWqzMvgrr14KNPIMv-gSIdaWbROoDYN0-Q8m1-ow5oQ5E3L1kmFDwI0rLHooetc_Uu5OtSCEvXKkPO1688_5XGFIXuf_DgyqGzqF9UihjWEAFXC9BzRXdc_iMYDDy0FcAgjnN8hG50apca6Jc_Putfxu8vGHm6EuO9P2KvPwB-fLf5pCg3xq3P7Xq0qd1uIFpu9DCS-hBebCDfco249oHcK3KMJAQog1rmcUx1g3yR9ELlhulILqgTJnFmuKpkfgXGimaCqq6ShUaYPadz-TUyUOsYJkZeZE7qHK22v_OO5skweWMk.ZGQzZDY2OGQtMWQxMy00ZTEwLWIyZGUtOGVjYzUzMjU3OGE4`,
        {
          method: 'POST',
          body: JSON.stringify({
            QueryText: searchText,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('data', data);

      this.searchResults = data.ResultItems || [];
    } catch (error) {
      console.error('Error searching addresses:', error);
      this.searchResults = [];
    }
  }

  getPlaceOfPlaceId(placeId: string): Promise<[number, number]> {
    return fetch(
      `https://places.geo.eu-west-1.amazonaws.com/v2/place/${placeId}?key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const coordinates = data.Position;
        return [coordinates[0], coordinates[1]]; // Return [latitude, longitude]
      });
  }

  async selectAddress(result: any) {
    console.log('result', result);

    const coordinates = await this.getPlaceOfPlaceId(result.PlaceId);
    console.log('coordinates', coordinates);

    this.map.flyTo({
      center: coordinates,
      zoom: 15,
    });

    this.homePageService.userLocation$.next([coordinates[1], coordinates[0]]);

    this.searchResults = [];
    this.searchText = result.Place.Label;
  }
}
