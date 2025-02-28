import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonFooter } from '@ionic/angular/standalone';
import { AppService } from 'src/app/services/app.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart-summry-cta',
  templateUrl: './cart-summry-cta.component.html',
  styleUrls: ['./cart-summry-cta.component.scss'],
  standalone: true,
  imports: [IonFooter, AsyncPipe, RouterLink],
})
export class CartSummryCtaComponent implements OnInit {
  paymentSummary$ = this.cartService.paymentSummary$;
  restaurantName$ = this.appService.restaurantName$;
  constructor(
    private cartService: CartService,
    private appService: AppService
  ) {}

  ngOnInit() {}
}
