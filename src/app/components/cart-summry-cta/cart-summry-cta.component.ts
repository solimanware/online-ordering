import { animate, style, transition, trigger } from '@angular/animations';
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
  animations: [
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate(
          '400ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ transform: 'translateY(100%)', opacity: 0 })
        ),
      ]),
    ]),
    trigger('pulse', [
      transition('* => *', [
        animate('300ms ease-in-out', style({ transform: 'scale(1.05)' })),
        animate('300ms ease-in-out', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
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
