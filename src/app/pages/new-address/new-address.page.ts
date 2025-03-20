import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
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
import { HomePageService } from 'src/app/services/home-page.service';
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
  addressLabel: string = '';
  isSubmitted = false;
  addressForm: FormGroup = new FormGroup({
    buildingName: new FormControl('', Validators.required),
    streetName: new FormControl(
      this.userService.userAddress$.value.ResultItems[0].Address.Label,
      Validators.required
    ),
    aptNo: new FormControl('', Validators.required),
    floor: new FormControl('', Validators.required),
    name: new FormControl(
      this.userService.userName$.value,
      Validators.required
    ),
    additionalDirections: new FormControl(''),
    phoneNumber: new FormControl(
      this.userService.userPhoneNumber$.value,
      Validators.required
    ),
    addressLabel: new FormControl('', Validators.required),
  });

  constructor(
    private locationService: LocationService,
    private userService: UserService,
    private appService: AppService,
    private router: Router,
    private customerService: CustomerService,
    private homePageService: HomePageService
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
  }

  async ngOnInit() {
    this.userService.userAddress$.subscribe((address) => {
      console.log('address', address);
      this.addressForm.patchValue({
        street: address.ResultItems[0].Address.Label,
      });
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
    this.isSubmitted = true;

    if (!this.addressForm.valid) {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.addressForm.controls).forEach((key) => {
        this.addressForm.get(key)?.markAsTouched();
      });
      return;
    }

    const formValues = this.addressForm.value;

    // Create address object with all form values correctly populated
    const address: Address = {
      name: formValues.name,
      street: formValues.streetName || '',
      street2: '',
      city: 'Cairo',
      state: '',
      postalCode: '',
      building: formValues.buildingName,
      floor: formValues.floor || '',
      flat: formValues.aptNo || '',
      landmark: formValues.additionalDirections || '',
      country: 'Egypt',
      coordinates: {
        // Get coordinates from the map if available, otherwise default to 0,0
        latitude: this.homePageService.userLocation$.value?.[0] || 0,
        longitude: this.homePageService.userLocation$.value?.[1] || 0,
      },
      type: this.selectedSegment === 'apartment' ? 'residential' : 'business',
    };

    // Create customer object with all required information
    const customer: Customer = {
      name: formValues.name,
      email: formValues.email || '', // Ensure email is never undefined
      mobile: formValues.phoneNumber,
      addresses: [address],
      customerType: 'individual',
      status: 'active',
      notes: formValues.additionalDirections || '',
    };

    // Use the customer service to create the customer (single API call)
    this.customerService
      .createCustomer(this.restaurantName$.value, customer)
      .subscribe({
        next: (response) => {
          // Store customer ID for future use
          this.customerService.customerId$.next(response.data);

          // Update user information if needed
          if (formValues.name) {
            this.userService.userName$.next(formValues.name);
          }

          if (formValues.phoneNumber) {
            this.userService.userPhoneNumber$.next(formValues.phoneNumber);
          }

          // Navigate to checkout
          this.router.navigate(['/', this.restaurantName$.value, 'check-out']);
        },
        error: (error) => {
          console.error('Error creating customer:', error);
          // Here you could add a toast notification for error feedback
        },
      });
  }
}
