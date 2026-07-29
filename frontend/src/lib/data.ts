import { Product, Brand, HomepageSection } from './types';

export const brands: Brand[] = [
  {
    id: 'b1',
    slug: 'louis-vuitton',
    name: 'Louis Vuitton',
    logo: '/images/brands/lv.png',
    shortBio: 'The pinnacle of French luxury — iconic monogram, timeless silhouettes.',
    isLocalDesigner: false,
    website: 'https://louisvuitton.com',
  },
  {
    id: 'b2',
    slug: 'gucci',
    name: 'Gucci',
    logo: '/images/brands/gucci.png',
    shortBio: 'Italian excellence. Bold prints, signature hardware, and unapologetic elegance.',
    isLocalDesigner: false,
    website: 'https://gucci.com',
  },
  {
    id: 'b3',
    slug: 'nike',
    name: 'Nike',
    logo: '/images/brands/nike.png',
    shortBio: 'Where performance meets street culture — the world\'s leading sport and lifestyle brand.',
    isLocalDesigner: false,
    website: 'https://nike.com',
  },
  {
    id: 'b4',
    slug: 'adidas',
    name: 'Adidas',
    logo: '/images/brands/adidas.png',
    shortBio: 'Three stripes. Decades of heritage. Sport, style, and substance in every piece.',
    isLocalDesigner: false,
    website: 'https://adidas.com',
  },
  {
    id: 'b5',
    slug: 'kente-studio',
    name: 'Kente Studio',
    logo: '/images/brands/kente-studio.png',
    shortBio: 'Accra-based label reimagining traditional Ghanaian textile craft for modern wardrobes.',
    isLocalDesigner: true,
    instagram: '@kentestudio',
  },
  {
    id: 'b6',
    slug: 'ayaba-collective',
    name: 'Ayaba Collective',
    logo: '/images/brands/ayaba.png',
    shortBio: 'Bold Afrocentric womenswear rooted in West African heritage and contemporary cuts.',
    isLocalDesigner: true,
    instagram: '@ayabacollective',
  },
  {
    id: 'b7',
    slug: 'urban-thread',
    name: 'Urban Thread',
    logo: '/images/brands/urban-thread.png',
    shortBio: 'Modern streetwear with a local twist — designed in Ghana, worn globally.',
    isLocalDesigner: true,
    instagram: '@urbanthreadgh',
  },
];

