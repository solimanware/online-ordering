import {
  animate,
  AnimationTriggerMetadata,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationsService {
  constructor() {}

  // Fade in animation
  fadeIn(duration: number = 300): AnimationTriggerMetadata {
    return trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(`${duration}ms ease-in`, style({ opacity: 1 })),
      ]),
    ]);
  }

  // Fade out animation
  fadeOut(duration: number = 300): AnimationTriggerMetadata {
    return trigger('fadeOut', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate(`${duration}ms ease-out`, style({ opacity: 0 })),
      ]),
    ]);
  }

  // Slide in from right
  slideInRight(duration: number = 300): AnimationTriggerMetadata {
    return trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          `${duration}ms ease-out`,
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]);
  }

  // Slide out to right
  slideOutRight(duration: number = 300): AnimationTriggerMetadata {
    return trigger('slideOutRight', [
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate(
          `${duration}ms ease-in`,
          style({ transform: 'translateX(100%)', opacity: 0 })
        ),
      ]),
    ]);
  }

  // Slide in from left
  slideInLeft(duration: number = 300): AnimationTriggerMetadata {
    return trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          `${duration}ms ease-out`,
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]);
  }

  // Slide in from bottom
  slideInUp(duration: number = 300): AnimationTriggerMetadata {
    return trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translateY(30px)', opacity: 0 }),
        animate(
          `${duration}ms ease-out`,
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
    ]);
  }

  // List stagger animation
  listAnimation(
    duration: number = 200,
    delay: number = 30
  ): AnimationTriggerMetadata {
    return trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(`${delay}ms`, [
              animate(
                `${duration}ms ease-out`,
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]);
  }

  // Button pulse animation
  pulse(): AnimationTriggerMetadata {
    return trigger('pulse', [
      transition('* => *', [
        animate('300ms ease-in-out', style({ transform: 'scale(1.05)' })),
        animate('300ms ease-in-out', style({ transform: 'scale(1)' })),
      ]),
    ]);
  }

  // Item selection animation
  itemSelection(): AnimationTriggerMetadata {
    return trigger('itemSelection', [
      state(
        'selected',
        style({
          borderColor: '#dc2626',
          backgroundColor: 'rgba(220, 38, 38, 0.05)',
          transform: 'scale(1.02)',
        })
      ),
      state(
        'unselected',
        style({
          borderColor: '#e5e7eb',
          backgroundColor: 'white',
          transform: 'scale(1)',
        })
      ),
      transition('unselected => selected', [animate('200ms ease-out')]),
      transition('selected => unselected', [animate('150ms ease-in')]),
    ]);
  }

  // Page transition animations
  pageTransitions = {
    // Page animation when entering
    pageEnterAnimation: [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate(
        '400ms ease-out',
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
    ],
    // Page animation when leaving
    pageLeaveAnimation: [
      style({ opacity: 1, transform: 'translateY(0)' }),
      animate(
        '300ms ease-in',
        style({ opacity: 0, transform: 'translateY(-20px)' })
      ),
    ],
  };

  // Cart item animation - add/remove items
  cartItemAnimation(): AnimationTriggerMetadata {
    return trigger('cartItemAnimation', [
      transition(':enter', [
        style({ opacity: 0, height: 0, transform: 'translateX(-10px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, height: '*', transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, height: '*', transform: 'translateX(0)' }),
        animate(
          '250ms ease-in',
          style({ opacity: 0, height: 0, transform: 'translateX(-10px)' })
        ),
      ]),
    ]);
  }

  // Hover animation for buttons and cards
  hoverAnimation(): AnimationTriggerMetadata {
    return trigger('hoverAnimation', [
      state(
        'normal',
        style({
          transform: 'scale(1)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        })
      ),
      state(
        'hovered',
        style({
          transform: 'scale(1.03)',
          boxShadow:
            '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        })
      ),
      transition('normal => hovered', [animate('200ms ease-out')]),
      transition('hovered => normal', [animate('150ms ease-in')]),
    ]);
  }
}
