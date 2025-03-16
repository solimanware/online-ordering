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
    streetName: new FormControl('', Validators.required),
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

  async ngOnInit() {
    this.homePageService.userLocation$.subscribe(async (location) => {
      const response = await fetch(
        `https://places.geo.eu-west-1.amazonaws.com/v2/reverse-geocode?key=v1.public.eyJqdGkiOiI1OWZkZjQ4My1lZTI0LTRiNzUtYTUxOS1mY2M2NTVhZjNjY2EifdHxJgL-Gw-jZjzFQa1QwFY8Ag79JkmI4QB09vWqzMvgrr14KNPIMv-gSIdaWbROoDYN0-Q8m1-ow5oQ5E3L1kmFDwI0rLHooetc_Uu5OtSCEvXKkPO1688_5XGFIXuf_DgyqGzqF9UihjWEAFXC9BzRXdc_iMYDDy0FcAgjnN8hG50apca6Jc_Putfxu8vGHm6EuO9P2KvPwB-fLf5pCg3xq3P7Xq0qd1uIFpu9DCS-hBebCDfco249oHcK3KMJAQog1rmcUx1g3yR9ELlhulILqgTJnFmuKpkfgXGimaCqq6ShUaYPadz-TUyUOsYJkZeZE7qHK22v_OO5skweWMk.ZGQzZDY2OGQtMWQxMy00ZTEwLWIyZGUtOGVjYzUzMjU3OGE4`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Add this header
          },
          body: JSON.stringify({
            QueryPosition: location.reverse(),
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.addressLabel = data.ResultItems[0].Address.Label;
          this.addressForm.patchValue({
            streetName: data.ResultItems[0].Address.Label,
          });
        })
        .catch((error) => {
          console.error('Error fetching address:', error);
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
    if (this.addressForm.valid) {
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
    } else {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.addressForm.controls).forEach((key) => {
        const control = this.addressForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
