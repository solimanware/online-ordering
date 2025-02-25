import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonFooter } from '@ionic/angular/standalone';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart-summry-cta',
  templateUrl: './cart-summry-cta.component.html',
  styleUrls: ['./cart-summry-cta.component.scss'],
  standalone: true,
  imports: [IonFooter, AsyncPipe],
})
export class CartSummryCtaComponent implements OnInit {
  paymentSummary$ = this.cartService.paymentSummary$;
  constructor(private cartService: CartService) {}

  ngOnInit() {}
}