export const products: Product[] = [
  // Louis Vuitton
  {
    id: 'p1',
    slug: 'lv-neverfull-tote',
    name: 'Neverfull MM Tote',
    brand: 'Louis Vuitton',
    brandSlug: 'louis-vuitton',
    gender: ['women'],
    category: 'bags',
    price: 1850,
    description:
      'The Neverfull MM in classic Monogram canvas — one of the most iconic totes ever crafted. Supple side laces allow the bag to be cinched for a sleeker silhouette, or opened wide for maximum volume.',
    images: ['/images/products/lv-neverfull.jpg'],
    variants: [{ size: 'MM', color: 'Monogram', stock: 3 }],
    isLocalDesigner: false,
    isNewArrival: false,
    isFeatured: true,
    isOnPromotion: false,
    tags: ['luxury', 'bags', 'women'],
  },
  {
    id: 'p2',
    slug: 'lv-slender-wallet',
    name: 'Slender Wallet',
    brand: 'Louis Vuitton',
    brandSlug: 'louis-vuitton',
    gender: ['men'],
    category: 'accessories',
    price: 480,
    description:
      'A slim, elegant wallet in Taiga leather with six card slots, two bill compartments, and an ID window. Minimal bulk, maximum refinement.',
    images: ['/images/products/lv-wallet.jpg'],
    variants: [
      { size: 'One Size', color: 'Taupe', stock: 5 },
      { size: 'One Size', color: 'Black', stock: 4 },
    ],
    isLocalDesigner: false,
    isNewArrival: true,
    isFeatured: false,
    isOnPromotion: false,
    tags: ['luxury', 'accessories', 'men'],
  },
  // Gucci
  {
    id: 'p3',
    slug: 'gucci-marmont-bag',
    name: 'GG Marmont Small Bag',
    brand: 'Gucci',
    brandSlug: 'gucci',
    gender: ['women'],
    category: 'bags',
    price: 1290,
    originalPrice: 1550,
    promotionPercent: 17,
    description:
      'The GG Marmont in matelassé leather with the signature double G hardware. A timeless silhouette re-imagined in a compact, crossbody format.',
    images: ['/images/products/gucci-marmont.jpg'],
    variants: [
      { size: 'Small', color: 'Black', stock: 2 },
      { size: 'Small', color: 'Rose Beige', stock: 1 },
    ],
    isLocalDesigner: false,
    isNewArrival: false,
    isFeatured: true,
    isOnPromotion: true,
    tags: ['luxury', 'bags', 'women', 'promo'],
  },
  {
    id: 'p4',
    slug: 'gucci-ace-sneaker',
    name: 'Ace Sneaker',
    brand: 'Gucci',
    brandSlug: 'gucci',
    gender: ['men', 'women'],
    category: 'footwear',
    price: 650,
    description:
      'The iconic Gucci Ace in white leather with the embroidered Web stripe on the side. A clean, versatile silhouette that bridges luxury and streetwear.',
    images: ['/images/products/gucci-ace.jpg'],
    variants: [
      { size: '40', color: 'White', stock: 2 },
      { size: '41', color: 'White', stock: 3 },
      { size: '42', color: 'White', stock: 1 },
      { size: '43', color: 'White', stock: 2 },
    ],
    isLocalDesigner: false,
    isNewArrival: true,
    isFeatured: false,
    isOnPromotion: false,
    tags: ['luxury', 'footwear', 'unisex'],
  },
  // Nike
  {
    id: 'p5',
    slug: 'nike-air-max-270',
    name: 'Air Max 270',
    brand: 'Nike',
    brandSlug: 'nike',
    gender: ['men', 'women'],
    category: 'footwear',
    price: 150,
    originalPrice: 185,
    promotionPercent: 19,
    description:
      'The Air Max 270 features Nike\'s largest Air unit yet for an extraordinarily cushioned ride. The sleek upper and bold color make it a statement piece on any street.',
    images: ['/images/products/nike-am270.jpg'],
    variants: [
      { size: '40', color: 'Black/White', stock: 6 },
      { size: '41', color: 'Black/White', stock: 4 },
      { size: '42', color: 'Black/White', stock: 7 },
      { size: '43', color: 'Black/White', stock: 3 },
      { size: '44', color: 'Black/White', stock: 5 },
    ],
    isLocalDesigner: false,
    isNewArrival: false,
    isFeatured: true,
    isOnPromotion: true,
    tags: ['sport', 'footwear', 'unisex', 'promo'],
  },
  {
    id: 'p6',
    slug: 'nike-tech-fleece-hoodie',
    name: 'Tech Fleece Hoodie',
    brand: 'Nike',
    brandSlug: 'nike',
    gender: ['men'],
    category: 'tops',
    price: 130,
    description:
      'Nike Tech Fleece — lightweight warmth in a clean, tapered silhouette. Bonded paneling and zippered pockets keep the look minimal and streamlined.',
    images: ['/images/products/nike-tech-fleece.jpg'],
    variants: [
      { size: 'S', color: 'Black', stock: 4 },
      { size: 'M', color: 'Black', stock: 6 },
      { size: 'L', color: 'Black', stock: 5 },
      { size: 'XL', color: 'Black', stock: 3 },
      { size: 'S', color: 'Dark Grey', stock: 3 },
      { size: 'M', color: 'Dark Grey', stock: 4 },
    ],
    isLocalDesigner: false,
    isNewArrival: true,
    isFeatured: false,
    isOnPromotion: false,
    tags: ['sport', 'tops', 'men'],
  },
  // Local Designers
  {
    id: 'p7',
    slug: 'kente-studio-wrap-dress',
    name: 'Kente Wrap Dress',
    brand: 'Kente Studio',
    brandSlug: 'kente-studio',
    gender: ['women'],
    category: 'dresses',
    price: 95,
    description:
      'A fluid wrap dress cut from authentic hand-woven kente cloth sourced directly from Bonwire. Each piece is unique — the pattern you receive is one of a kind.',
    images: ['/images/products/kente-wrap-dress.jpg'],
    variants: [
      { size: 'XS', color: 'Gold/Red', stock: 2 },
      { size: 'S', color: 'Gold/Red', stock: 3 },
      { size: 'M', color: 'Gold/Red', stock: 2 },
      { size: 'L', color: 'Gold/Red', stock: 1 },
    ],
    isLocalDesigner: true,
    isNewArrival: true,
    isFeatured: true,
    isOnPromotion: false,
    tags: ['local', 'dresses', 'women', 'kente'],
  },
  {
    id: 'p8',
    slug: 'ayaba-power-suit',
    name: 'Ayaba Power Suit',
    brand: 'Ayaba Collective',
    brandSlug: 'ayaba-collective',
    gender: ['women'],
    category: 'outerwear',
    price: 180,
    description:
      'A bold tailored suit blending Ankara print panels with sharp, contemporary tailoring. Comes as a blazer-and-trouser set. Command every room.',
    images: ['/images/products/ayaba-suit.jpg'],
    variants: [
      { size: 'S', color: 'Blue Ankara', stock: 2 },
      { size: 'M', color: 'Blue Ankara', stock: 3 },
      { size: 'L', color: 'Blue Ankara', stock: 2 },
    ],
    isLocalDesigner: true,
    isNewArrival: false,
    isFeatured: true,
    isOnPromotion: false,
    tags: ['local', 'outerwear', 'women', 'ankara'],
  },
  {
    id: 'p9',
    slug: 'urban-thread-jogger',
    name: 'Heritage Jogger',
    brand: 'Urban Thread',
    brandSlug: 'urban-thread',
    gender: ['men', 'women'],
    category: 'bottoms',
    price: 65,
    originalPrice: 80,
    promotionPercent: 19,
    description:
      'Relaxed-fit joggers in heavyweight French terry cotton. Subtle kente-strip side tape runs the full length of the leg — local pride in every stitch.',
    images: ['/images/products/urban-jogger.jpg'],
    variants: [
      { size: 'S', color: 'Charcoal', stock: 5 },
      { size: 'M', color: 'Charcoal', stock: 6 },
      { size: 'L', color: 'Charcoal', stock: 4 },
      { size: 'XL', color: 'Charcoal', stock: 3 },
    ],
    isLocalDesigner: true,
    isNewArrival: false,
    isFeatured: false,
    isOnPromotion: true,
    tags: ['local', 'bottoms', 'unisex', 'promo'],
  },
  {
    id: 'p10',
    slug: 'adidas-ultraboost-23',
    name: 'Ultraboost 23',
    brand: 'Adidas',
    brandSlug: 'adidas',
    gender: ['men', 'women'],
    category: 'footwear',
    price: 190,
    description:
      'The Ultraboost 23 with BOOST cushioning and a Primeknit upper. Every step returns energy — and looks flawless doing it.',
    images: ['/images/products/adidas-ultraboost.jpg'],
    variants: [
      { size: '40', color: 'Core Black', stock: 3 },
      { size: '41', color: 'Core Black', stock: 4 },
      { size: '42', color: 'Core Black', stock: 5 },
      { size: '43', color: 'Core Black', stock: 3 },
      { size: '44', color: 'Core Black', stock: 2 },
    ],
    isLocalDesigner: false,
    isNewArrival: true,
    isFeatured: false,
    isOnPromotion: false,
    tags: ['sport', 'footwear', 'unisex'],
  },
];

