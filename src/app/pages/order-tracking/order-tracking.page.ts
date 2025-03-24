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
import { CartService } from 'src/app/services/cart.service';
import { HomePageService } from 'src/app/services/home-page.service';
import { OrderService } from '../../services/order.service';

type OrderStatus =
  | 'Accepted By Branch'
  | 'Preparing'
  | 'In Delivery'
  | 'Delivered'
  | 'Ready for Pickup'
  | 'Picked Up';

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
  isPickupFlow$ = this.homePageService.isPickupFlow$;

  initializeOrderSteps(isDelivery: boolean) {
    this.orderSteps = isDelivery
      ? [
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
        ]
      : [
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
            title: 'Ready for Pickup',
            status: 'pending',
            animation: 'picked-up',
          },
          {
            title: 'Picked Up',
            status: 'pending',
            animation: 'arriving-soon',
          },
        ];
  }

  nextStep(step: OrderStep) {
    const currentIndex = this.orderSteps.findIndex(
      (s) => s.title === step.title
    );
    if (currentIndex >= 0 && currentIndex < this.orderSteps.length - 1) {
      this.orderSteps[currentIndex].status = 'completed';
      this.orderSteps[currentIndex + 1].status = 'current';
      this.options = {
        ...this.options,
        path: `/assets/animations/${this.orderSteps[currentIndex].animation}.json`,
      };
    } else if (currentIndex === this.orderSteps.length - 1) {
      this.orderSteps[currentIndex].status = 'completed';
      this.options = {
        ...this.options,
        path: `/assets/animations/${this.orderSteps[currentIndex].animation}.json`,
      };
    }
  }

  constructor(
    private homePageService: HomePageService,
    private appService: AppService,
    private router: Router,
    private orderService: OrderService,
    private cartService: CartService
  ) {
    addIcons({ arrowBackOutline, checkmarkOutline });
  }
  pollInterval: any;

  ngOnInit() {
    const url = this.router.url;
    const parts = url.split('/');
    const orderId = parts[parts.length - 1];
    const accountId = parts[1];
    const branchId = this.homePageService.metaData$.value.branches[0].branchId;
    const posId = this.homePageService.metaData$.value.branches[0].posId;

    this.cartService.cartSummary$.next([]);
    this.cartService.paymentSummary$.next({
      itemsCount: 0,
      subtotal: 0,
      serviceFee: 0,
      tax: 0,
      total: 0,
      currency: 'EGP',
    });

    // Get order type (delivery or pickup) from service or route params
    this.isPickupFlow$.subscribe((isPickupFlow) => {
      this.initializeOrderSteps(!isPickupFlow);
      console.log(this.orderSteps);
    });

    this.pollInterval = setInterval(() => {
      this.orderService
        .getOrderStatus(
          branchId.toString(),
          posId.toString(),
          accountId,
          orderId
        )
        .subscribe((data) => {
          console.log(data);
          this.status = data.status;
          this.orderSteps = this.orderSteps.map((step) => {
            if (step.title === this.status) {
              step.status = 'current';
              step.time = new Date().toLocaleTimeString();
            } else if (
              this.orderSteps.findIndex((s) => s.title === this.status) >
              this.orderSteps.findIndex((s) => s.title === step.title)
            ) {
              step.status = 'completed';
            } else {
              step.status = 'pending';
            }
            return step;
          });
        });
    }, 5000);
  }

  ngOnDestroy = () => {
    clearInterval(this.pollInterval);
  };

  ionViewWillLeave() {
    clearInterval(this.pollInterval);
  }

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
