import { Injectable } from '@angular/core';
import { CheckoutBody } from '../interfaces/checkout';
import { CartService } from './cart.service';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class CheckOutService {
  checkoutBody: CheckoutBody;
  paymentSummary$ = this.cartService.paymentSummary$;

  constructor(
    private userService: UserService,
    private cartService: CartService
  ) {}

  getCheckoutBody() {
    this.checkoutBody = {
      customerId: '86100',
      type: 'delivery',
      deliveryType: 'delivery',
      timestamp: new Date().toISOString(),
      preferredTime: {
        name: '',
        time: '',
      },
      deliveryAddressId: '86100',
      mobileNumber: this.userService.userPhoneNumber$.value,
      currency: 'EGP',
      pushNotificationToken: '',
      deliveryAddress: {
        phoneNumber: this.userService.userPhoneNumber$.value,
        street: '19 Maadi Street',
        street2: '',
        city: 'Cairo',
        state: 'CRO',
        postalCode: '',
        building: '13',
        landmark: 'No Landmark',
        flatNumber: '1',
        country: 'Egypt',
        coordinates: {
          latitude: 29.9657005,
          longitude: 31.2675568,
        },
        type: 'residential',
        isPrimary: true,
      },
      orderItems: this.cartService.cartSummary$.value.map((item) => ({
        id: item.item.id,
        quantity: item.quantity || 0,
        price: Number(item.subtotal) || 0,
        variantCategoryIds: item.item.variantCategories.map((variant) => ({
          id: variant.id,
          items: variant.variants.map((variantItem) => ({
            id: variantItem.id,
            price: Number(variantItem.price) || 0,
          })),
        })),
        modifierCategoryIds: item.item.modifierCategories.map((modifier) => ({
          id: modifier.id,
        })),
        note: 'Take care',
      })),
      payment: {
        status: 'PAID',
        preferredPaymentMethod: 'COD',
        settlements: [
          {
            method: 'CASH',
            amount: this.paymentSummary$.value.total,
            reference: '',
          },
        ],
      },
      orderNote: 'Hello',
      subtotal: this.paymentSummary$.value.subtotal,
      shippingCost: 0,
      discountAmount: 0,
      taxAmount: this.paymentSummary$.value.tax,
      total: this.paymentSummary$.value.total,
    };
    return this.checkoutBody;
  }
}
