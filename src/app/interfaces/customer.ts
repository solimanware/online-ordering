export interface Customer {
  name: string;
  email: string;
  mobile: string;
  addresses: Address[];
  customerType: string;
  status: string;
  notes: string;
}

export interface Address {
  street: string;
  street2: string;
  city: string;
  name: string;
  state: string;
  postalCode: string;
  building: string;
  floor: string;
  flat: string;
  landmark: string;
  country: string;
  coordinates: Coordinates;
  type: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
