export interface MetaData {
  url: string;
  type: string;
  gtmId: string;
  deliveryMode: string[];
  logoUrl: string;
  brand: string;
  carouselImageUrls: any[];
  colorScheme: ColorScheme;
  printTitle: string;
  printText: string;
  qrBannerUrl: string;
  allowedPaymentMethodIds: string[];
  branches: Branch[];
}

export interface ColorScheme {
  primary: string;
  secondary: string;
}

export interface Branch {
  posId: number;
  branchName: string;
  branchId: string;
  areaId: number;
  areaName: string;
  price: number;
  deliveryFees: number;
  deliveryTax: DeliveryTax;
  distance: string;
  unit: string;
  discounts: Discount[];
  promotions: Promotion[];
  paymentMethods: PaymentMethod[];
  note: string;
  menuUrl: string;
}

export interface DeliveryTax {
  id: number;
  amount: number;
  priceInclude: boolean;
}

export interface Discount {
  id: number;
  name: string;
  type: string;
  service: string;
  amount: number;
  tax: string;
  users: number[];
  applyOnOrder: boolean;
  applyOnOrderItem: boolean;
}

export interface Promotion {
  id: number;
  name: string;
  promoCode: any;
  applyOn: string;
  categIds: number[];
  ruleMinQuantity: number;
  ruleMinimumAmount: number;
  promoCodeUsage: any;
  ruleDateFrom: any;
  ruleDateTo: any;
  daysIds: number[];
  startTime: string;
  endTime: string;
  isDelivery: boolean;
  isRestaurant: boolean;
  isTakeaway: boolean;
  storePos: boolean;
  storeCallCenter: boolean;
  callCenterDelivery: boolean;
  callCenterPickup: boolean;
  hasMaxOfTotalDiscount: boolean;
  hasMaxNumberOrders: boolean;
  checkActive: boolean;
  sameProduct: boolean;
  leastPrice: boolean;
  rewardProductId: any;
  rewardProductQuantity: number;
  rewardType: string;
}

export interface PaymentMethod {
  payMethodName: string;
  payMethodId: string;
  isPromoCode: boolean;
}
