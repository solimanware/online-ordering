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
import { Observable, Subscriber } from 'rxjs';
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

  onMapMoveEnd(event: any) {
    const center = this.map.getCenter();
    this.homePageService.userLocation$.next([center.lat, center.lng]);
    this.homePageService
      .findAndSetNearestBranch([center.lat, center.lng])
      .then((branch: any) => {
        console.log('branch', branch);

        if (branch.data.length) {
          this.disabled = false;
        } else {
          this.disabled = true;
        }
      });
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
      const params = {
        IndexName: 'explore.place',
        Text: searchText,
        BiasPosition: this.mapCenter,
        MaxResults: 5,
      };

      const response = await this.locationClient.searchPlaceIndexForText(
        params
      );
      this.searchResults = response.Results || [];
    } catch (error) {
      console.error('Error searching addresses:', error);
      this.searchResults = [];
    }
  }

  selectAddress(result: any) {
    const coordinates = result.Place.Geometry.Point;
    this.map.flyTo({
      center: coordinates,
      zoom: 15,
    });

    this.homePageService.userLocation$.next([coordinates[1], coordinates[0]]);

    this.searchResults = [];
    this.searchText = result.Place.Label;
  }
}
