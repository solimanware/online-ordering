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
  id: string;
  name: string;
  posId: string;
  address: string;
  menuUrl: string;
}
