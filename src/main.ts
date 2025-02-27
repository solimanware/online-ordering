import { bootstrapApplication } from '@angular/platform-browser';
import {
  PreloadAllModules,
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import player from 'lottie-web';
import { provideLottieOptions } from 'ngx-lottie';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
//hi

export function playerFactory() {
  return player;
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({
      mode: 'ios',
    }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideLottieOptions({
      player: () => player,
    }),
    {
      provide: 'lottiePlayerFactory',
      useValue: playerFactory,
    },
  ],
});
