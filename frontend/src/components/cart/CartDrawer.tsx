'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
  const { cart, itemCount, isOpen, closeCart, removeItem, updateQty } = useCart();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="overlay" onClick={closeCart} aria-hidden="true" />
      <aside className={styles.drawer} role="dialog" aria-label="Shopping cart" aria-modal="true">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Your Bag
            {itemCount > 0 && <span className={styles.count}>{itemCount}</span>}
          </h2>
          <button className={styles.closeBtn} onClick={closeCart} aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <hr className="divider" />

        {/* Items */}
        <div className={styles.items}>
          {cart.items.length === 0 ? (
            <div className={styles.empty}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={styles.emptyIcon}>
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <p className={styles.emptyTitle}>Your bag is empty</p>
              <p className={styles.emptySubtitle}>Add some pieces to get started.</p>
              <button className="btn btn--outline" onClick={closeCart} style={{ marginTop: 'var(--space-4)' }}>
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.items.map((item) => (
              <div key={`${item.productId}-${item.size}-${item.color}`} className={styles.item}>
                {/* Image */}
                <div className={styles.itemImg}>
                  <div className={`img-placeholder ${styles.imgPlaceholder}`}>
                    <span>{item.product.brand[0]}</span>
                  </div>
                </div>

                {/* Details */}
                <div className={styles.itemDetails}>
                  <p className={styles.itemBrand}>{item.product.brand}</p>
                  <p className={styles.itemName}>{item.product.name}</p>
                  <p className={styles.itemVariant}>{item.size} · {item.color}</p>

                  <div className={styles.itemFooter}>
                    {/* Qty control */}
                    <div className={styles.qtyControl}>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQty(item.productId, item.size, item.color, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >−</button>
                      <span className={styles.qty}>{item.quantity}</span>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQty(item.productId, item.size, item.color, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >+</button>
                    </div>
                    <span className={styles.itemPrice}>${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>

                {/* Remove */}
                <button
                  className={styles.removeBtn}
                  onClick={() => removeItem(item.productId, item.size, item.color)}
                  aria-label="Remove item"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.subtotalRow}>
              <span className={styles.subtotalLabel}>Subtotal</span>
              <span className={styles.subtotalAmount}>${cart.subtotal.toFixed(2)}</span>
            </div>
            <p className={styles.shippingNote}>Shipping & payment confirmed via WhatsApp</p>
            <Link
              href="/cart"
              className={`btn btn--whatsapp ${styles.checkoutBtn}`}
              onClick={closeCart}
              id="cart-checkout-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Send Order via WhatsApp
            </Link>
            <Link
              href="/shop"
              className={`btn btn--ghost ${styles.continueBtn}`}
              onClick={closeCart}
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