export const homepageSections: HomepageSection[] = [
  {
    id: 'hs1',
    type: 'featured',
    title: 'Featured This Season',
    subtitle: 'Hand-picked pieces our stylists love right now.',
    enabled: true,
    order: 1,
  },
  {
    id: 'hs2',
    type: 'new_arrivals',
    title: 'New Arrivals',
    subtitle: 'Just landed — be the first to wear it.',
    enabled: true,
    order: 2,
  },
  {
    id: 'hs3',
    type: 'promotion',
    title: 'On Promotion',
    subtitle: 'Limited time offers — shop before they\'re gone.',
    enabled: true,
    order: 3,
  },
  {
    id: 'hs4',
    type: 'ad_banner',
    title: 'Local Designers Season',
    subtitle: 'Celebrating Ghana\'s finest emerging fashion voices.',
    enabled: true,
    order: 4,
    adImage: '/images/ads/local-designers-banner.jpg',
    adLink: '/local-designers',
  },
  {
    id: 'hs5',
    type: 'local_designers',
    title: 'From Our Local Designers',
    subtitle: 'Proudly made in Ghana. Worn everywhere.',
    enabled: true,
    order: 5,
  },
];

import { client } from '@/sanity/client';
import { projectId } from '@/sanity/env';
import { allProductsQuery, allBrandsQuery } from './sanity/queries';

export async function getProducts(): Promise<Product[]> {
  if (projectId === 'dummy-project-id') {
    return products;
  }
  try {
    return await client.fetch(allProductsQuery);
  } catch (e) {
    console.error('Failed to fetch from Sanity', e);
    return products;
  }
}

export async function getBrands(): Promise<Brand[]> {
  if (projectId === 'dummy-project-id') {
    return brands;
  }
  try {
    return await client.fetch(allBrandsQuery);
  } catch (e) {
    console.error('Failed to fetch from Sanity', e);
    return brands;
  }
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByBrand(brandSlug: string): Product[] {
  return products.filter((p) => p.brandSlug === brandSlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNewArrival);
}

export function getPromotionProducts(): Product[] {
  return products.filter((p) => p.isOnPromotion);
}

export function getLocalDesignerProducts(): Product[] {
  return products.filter((p) => p.isLocalDesigner);
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getLocalDesignerBrands(): Brand[] {
  return brands.filter((b) => b.isLocalDesigner);
}

export const WHATSAPP_NUMBER = '233XXXXXXXXX'; // Replace with actual number
