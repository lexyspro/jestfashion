'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { buildWhatsAppLink, generateOrderReference } from '@/lib/whatsapp';
import styles from './page.module.css';

export default function CartPage() {
  const { cart, removeItem, updateQty, clearCart, itemCount } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderSent, setOrderSent] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  function handleSendOrder() {
    const ref = generateOrderReference();
    setOrderRef(ref);
    const link = buildWhatsAppLink(cart, ref);
    window.open(link, '_blank');
    setOrderSent(true);
    clearCart();
  }

  if (orderSent) {
    return (
      <div className={styles.successPage}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </div>
          <h1 className="heading-1" style={{ marginTop: 'var(--space-4)' }}>Order Sent!</h1>
          <p className={styles.successRef}>Reference: <strong>{orderRef}</strong></p>
          <p className={styles.successText}>
            Your order summary has been sent to our WhatsApp. Our team will confirm availability and share payment details shortly.
          </p>
          <div className={styles.successSteps}>
            <div className={styles.step}>
              <span className={styles.stepNum}>1</span>
              <span>We receive your order on WhatsApp</span>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>2</span>
              <span>We confirm stock &amp; send payment details</span>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <span>You pay and we dispatch</span>
            </div>
          </div>
          <Link href="/shop" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-8)' }} id="continue-shopping-after-order">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="container">
          <p className="section-label">Checkout</p>
          <h1 className="heading-1" style={{ marginTop: 'var(--space-2)' }}>Your Bag</h1>
          {itemCount > 0 && (
            <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </p>
          )}
        </div>
      </div>

      <div className={`container ${styles.layout}`}>
        {cart.items.length === 0 ? (
          <div className={styles.emptyCart}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-silk)' }}>
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <h2 className="heading-2" style={{ marginTop: 'var(--space-4)' }}>Your bag is empty</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
              Add some pieces and come back here to complete your order.
            </p>
            <Link href="/shop" className="btn btn--outline" style={{ marginTop: 'var(--space-6)' }} id="empty-cart-shop-btn">
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            {/* Items Column */}
            <div className={styles.itemsCol}>
              <div className={styles.itemsHeader}>
                <h2 className={styles.colTitle}>Order Items</h2>
                <button className="btn btn--ghost btn--sm" onClick={clearCart} id="clear-cart-btn">
                  Clear All
                </button>
              </div>

              {cart.items.map((item) => (
                <div key={`${item.productId}-${item.size}-${item.color}`} className={styles.item}>
                  <div className={styles.itemImg}>
                    <div className={`img-placeholder ${styles.imgPlaceholder}`}>
                      {item.product.brand.substring(0, 1)}
                    </div>
                  </div>
                  <div className={styles.itemDetails}>
                    <p className={styles.itemBrand}>{item.product.brand}</p>
                    <Link href={`/shop/${item.product.slug}`} className={styles.itemName}>
                      {item.product.name}
                    </Link>
                    <p className={styles.itemVariant}>{item.size} · {item.color}</p>
                    <div className={styles.itemFooter}>
                      <div className={styles.qtyControl}>
                        <button className={styles.qtyBtn} onClick={() => updateQty(item.productId, item.size, item.color, item.quantity - 1)} aria-label="Decrease">−</button>
                        <span className={styles.qty}>{item.quantity}</span>
                        <button className={styles.qtyBtn} onClick={() => updateQty(item.productId, item.size, item.color, item.quantity + 1)} aria-label="Increase">+</button>
                      </div>
                      <button
                        className={styles.removeBtn}
                        onClick={() => removeItem(item.productId, item.size, item.color)}
                        aria-label="Remove"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className={styles.itemPrice}>
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Column */}
            <div className={styles.summaryCol}>
              <div className={styles.summaryCard}>
                <h2 className={styles.colTitle}>Order Summary</h2>

                <div className={styles.summaryLines}>
                  {cart.items.map((item) => (
                    <div key={`${item.productId}-${item.size}-${item.color}`} className={styles.summaryLine}>
                      <span className={styles.summaryLineLabel}>
                        {item.product.name} ×{item.quantity}
                      </span>
                      <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <hr className="divider" style={{ margin: 'var(--space-4) 0' }} />

                <div className={styles.subtotalRow}>
                  <span className={styles.subtotalLabel}>Subtotal</span>
                  <span className={styles.subtotalAmount}>${cart.subtotal.toFixed(2)}</span>
                </div>
                <p className={styles.shippingNote}>
                  Shipping cost will be confirmed via WhatsApp based on your location.
                </p>

                <hr className="divider" style={{ margin: 'var(--space-5) 0' }} />

                {/* Optional contact info */}
                <div className={styles.contactSection}>
                  <h3 className={styles.contactTitle}>Optional — Your Details</h3>
                  <p className={styles.contactSub}>
                    Pre-fill so we can address you directly on WhatsApp.
                  </p>
                  <input
                    type="text"
                    className="input"
                    placeholder="Your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    id="customer-name"
                    style={{ marginTop: 'var(--space-3)' }}
                  />
                  <input
                    type="tel"
                    className="input"
                    placeholder="WhatsApp / phone number"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    id="customer-phone"
                    style={{ marginTop: 'var(--space-3)' }}
                  />
                </div>

                <button
                  className={`btn btn--whatsapp ${styles.sendBtn}`}
                  onClick={handleSendOrder}
                  id="send-order-whatsapp-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  Send Order via WhatsApp
                </button>

                <div className={styles.trustBadges}>
                  <span>🔒 Secure</span>
                  <span>✓ Manual confirmation</span>
                  <span>📦 Dispatched after payment</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
