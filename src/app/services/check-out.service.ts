import { Injectable } from '@angular/core';
import { CheckoutBody } from '../interfaces/checkout';
import { CartService } from './cart.service';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class CheckOutService {
  checkoutBody: CheckoutBody;

  constructor(
    private userService: UserService,
    private cartService: CartService
  ) {}

  getCheckoutBody() {
    this.checkoutBody = {
      customerName: this.userService.userName$.value,
      customerPhone: this.userService.userPhoneNumber$.value,
      customerEmail: '',
      deliveryAddress: '',
      paymentMethod: 'COD',
      orderItems: this.cartService.cartSummary$.value.map((item) => ({
        itemId: item.item.id,
        quantity: item.quantity,
        price: Number(item.item.price),
        name: String(item.item.name),
      })),
      totalAmount: this.cartService.paymentSummary$.value.total,
      deliveryFee: 0,
      specialInstructions: '',
    };
    return this.checkoutBody;
  }
}
