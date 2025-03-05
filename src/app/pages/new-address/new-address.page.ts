import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonSegment,
  IonSegmentButton,
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
import { Address, Customer } from 'src/app/interfaces/customer';
import { AppService } from 'src/app/services/app.service';
import { CustomerService } from 'src/app/services/customer.service';
import { style } from '../specify-location/specify-location.page';
import { LocationService } from './../../services/location.service';
import { UserService } from './../../services/user.service';

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
    IonItem,
    IonIcon,
    IonContent,
    IonHeader,
    CommonModule,
    FormsModule,
    RouterLink,
    MapComponent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonInput,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class NewAddressPage {
  map: Map;
  mapStyle = style;
  zoomLevel: [number] = [12];
  mapCenter: [number, number] = [31.2357, 30.0444];
  selectedSegment = 'apartment';
  restaurantName$ = this.appService.restaurantName$;

  addressForm: FormGroup = new FormGroup({
    buildingName: new FormControl(''),
    aptNo: new FormControl(''),
    floor: new FormControl(''),
    name: new FormControl(this.userService.userName$.value),
    additionalDirections: new FormControl(''),
    phoneNumber: new FormControl(this.userService.userPhoneNumber$.value),
    addressLabel: new FormControl(''),
  });

  constructor(
    private locationService: LocationService,
    private userService: UserService,
    private appService: AppService,
    private router: Router,
    private customerService: CustomerService
  ) {
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
    this.userService.userPhoneNumber$.subscribe((phoneNumber) => {
      this.addressForm.patchValue({
        phoneNumber: phoneNumber,
      });
    });
    this.userService.userName$.subscribe((name) => {
      this.addressForm.patchValue({
        name: name,
      });
    });
    console.log('user phone number', this.userService.userPhoneNumber$.value);
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

  saveAddress() {
    const address: Address = {
      name: this.addressForm.value.name,
      street: '',
      street2: '',
      city: 'Cairo',
      state: '',
      postalCode: '',
      building: this.addressForm.value.buildingName,
      floor: '',
      flat: '',
      landmark: '',
      country: 'Egypt',
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
      type: 'residential',
    };
    const customer: Customer = {
      name: this.addressForm.value.name,
      email: this.addressForm.value.email,
      mobile: this.addressForm.value.phoneNumber,
      addresses: [address],
      customerType: 'individual',
      status: 'active',
      notes: '',
    };
    console.log('Address form data:', this.addressForm);
    fetch(
      `https://api-test.tappya.com/customer/create-customer?account=${this.restaurantName$.value}`,
      {
        method: 'POST',
        body: JSON.stringify(customer),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.customerService.customerId$.next(data.data);
        this.router.navigate(['/', this.restaurantName$.value, 'check-out']);
      })
      .catch((error) => {
        console.error('Error saving address:', error);
      });
  }
}
