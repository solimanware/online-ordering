import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, checkmarkOutline } from 'ionicons/icons';
import { AnimationItem } from 'lottie-web';
import { LottieComponent } from 'ngx-lottie';
import { AppService } from 'src/app/services/app.service';
import { HomePageService } from 'src/app/services/home-page.service';

type OrderStatus =
  | 'Accepted By Branch'
  | 'Preparing'
  | 'In Delivery'
  | 'Delivered';

interface OrderStep {
  title: OrderStatus;
  time?: string;
  status: 'completed' | 'current' | 'pending';
  animation:
    | 'order-received'
    | 'order-preparing'
    | 'picked-up'
    | 'arriving-soon';
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
export class OrderTrackingPage implements OnInit, OnDestroy {
  status: OrderStatus = 'Accepted By Branch';
  orderSteps: OrderStep[] = [
    {
      title: 'Accepted By Branch',
      time: '10.00AM',
      status: 'completed',
      animation: 'order-received',
    },
    {
      title: 'Preparing',
      status: 'current',
      animation: 'order-preparing',
    },
    {
      title: 'In Delivery',
      status: 'pending',
      animation: 'picked-up',
    },
    {
      title: 'Delivered',
      status: 'pending',
      animation: 'arriving-soon',
    },
  ];
  restaurantName$ = this.appService.restaurantName$;

  nextStep(step: OrderStep) {
    switch (step.title) {
      case 'Accepted By Branch':
        this.orderSteps[0].status = 'completed';
        this.orderSteps[1].status = 'current';
        this.options = {
          ...this.options,
          path: `/assets/animations/${this.orderSteps[0].animation}.json`,
        };
        break;
      case 'Preparing':
        this.orderSteps[1].status = 'completed';
        this.orderSteps[2].status = 'current';
        this.options = {
          ...this.options,
          path: `/assets/animations/${this.orderSteps[1].animation}.json`,
        };
        break;
      case 'In Delivery':
        this.orderSteps[2].status = 'completed';
        this.orderSteps[3].status = 'current';
        this.options = {
          ...this.options,
          path: `/assets/animations/${this.orderSteps[2].animation}.json`,
        };
        break;
      case 'Delivered':
        this.orderSteps[3].status = 'completed';
        this.options = {
          ...this.options,
          path: `/assets/animations/${this.orderSteps[3].animation}.json`,
        };
        break;
    }
  }

  constructor(
    private homePageService: HomePageService,
    private appService: AppService,
    private router: Router
  ) {
    addIcons({ arrowBackOutline, checkmarkOutline });
  }
  pollInterval: any;

  ngOnInit() {
    // Get initial order status
    const branchId = this.homePageService.metaData$.value?.branches[0].branchId; // Get from route params or service
    const posId = this.homePageService.metaData$.value?.branches[0].posId; // Get from route params or service
    const accountId = this.appService.restaurantName$.value; // Get from route params or service
    const orderId = this.router.url.split('/').pop(); // Get from route params or service

    console.log(branchId, posId, accountId, orderId);
    // Poll order status every 30 seconds
    this.pollInterval = setInterval(() => {
      fetch(
        `https://api-test.tappya.com/branch/${branchId}/pos/${posId}/get-order-status?account=${accountId}&orderId=${orderId}`
      )
        .then((res) => res.json())
        .then((data) => {
          // Update order status based on response
          console.log('Order status:', data);
          switch (data.message) {
            case 'accepted':
              this.nextStep(this.orderSteps[0]);
              break;
            case 'preparing':
              this.nextStep(this.orderSteps[1]);
              break;
            case 'in_delivery':
              this.nextStep(this.orderSteps[2]);
              break;
            case 'delivered':
              this.nextStep(this.orderSteps[3]);
              break;
          }
        })
        .catch((err) => {
          console.error('Error fetching order status:', err);
        });
    }, 10000);
  }

  ngOnDestroy = () => {
    clearInterval(this.pollInterval);
  };

  options = {
    path: `/assets/animations/${this.orderSteps[0].animation}.json`, // Update this path to your animation file
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
