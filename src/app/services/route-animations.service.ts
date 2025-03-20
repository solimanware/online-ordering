import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouteAnimationsService {
  constructor() {}

  // Fade transition between routes
  fadeAnimation = trigger('routeAnimations', [
    transition('* <=> *', [
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'translateY(20px)',
          }),
        ],
        { optional: true }
      ),
      query(':enter', [style({ opacity: 0, transform: 'translateY(20px)' })], {
        optional: true,
      }),
      query(
        ':leave',
        [
          style({ opacity: 1, transform: 'translateY(0)' }),
          animate(
            '250ms ease-out',
            style({ opacity: 0, transform: 'translateY(-20px)' })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '350ms ease-out',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]);

  // Slide left/right based on index
  slideAnimation = trigger('routeAnimations', [
    transition('* => *', [
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      group([
        query(
          ':enter',
          [
            style({ transform: 'translateX(100%)' }),
            animate('400ms ease-out', style({ transform: 'translateX(0%)' })),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            style({ transform: 'translateX(0%)' }),
            animate('400ms ease-out', style({ transform: 'translateX(-30%)' })),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ]);
}
