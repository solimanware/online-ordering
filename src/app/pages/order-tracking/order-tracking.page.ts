import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

type OrderStatus =
  | 'order-received'
  | 'order-preparing'
  | 'picked-up'
  | 'arriving-soon';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.page.html',
  styleUrls: ['./order-tracking.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonContent,
    IonHeader,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class OrderTrackingPage implements OnInit {
  status: OrderStatus = 'order-received';
  constructor() {
    addIcons({
      arrowBackOutline,
    });
  }

  ngOnInit() {}
}
