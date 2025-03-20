import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HomePageService } from 'src/app/services/home-page.service';
import { AppService } from './services/app.service';
import { LoggerService } from './services/logger.service';
import { RouteAnimationsService } from './services/route-animations.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, RouterModule],
  standalone: true,
  animations: [
    // Use the fadeAnimation for route transitions
    RouteAnimationsService.prototype.fadeAnimation,
  ],
})
export class AppComponent {
  constructor(
    private router: Router,
    private homePageService: HomePageService,
    private appService: AppService,
    private logger: LoggerService,
    private routeAnimations: RouteAnimationsService
  ) {
    this.logger.info('AppComponent', 'Application initialized');
    const path = window.location.pathname;
    const segments = path.split('/').filter((segment) => segment);
    const restaurantName = segments[0];

    if (restaurantName) {
      this.logger.info('AppComponent', 'Setting restaurant name', {
        restaurantName,
      });
      this.appService.restaurantName$.next(restaurantName);
      this.homePageService.getMetaData(restaurantName).then(() => {
        this.logger.debug('AppComponent', 'Metadata loaded', {
          branches: this.homePageService.metaData$.value?.branches?.length || 0,
        });
        this.homePageService.orderType$.next('delivery');
        this.router.navigate([`/${restaurantName}/home`]);
      });
    } else {
      this.logger.warn('AppComponent', 'No restaurant name found in URL path');
    }
  }

  // Add a prepare route function to handle page transitions
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
