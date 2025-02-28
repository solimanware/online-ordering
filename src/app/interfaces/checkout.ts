export interface CheckoutBody {
  customerId: string;
  type: string;
  deliveryType: string;
  timestamp: string;
  preferredTime: PreferredTime;
  deliveryAddressId: string;
  mobileNumber: string;
  currency: string;
  pushNotificationToken: string;
  deliveryAddress: DeliveryAddress;
  orderItems: OrderItem[];
  payment: Payment;
  orderNote: string;
  subtotal: number;
  shippingCost: number;
  discountAmount: number;
  taxAmount: number;
  total: number;
}

export interface PreferredTime {
  name: string;
  time: string;
}

export interface DeliveryAddress {
  phoneNumber: string;
  street: string;
  street2: string;
  city: string;
  state: string;
  postalCode: string;
  building: string;
  landmark: string;
  flatNumber: string;
  country: string;
  coordinates: Coordinates;
  type: string;
  isPrimary: boolean;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface OrderItem {
  id: string;
  quantity: number;
  price: number;
  variantCategoryIds: VariantCategoryId[];
  modifierCategoryIds: any[];
  note: string;
}

export interface VariantCategoryId {
  id: string;
  items: Item[];
}

export interface Item {
  id: string;
  price: number;
}

export interface Payment {
  status: string;
  preferredPaymentMethod: string;
  settlements: Settlement[];
}

export interface Settlement {
  method: string;
  amount: number;
  reference: string;
}
