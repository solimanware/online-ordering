import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  ToastController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, closeOutline } from 'ionicons/icons';
import {
  Item,
  Modifier,
  ModifierCategory,
  Variant,
} from 'src/app/interfaces/categories';
import { AppService } from 'src/app/services/app.service';
import { CartService } from 'src/app/services/cart.service';
import { HomePageService } from 'src/app/services/home-page.service';
import { LoggerService } from 'src/app/services/logger.service';
import { AnimationsService } from '../../services/animations.service';

interface SelectedModifier {
  id: string;
  quantity: number;
}

interface ModifierValidation {
  isValid: boolean;
  message?: string;
}

export interface ItemDetail extends Item {
  selectedModifiers: SelectedModifier[];
  selectedVariantId: string;
  totalPrice: number;
  quantity: number;
  subtotal: number;
  total: number;
  tax?: number;
  serviceFee?: number;
}

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonContent,
    IonHeader,
    IonFooter,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translateY(30px)', opacity: 0 }),
        animate(
          '400ms ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
    ]),
    trigger('itemSelection', [
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
    ]),
    trigger('imageAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class ItemDetailPage implements OnInit {
  quantity: number = 1;
  itemDetail: ItemDetail;
  restaurantName$ = this.appService.restaurantName$;
  constructor(
    private toastController: ToastController,
    private homePageService: HomePageService,
    private cartService: CartService,
    private router: Router,
    private appService: AppService,
    private logger: LoggerService,
    private animationsService: AnimationsService
  ) {
    addIcons({ arrowBackOutline, closeOutline });
    this.logger.info('ItemDetailPage', 'Component initialized');
  }

  ngOnInit() {
    this.homePageService.selectedItem$.subscribe((item) => {
      this.logger.debug('ItemDetailPage', 'Selected item updated', {
        itemId: item?.id,
        itemName: item?.name?.en,
      });

      this.itemDetail = {
        ...item,
        selectedModifiers: [],
        selectedVariantId: item?.variantCategories?.length
          ? item.variantCategories[0]?.variants[0]?.id
          : '',
        totalPrice: 0,
        quantity: 1,
        subtotal: 0,
        total: 0,
      };
      this.calculateTotalPrice(this.itemDetail);
    });
  }

  calculateTotalPrice(itemDetail: ItemDetail) {
    this.logger.debug('ItemDetailPage', 'Calculating total price');
    let variantPrice = 0;
    let modifiersPrice = 0;

    // Get base price from the item
    const basePrice = Number((itemDetail.price?.amount || 0).toFixed(2));

    // Calculate variant price if selected
    if (
      itemDetail.selectedVariantId &&
      itemDetail.variantCategories?.length > 0
    ) {
      const selectedVariant = itemDetail.variantCategories[0].variants.find(
        (v) => v.id === itemDetail.selectedVariantId
      );
      variantPrice = Number((selectedVariant?.price?.amount || 0).toFixed(2));
    }

    // Calculate total modifiers price
    if (itemDetail.modifierCategories?.length > 0) {
      modifiersPrice = Number(
        itemDetail.selectedModifiers
          .reduce((total, selected) => {
            const modifier = this.findModifierById(selected.id);
            return total + (modifier?.price?.amount || 0) * selected.quantity;
          }, 0)
          .toFixed(2)
      );
    }

    // Calculate final price
    const finalBasePrice = variantPrice > 0 ? variantPrice : basePrice;
    const totalBeforeQuantity = Number(
      (finalBasePrice + modifiersPrice).toFixed(2)
    );

    // Update prices
    this.itemDetail.totalPrice = Number(
      (totalBeforeQuantity * this.quantity).toFixed(2)
    );
    this.itemDetail.quantity = this.quantity;
    this.itemDetail.subtotal = Number(this.itemDetail.totalPrice.toFixed(2));
    this.itemDetail.total = Number(this.itemDetail.totalPrice.toFixed(2));
    this.itemDetail.currency =
      itemDetail.price?.currency ||
      itemDetail.variantCategories?.[0]?.variants?.[0]?.price?.currency ||
      'EGP';

    this.logger.debug('ItemDetailPage', 'Price calculation completed', {
      basePrice,
      variantPrice,
      modifiersPrice,
      quantity: this.quantity,
      totalPrice: this.itemDetail.totalPrice,
    });
  }

  findModifierById(modifierId: string): Modifier | undefined {
    for (const category of this.itemDetail.modifierCategories || []) {
      const modifier = category.modifiers.find((m) => m.id === modifierId);
      if (modifier) return modifier;
    }
    return undefined;
  }

  toggleModifier(modifier: Modifier, category: ModifierCategory) {
    const isSelected = this.isModifierSelected(modifier.id);
    this.logger.debug('ItemDetailPage', 'Toggling modifier', {
      modifierId: modifier.id,
      modifierName: modifier.name?.en,
      isCurrentlySelected: isSelected,
      itemDetail: this.itemDetail.id,
    });

    if (isSelected) {
      // Handle deselection
      if (category.minSelection > 0) {
        const currentSelections = this.getCurrentSelectionsCount(category);
        if (
          currentSelections <= category.minSelection &&
          category.minSelection > 0
        ) {
          this.logger.warn(
            'ItemDetailPage',
            'Cannot deselect modifier due to minimum selection requirement',
            {
              currentSelections,
              minRequired: category.minSelection,
            }
          );
          this.showToast(
            `You must select at least ${category.minSelection} ${category.name.en}`
          );
          return;
        }
      }

      this.logger.info('ItemDetailPage', 'Removing modifier from selection', {
        modifierId: modifier.id,
        modifierName: modifier.name?.en,
      });
      this.itemDetail.selectedModifiers =
        this.itemDetail.selectedModifiers.filter((m) => m.id !== modifier.id);
    } else {
      // Handle selection
      const validationResult = this.validateModifierSelection(
        modifier,
        category
      );
      if (!validationResult.isValid) {
        this.logger.warn(
          'ItemDetailPage',
          'Modifier selection validation failed',
          {
            message: validationResult.message,
          }
        );
        this.showToast(validationResult.message);
        return;
      }

      if (!category.isMultiSelect) {
        // Remove any existing selection in this category for single select
        this.logger.debug(
          'ItemDetailPage',
          'Single select category - removing previous selections'
        );
        this.itemDetail.selectedModifiers =
          this.itemDetail.selectedModifiers.filter((mod) => {
            const modifierObj = this.findModifierById(mod.id);
            const modifierCategory = this.itemDetail.modifierCategories.find(
              (cat) => cat.modifiers.some((m) => m.id === mod.id)
            );
            return modifierCategory?.id !== category.id;
          });
      }

      this.logger.info('ItemDetailPage', 'Adding modifier to selection', {
        modifierId: modifier.id,
        modifierName: modifier.name?.en,
      });
      this.itemDetail.selectedModifiers.push({ id: modifier.id, quantity: 1 });
    }

    // Recalculate price after modifiers are updated
    this.calculateTotalPrice(this.itemDetail);
  }

  validateModifierSelection(
    modifier: Modifier,
    category: ModifierCategory
  ): ModifierValidation {
    const currentSelections = this.getCurrentSelectionsCount(category);
    if (!category.maxSelection) {
      category.maxSelection = Infinity;
    }
    if (currentSelections >= category.maxSelection) {
      return {
        isValid: false,
        message: `You can only select up to ${category.maxSelection} items from ${category.name.en}`,
      };
    }

    return { isValid: true };
  }

  getCurrentSelectionsCount(category: ModifierCategory): number {
    return this.itemDetail.selectedModifiers
      .filter((selected) =>
        category.modifiers.some((m) => m.id === selected.id)
      )
      .reduce((total, modifier) => total + modifier.quantity, 0);
  }

  incrementModifierQuantity(
    event: Event,
    modifier: Modifier,
    category: ModifierCategory
  ) {
    event.stopPropagation();
    const selectedModifier = this.itemDetail.selectedModifiers.find(
      (m) => m.id === modifier.id
    );
    if (!selectedModifier) return;

    const currentTotal = this.getCurrentSelectionsCount(category);
    if (currentTotal >= category.maxSelection) {
      this.showToast(
        `You can only select up to ${category.maxSelection} items from ${category.name.en}`
      );
      return;
    }

    selectedModifier.quantity += 1;
    this.calculateTotalPrice(this.itemDetail);
  }

  decrementModifierQuantity(
    event: Event,
    modifier: Modifier,
    category: ModifierCategory
  ) {
    event.stopPropagation();
    const selectedModifier = this.itemDetail.selectedModifiers.find(
      (m) => m.id === modifier.id
    );
    if (!selectedModifier) return;

    if (selectedModifier.quantity === 1) {
      // Remove the modifier directly instead of using toggleModifier
      this.itemDetail.selectedModifiers =
        this.itemDetail.selectedModifiers.filter((m) => m.id !== modifier.id);
    } else {
      selectedModifier.quantity -= 1;
    }

    this.calculateTotalPrice(this.itemDetail);
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color: 'warning',
    });
    toast.present();
  }

  selectVariant(variant: Variant) {
    this.itemDetail.selectedVariantId = variant.id;
    this.itemDetail.totalPrice = Number(variant.price.amount.toFixed(2));
    this.calculateTotalPrice(this.itemDetail);
  }

  isModifierSelected(modifierId: string): boolean {
    return this.itemDetail.selectedModifiers.some((m) => m.id === modifierId);
  }

  getModifierQuantity(modifierId: string): number {
    const selectedModifier = this.itemDetail.selectedModifiers.find(
      (m) => m.id === modifierId
    );
    return selectedModifier?.quantity || 0;
  }

  incrementQuantity() {
    this.logger.debug('ItemDetailPage', 'Incrementing item quantity', {
      oldQuantity: this.quantity,
      itemId: this.itemDetail.id,
    });
    this.quantity++;
    this.calculateTotalPrice(this.itemDetail);
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.logger.debug('ItemDetailPage', 'Decrementing item quantity', {
        oldQuantity: this.quantity,
        itemId: this.itemDetail.id,
      });
      this.quantity--;
      this.calculateTotalPrice(this.itemDetail);
    }
  }

  async addToCart() {
    this.logger.info('ItemDetailPage', 'Adding item to cart', {
      itemId: this.itemDetail.id,
      itemName: this.itemDetail.name?.en,
      quantity: this.itemDetail.quantity,
      totalPrice: this.itemDetail.totalPrice,
    });

    // Validate minimum selections before adding to cart
    for (const category of this.itemDetail.modifierCategories || []) {
      const currentSelections = this.getCurrentSelectionsCount(category);
      if (currentSelections < category.minSelection) {
        this.logger.warn('ItemDetailPage', 'Minimum selection not met', {
          category: category.name.en,
          required: category.minSelection,
          current: currentSelections,
        });
        this.showToast(
          `Please select at least ${category.minSelection} ${category.name.en}`
        );
        return;
      }
    }

    // Make sure item has all necessary price information before adding to cart
    this.calculateTotalPrice(this.itemDetail);

    // Create a cart item that matches the ItemDetail interface
    const cartItem: ItemDetail = {
      ...this.itemDetail,
      id: this.itemDetail.id,
      sequence: this.itemDetail.sequence,
      fromTime: this.itemDetail.fromTime,
      toTime: this.itemDetail.toTime,
      itemId: this.itemDetail.itemId,
      barcode: this.itemDetail.barcode,
      name: this.itemDetail.name,
      code: this.itemDetail.code,
      description: this.itemDetail.description,
      calories: this.itemDetail.calories,
      tags: this.itemDetail.tags,
      uom: this.itemDetail.uom,
      preparationTime: this.itemDetail.preparationTime,
      imageUrl: this.itemDetail.imageUrl,
      taxIds: this.itemDetail.taxIds,
      outOfStock: this.itemDetail.outOfStock,
      variantCategories: this.itemDetail.variantCategories,
      modifierCategories: this.itemDetail.modifierCategories,
      price: this.itemDetail.price,
      selectedModifierId: this.itemDetail.selectedModifierId,
      selectedVariantId: this.itemDetail.selectedVariantId,
      totalPrice: this.itemDetail.totalPrice,
      quantity: this.itemDetail.quantity,
      subtotal: this.itemDetail.subtotal,
      total: this.itemDetail.total,
      currency: this.itemDetail.currency,
      selectedModifiers: [...this.itemDetail.selectedModifiers],
    };

    await this.cartService.addOnceToCart(cartItem);

    const cartSummary = this.cartService.cartSummary$.value;
    this.logger.debug('ItemDetailPage', 'Cart updated', {
      cartItemCount: cartSummary.length,
      totalItems: cartSummary.reduce((sum, item) => sum + item.quantity, 0),
    });

    this.router.navigate(['/', this.restaurantName$.value, 'home']);
  }
}
