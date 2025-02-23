import { MetaData } from '../interfaces/metaData';

export const fakeMetaData: MetaData = {
  url: 'order.tappya.com/stagin01',
  type: 'onlineOrdering',
  gtmId: '',
  deliveryMode: ['pickup', 'delivery'],
  logoUrl:
    'cdn.tappya.com/c235f474-b0c1-7081-9272-8e4564ca949b/images/haeartattack_logo_only.png',
  brand: 'staging01',
  carouselImageUrls: [],
  colorScheme: {
    primary: 'FFFFFF',
    secondary: '000000',
  },
  printTitle: 'Tappya Demo',
  printText: 'Welcome To Tappya Demo',
  qrBannerUrl: '',
  allowedPaymentMethodIds: ['Cash'],
  branches: [
    {
      id: 'abc123',
      name: 'Tappya Demo',
      posId: 'abc123',
      address: '6 October, Genena Mall',
      menuUrl:
        'https://cdn.tappya.com/c235f474-b0c1-7081-9272-8e4564ca949b/menu/menu_abcdef12345678.json',
    },
  ],
};
