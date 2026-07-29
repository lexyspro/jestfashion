'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { getProductBySlug, products } from '@/lib/data';
import { Product } from '@/lib/types';
import ProductCard from '@/components/ui/ProductCard';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: PageProps) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h1 className="heading-1">Product not found</h1>
        <Link href="/shop" className="btn btn--outline" style={{ marginTop: 'var(--space-6)' }}>
          Back to Shop
        </Link>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}

function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();

  const sizes = [...new Set(product.variants.map((v) => v.size))];
  const colors = [...new Set(product.variants.map((v) => v.color))];

  const [selectedSize, setSelectedSize] = useState(sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(colors[0] || '');
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const selectedVariant = product.variants.find(
    (v) => v.size === selectedSize && v.color === selectedColor,
  );
  const inStock = selectedVariant ? selectedVariant.stock > 0 : false;

  function handleAddToCart() {
    if (!inStock) return;
    addItem(product, selectedSize, selectedColor, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  // Related products — same brand or category
  const related = products
    .filter(
      (p) => p.id !== product.id && (p.brandSlug === product.brandSlug || p.category === product.category),
    )
    .slice(0, 4);

  return (
    <div>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/shop">Shop</Link>
          <span>›</span>
          <Link href={`/brands/${product.brandSlug}`}>{product.brand}</Link>
          <span>›</span>
          <span>{product.name}</span>
        </div>
      </div>

      <div className={`container ${styles.productLayout}`}>
        {/* Left — Images */}
        <div className={styles.imageSection}>
          <div className={styles.mainImage}>
            {!imageError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={product.images[0]}
                alt={product.name}
                className={styles.img}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className={`${styles.imgPlaceholder} img-placeholder`}>
                <span>{product.brand}</span>
              </div>
            )}
            {/* Badges */}
            <div className={styles.badges}>
              {product.isOnPromotion && product.promotionPercent && (
                <span className="badge badge--promo">-{product.promotionPercent}%</span>
              )}
              {product.isNewArrival && (
                <span className="badge badge--new">New Arrival</span>
              )}
              {product.isLocalDesigner && (
                <span className="badge badge--local">🇬🇭 Made in Ghana</span>
              )}
            </div>
          </div>
        </div>

        {/* Right — Info */}
        <div className={styles.infoSection}>
          <Link href={`/brands/${product.brandSlug}`} className={styles.brandLink}>
            {product.brand}
          </Link>
          <h1 className={`heading-1 ${styles.productName}`}>{product.name}</h1>

          {/* Price */}
          <div className={styles.priceRow}>
            <span className={styles.price}>${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <>
                <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
                <span className="badge badge--promo">Save {product.promotionPercent}%</span>
              </>
            )}
          </div>

          <hr className="divider" style={{ margin: 'var(--space-5) 0' }} />

          {/* Color */}
          {colors.length > 0 && (
            <div className={styles.variantSection}>
              <p className={styles.variantLabel}>
                Colour: <strong>{selectedColor}</strong>
              </p>
              <div className={styles.optionGroup}>
                {colors.map((c) => (
                  <button
                    key={c}
                    className={`${styles.optionBtn} ${selectedColor === c ? styles.optionBtnActive : ''}`}
                    onClick={() => setSelectedColor(c)}
                    id={`color-${c.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size */}
          {sizes.length > 0 && (
            <div className={styles.variantSection}>
              <p className={styles.variantLabel}>Size: <strong>{selectedSize}</strong></p>
              <div className={styles.optionGroup}>
                {sizes.map((s) => {
                  const v = product.variants.find((vv) => vv.size === s && vv.color === selectedColor);
                  const available = v ? v.stock > 0 : false;
                  return (
                    <button
                      key={s}
                      className={`${styles.optionBtn} ${selectedSize === s ? styles.optionBtnActive : ''} ${!available ? styles.optionBtnDisabled : ''}`}
                      onClick={() => available && setSelectedSize(s)}
                      disabled={!available}
                      id={`size-${s.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Qty */}
          <div className={styles.variantSection}>
            <p className={styles.variantLabel}>Quantity</p>
            <div className={styles.qtyControl}>
              <button className={styles.qtyBtn} onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease">−</button>
              <span className={styles.qty}>{qty}</span>
              <button className={styles.qtyBtn} onClick={() => setQty(qty + 1)} aria-label="Increase">+</button>
            </div>
          </div>

          {/* Stock status */}
          <p className={`${styles.stockStatus} ${inStock ? styles.inStock : styles.outOfStock}`}>
            {inStock
              ? `✓ In stock (${selectedVariant?.stock} available)`
              : '✗ Out of stock — select another option'}
          </p>

          {/* Add to cart */}
          <button
            className={`btn btn--primary btn--lg ${styles.addToCartBtn} ${added ? styles.addedBtn : ''}`}
            onClick={handleAddToCart}
            disabled={!inStock}
            id="add-to-cart-btn"
          >
            {added ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Added to Bag
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                Add to Bag
              </>
            )}
          </button>

          <hr className="divider" style={{ margin: 'var(--space-6) 0' }} />

          {/* Description */}
          <div className={styles.description}>
            <h2 className={styles.descTitle}>About this piece</h2>
            <p className={styles.descText}>{product.description}</p>
          </div>

          {/* Order info */}
          <div className={styles.orderInfo}>
            <div className={styles.orderInfoItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <span>Order confirmed via WhatsApp</span>
            </div>
            <div className={styles.orderInfoItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
              <span>Manual verification before dispatch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className={`section container`} aria-label="Related products">
          <div className="section-header">
            <span className="section-label">You may also like</span>
            <h2 className="heading-2" style={{ marginTop: 'var(--space-2)' }}>Related Pieces</h2>
          </div>
          <div className="product-grid product-grid--4">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
