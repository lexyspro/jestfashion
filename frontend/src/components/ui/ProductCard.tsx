'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { useCart } from '@/contexts/CartContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addItem } = useCart();
  const [imageError, setImageError] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);

  const defaultVariant = product.variants[0];

  function handleQuickAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (!defaultVariant) return;
    addItem(product, defaultVariant.size, defaultVariant.color, 1);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1800);
  }

  const discount = product.promotionPercent;

  return (
    <Link href={`/shop/${product.slug}`} className={styles.card} id={`product-${product.id}`}>
      {/* Image */}
      <div className={styles.imageWrap}>
        {!imageError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.images[0]}
            alt={product.name}
            className={styles.image}
            loading={priority ? 'eager' : 'lazy'}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`${styles.imagePlaceholder} img-placeholder`}>
            <span>{product.brand}</span>
          </div>
        )}

        {/* Badges */}
        <div className={styles.badges}>
          {product.isOnPromotion && discount && (
            <span className="badge badge--promo">-{discount}%</span>
          )}
          {product.isNewArrival && !product.isOnPromotion && (
            <span className="badge badge--new">New</span>
          )}
          {product.isLocalDesigner && (
            <span className="badge badge--local">🇬🇭 Local</span>
          )}
        </div>

        {/* Quick Add overlay */}
        <button
          className={`${styles.quickAdd} ${addedFeedback ? styles.quickAddSuccess : ''}`}
          onClick={handleQuickAdd}
          aria-label={`Quick add ${product.name} to cart`}
          id={`quick-add-${product.id}`}
        >
          {addedFeedback ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Added
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              Quick Add
            </>
          )}
        </button>
      </div>

      {/* Info */}
      <div className={styles.info}>
        <p className={styles.brand}>{product.brand}</p>
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.priceRow}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        {/* Color swatches */}
        {product.variants.length > 0 && (
          <p className={styles.variantHint}>
            {[...new Set(product.variants.map((v) => v.size))].slice(0, 5).join(' · ')}
            {product.variants.length > 5 && ' · …'}
          </p>
        )}
      </div>
    </Link>
  );
}
