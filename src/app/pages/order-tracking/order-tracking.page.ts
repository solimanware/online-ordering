import { CommonModule } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, checkmarkOutline } from 'ionicons/icons';
import { AnimationItem } from 'lottie-web';
import { LottieComponent } from 'ngx-lottie';

type OrderStatus =
  | 'order-received'
  | 'order-preparing'
  | 'picked-up'
  | 'arriving-soon';

interface OrderStep {
  title: string;
  time?: string;
  status: 'completed' | 'current' | 'pending';
  animation: OrderStatus;
}

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
    LottieComponent,
  ],
})
export class OrderTrackingPage implements OnInit {
  status: OrderStatus = 'order-received';
  orderSteps: OrderStep[] = [
    {
      title: 'Your order has been received',
      time: '10.00AM',
      status: 'completed',
      animation: 'order-received',
    },
    {
      title: 'The restaurant is preparing your food',
      status: 'current',
      animation: 'order-preparing',
    },
    {
      title: 'Your order has been picked up for delivery',
      status: 'pending',
      animation: 'picked-up',
    },
    {
      title: 'Order arriving soon!',
      status: 'pending',
      animation: 'arriving-soon',
    },
  ];

  nextStep() {
    const currentIndex = this.orderSteps.findIndex(
      (step) => step.status === 'current'
    );

    // Guard clause for invalid index or if already at the end
    if (currentIndex === -1) {
      return;
    }

    console.log('currentIndex', currentIndex);

    // Mark current step as completed
    this.orderSteps[currentIndex].status = 'completed';

    // If there's a next step, mark it as current
    if (currentIndex < this.orderSteps.length - 1) {
      this.orderSteps[currentIndex + 1].status = 'current';
    }
    this.status = this.orderSteps[currentIndex].animation;

    this.options = {
      ...this.options,
      path: `/assets/animations/${this.status}.json`,
    };
    console.log(this.options);
  }

  constructor(private ngZone: NgZone) {
    addIcons({ arrowBackOutline, checkmarkOutline });
  }

  ngOnInit() {}

  options = {
    path: `/assets/animations/${this.status}.json`, // Update this path to your animation file
    loop: true,
    autoplay: true,
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log('Animation Created:', animationItem);
  }

  configReady(): void {
    console.log('Config Ready');
  }

  dataReady(): void {
    console.log('Data Ready');
  }

  domLoaded(): void {
    console.log('DOM Loaded');
  }

  enterFrame(event: any): void {}

  segmentStart(event: any): void {
    console.log('Segment Start:', event);
  }

  complete(event: any): void {
    console.log('Complete:', event);
  }

  loopComplete(event: any): void {
    console.log('Loop Complete:', event);
  }

  destroy(event: any): void {
    console.log('Destroy:', event);
  }

  error(event: any): void {
    console.log('Error:', event);
  }
}
