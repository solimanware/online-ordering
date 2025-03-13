import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HomePageService } from 'src/app/services/home-page.service';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, RouterModule],
  standalone: true,
})
export class AppComponent {
  constructor(
    private router: Router,
    private homePageService: HomePageService,
    private appService: AppService
  ) {
    const path = window.location.pathname;
    const segments = path.split('/').filter((segment) => segment);
    const restaurantName = segments[0];

    if (restaurantName) {
      this.appService.restaurantName$.next(restaurantName);
      this.homePageService.getMetaData(restaurantName).then(() => {
        console.log('meta data', this.homePageService.metaData$.value);
        this.homePageService.orderType$.next('delivery');
        this.router.navigate([`/${restaurantName}/home`]);
      });
    }
  }
}
