export interface CheckoutBody {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  deliveryAddress: string;
  paymentMethod: string;
  orderItems: OrderItem[];
  totalAmount: number;
  deliveryFee: number;
  specialInstructions?: string;
}

export interface OrderItem {
  itemId: string;
  quantity: number;
  price: number;
  name: string;
}

export interface PreferredTime {
  name: any;
  time: any;
}

export interface DeliveryAddress {
  phoneNumber: any;
  street: string;
  street2: any;
  city: string;
  state: string;
  postalCode: any;
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
  reference: any;
}
