export interface Welcome {
  categories: Category[];
}

export interface Category {
  id: string;
  sequence: string;
  fromTime: string;
  toTime: string;
  name: NameClass;
  code: string;
  description: NameClass;
  imageUrl: string;
  items: Item[];
  subCategories: Category[];
}

export interface NameClass {
  ar?: string;
  en?: string;
}

export interface Item {
  id: string;
  sequence: string;
  fromTime: string;
  toTime: string;
  product_id: number;
  barcode: Barcode;
  name: NameClass;
  code: string;
  description: NameClass;
  calories: number;
  tags: any[];
  uom: string;
  preparationTime: number;
  imageUrl: string;
  taxIds: TaxID[];
  outOfStock: boolean;
  variantCategories: VariantCategory[];
  modifierCategories: ModifierCategory[];
  price: Price;
}

export enum Barcode {
  Bar22 = 'bar22',
  Empty = '',
  The2200000011105 = '2200000011105',
  The2200000032001 = '2200000032001',
  The2200000032100 = '2200000032100',
  The2200000038607 = '2200000038607',
}

export enum Code {
  Empty = '',
  Pt0001 = 'PT0001',
  WhPC00001 = 'WH/PC/00001',
  WhPC00003 = 'WH/PC/00003',
  WhPC00034 = 'WH/PC/00034',
  WhPC00100 = 'WH/PC/00100',
  WhPC00133 = 'WH/PC/00133',
  WhPC00166 = 'WH/PC/00166',
}

export interface ModifierCategory {
  id: string;
  variants: number[];
  name: NameClass;
  description: NameClass;
  isMultiSelect: boolean;
  allowRepeatedSelection: boolean;
  maxSelection: number;
  minSelection: number;
  imageUrl: string;
  modifiers: Modifier[];
  price: Price;
}

export interface Modifier {
  id: string;
  sequence: string;
  name: NameClass;
  description: PurpleDescription;
  code: string;
  barcode: string;
  uom: string;
  imageUrl: string;
  taxIds: TaxID[];
  freeQty: number;
  outOfStock: boolean;
  defaultQty: number;
  price: Price;
}

export interface PurpleDescription {
  ar: boolean;
  en: boolean;
}

export interface Price {
  currency: string;
  amount: number;
}

export enum Currency {
  EGP = 'EGP',
}

export interface TaxID {
  id: string;
  rate: number;
  priceIncluded: boolean;
}

export interface VariantCategory {
  id: string;
  name: NameClass;
  description: NameClass;
  variants: Variant[];
}

export interface Variant {
  id: string;
  name: NameClass;
  code: string;
  imageUrl: string;
  outOfStock: boolean;
  price: Price;
}
