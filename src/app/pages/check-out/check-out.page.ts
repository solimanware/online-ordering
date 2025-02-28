import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonRadio,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { MapComponent } from '@maplibre/ngx-maplibre-gl';
import { addIcons } from 'ionicons';
import { arrowBackOutline, location } from 'ionicons/icons';
import { Map } from 'maplibre-gl';
import { CheckoutBody } from 'src/app/interfaces/checkout';
import { AppService } from 'src/app/services/app.service';
import { CheckOutService } from 'src/app/services/check-out.service';
import { ItemDetail } from '../item-detail/item-detail.page';
import { style } from '../specify-location/specify-location.page';
import { CartService } from './../../services/cart.service';
import { HomePageService } from './../../services/home-page.service';
import { LocationService } from './../../services/location.service';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.page.html',
  styleUrls: ['./check-out.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonRadio,
    IonItem,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
    IonIcon,
    MapComponent,
  ],
})
export class CheckOutPage implements OnInit {
  map: Map;
  mapStyle = style;
  zoomLevel: [number] = [12];
  mapCenter: [number, number] = [31.2357, 30.0444];
  selectedSegment = 'apartment';
  cartSummary$ = this.cartService.cartSummary$;
  paymentSummary$ = this.cartService.paymentSummary$;
  checkoutBody: CheckoutBody;
  metadata$ = this.homePageService.metaData$;
  restaurantName$ = this.appService.restaurantName$;

  constructor(
    private homePageService: HomePageService,
    private locationService: LocationService,
    private cartService: CartService,
    private checkOutService: CheckOutService,
    private appService: AppService
  ) {
    addIcons({ arrowBackOutline, location });
  }

  async ngOnInit() {}

  placeOrder() {
    const url = `https://api-test.tappya.com/branch/${this.metadata$.value.branches[0].id}/pos/${this.metadata$.value.branches[0].posId}/create-order?account=${this.metadata$.value.url}`;
    this.checkoutBody = this.checkOutService.getCheckoutBody();
    console.log(this.checkoutBody);
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.checkoutBody),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  onMapLoaded(event: Map) {
    this.map = event;
    this.locationService.getCurrentPosition().subscribe((position) => {
      if (position) {
        console.log(position);
        this.map.flyTo({
          center: [position.coords.longitude, position.coords.latitude],
          zoom: 15,
        });
      }
    });
  }
  decreaseQuantity(item: ItemDetail) {
    this.cartService.decreaseQuantity(item);
  }
  increaseQuantity(item: ItemDetail) {
    this.cartService.increaseQuantity(item);
  }
}
