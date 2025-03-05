import { Injectable } from '@angular/core';
import { CheckoutBody } from '../interfaces/checkout';
import { CartService } from './cart.service';
import { CustomerService } from './customer.service';
import { UserService } from './user.service';

export interface ModifierCategoryId {
  id: string;
  items: Item[];
}

export interface Item {
  id: string;
  quantity: number;
  price: number;
  taxIds: string[];
}
@Injectable({
  providedIn: 'root',
})
export class CheckOutService {
  checkoutBody: CheckoutBody;
  paymentSummary$ = this.cartService.paymentSummary$;

  constructor(
    private userService: UserService,
    private cartService: CartService,
    private customerService: CustomerService
  ) {}

  getCheckoutBody() {
    //get all modifier categories and then add the modifier quantity to the items
    const modifierCategoryIds: ModifierCategoryId[] = [];
    for (const item of this.cartService.cartSummary$.value) {
      for (const modifierCategory of item.item.modifierCategories) {
        for (const modifier of modifierCategory.modifiers) {
          for (const a of item.item.selectedModifiers) {
            if (a.id === modifier.id) {
              modifierCategoryIds.push({
                id: modifierCategory.id,
                items: [
                  {
                    id: modifier.id,
                    quantity: a.quantity || 0,
                    price: Number(modifier.price) || 0,
                    taxIds: modifier.taxIds.map((tax) => tax.id),
                  },
                ],
              });
            }
          }
        }
      }
    }
    this.checkoutBody = {
      customerId: this.customerService.customerId$.value,
      type: 'delivery',
      deliveryType: 'delivery',
      timestamp: new Date().toISOString(),
      preferredTime: {
        name: '',
        time: '',
      },
      deliveryAddressId: this.customerService.customerId$.value,
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
        modifierCategoryIds: modifierCategoryIds,
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
