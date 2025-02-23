import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { MapComponent } from '@maplibre/ngx-maplibre-gl';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  business,
  businessOutline,
  home,
  homeOutline,
  libraryOutline,
  location,
  locationOutline,
  storefrontOutline,
} from 'ionicons/icons';
import { Map } from 'maplibre-gl';
import { style } from '../specify-location/specify-location.page';
import { LocationService } from './../../services/location.service';

interface AddressForm {
  buildingName: string;
  aptNo: string;
  floor?: string;
  name: string;
  additionalDirections?: string;
  phoneNumber: string;
  addressLabel?: string;
}

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.page.html',
  styleUrls: ['./new-address.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonItem,
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
    MapComponent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
  ],
})
export class NewAddressPage implements OnInit {
  map: Map;
  mapStyle = style;
  zoomLevel: [number] = [12];
  mapCenter: [number, number] = [31.2357, 30.0444];
  selectedSegment = 'apartment';

  addressForm: AddressForm = {
    buildingName: '',
    aptNo: '',
    floor: '',
    name: '',
    additionalDirections: '',
    phoneNumber: '',
    addressLabel: '',
  };

  constructor(private locationService: LocationService) {
    addIcons({
      arrowBackOutline,
      location,
      locationOutline,
      storefrontOutline,
      home,
      business,
      homeOutline,
      businessOutline,
      libraryOutline,
    });
  }

  ngOnInit() {
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

  onMapLoaded(event: Map) {
    this.map = event;
  }

  saveAddress() {
    console.log('Address form data:', this.addressForm);
    // Add your save logic here
  }
}
