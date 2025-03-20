import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addOutline,
  businessOutline,
  closeOutline,
  homeOutline,
  locationOutline,
  navigateOutline,
  pinOutline,
} from 'ionicons/icons';
import { Address } from 'src/app/services/user.service';

@Component({
  selector: 'app-address-popover',
  templateUrl: './address-popover.component.html',
  styleUrls: ['./address-popover.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    RouterLink,
    CommonModule,
  ],
})
export class AddressPopoverComponent implements OnInit {
  @Input() addresses: Address[] = [];
  @Input() restaurantName: string = '';
  @Input() returnTo: string = 'home';
  @Input() selectedAddressIndex: number = 0;
  @Output() closePopover = new EventEmitter<void>();
  @Output() addressSelected = new EventEmitter<Address>();

  constructor() {
    addIcons({
      closeOutline,
      locationOutline,
      pinOutline,
      homeOutline,
      businessOutline,
      addOutline,
      navigateOutline,
    });
  }

  ngOnInit() {}

  getAddressIcon(address: Address): string {
    if (
      address.street.toLowerCase().includes('apartment') ||
      address.street2.toLowerCase().includes('apartment')
    ) {
      return 'homeOutline';
    } else if (
      address.street.toLowerCase().includes('office') ||
      address.street2.toLowerCase().includes('office') ||
      address.street.toLowerCase().includes('business') ||
      address.street2.toLowerCase().includes('business')
    ) {
      return 'businessOutline';
    }
    return 'locationOutline';
  }

  getAddressLabel(address: Address): string {
    if (
      address.street.toLowerCase().includes('apartment') ||
      address.street2.toLowerCase().includes('apartment')
    ) {
      return 'Apartment';
    } else if (
      address.street.toLowerCase().includes('office') ||
      address.street2.toLowerCase().includes('office')
    ) {
      return 'Office';
    } else if (
      address.street.toLowerCase().includes('home') ||
      address.street2.toLowerCase().includes('home')
    ) {
      return 'Home';
    }
    return 'Address';
  }

  getAddressDetails(address: Address): string {
    let details = '';

    if (address.building) {
      details += `Building ${address.building}`;
    }

    if (address.street) {
      if (details) details += ', ';
      details += address.street;
    }

    if (address.city) {
      if (details) details += ', ';
      details += address.city;
    }

    return details || 'No address details';
  }

  selectAddress(address: Address) {
    this.addressSelected.emit(address);
    this.closePopover.emit();
  }

  close() {
    this.closePopover.emit();
  }
}
