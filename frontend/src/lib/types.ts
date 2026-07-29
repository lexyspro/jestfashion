export type Gender = 'men' | 'women' | 'kids' | 'unisex';

export type ProductCategory =
  | 'tops'
  | 'bottoms'
  | 'dresses'
  | 'outerwear'
  | 'footwear'
  | 'accessories'
  | 'bags'
  | 'watches';

export interface ProductVariant {
  size: string;
  color: string;
  stock: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  brandSlug: string;
  gender: Gender[];
  category: ProductCategory;
  price: number;
  originalPrice?: number; // if on promo
  promotionPercent?: number;
  description: string;
  images: string[];
  variants: ProductVariant[];
  isLocalDesigner: boolean;
  isNewArrival: boolean;
  isFeatured: boolean;
  isOnPromotion: boolean;
  tags: string[];
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
  logo: string;
  shortBio: string;
  isLocalDesigner: boolean;
  website?: string;
  instagram?: string;
}

export interface CartItem {
  productId: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
}

export type OrderStatus =
  | 'pending_confirmation'
  | 'confirmed'
  | 'paid'
  | 'dispatched'
  | 'cancelled';

export interface Order {
  reference: string;
  items: CartItem[];
  subtotal: number;
  status: OrderStatus;
  createdAt: string;
  customerName?: string;
  customerPhone?: string;
}

export interface HomepageSection {
  id: string;
  type: 'featured' | 'promotion' | 'local_designers' | 'ad_banner' | 'new_arrivals';
  title: string;
  subtitle?: string;
  enabled: boolean;
  order: number;
  adImage?: string;
  adLink?: string;
}
