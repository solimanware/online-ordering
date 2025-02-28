import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HomePageService } from 'src/app/services/home-page.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, RouterModule],
  standalone: true,
})
export class AppComponent {
  constructor(
    private router: Router,
    private homePageService: HomePageService
  ) {
    const path = window.location.pathname;
    const firstSegment = path.split('/')[1];
    console.log(firstSegment);
    if (firstSegment) {
      this.homePageService.getMetaData(firstSegment).then(() => {
        console.log('meta data', this.homePageService.metaData$.value);
        this.router.navigate(['/home']);
      });
    }
  }
}
