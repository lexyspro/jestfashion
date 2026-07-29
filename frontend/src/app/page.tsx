import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import ProductCard from '@/components/ui/ProductCard';
import {
  getFeaturedProducts,
  getNewArrivals,
  getPromotionProducts,
  getLocalDesignerProducts,
  getLocalDesignerBrands,
  brands,
} from '@/lib/data';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Jest Fashion — Luxury & Local Designers',
  description:
    'Shop luxury labels and local Ghanaian designers. Louis Vuitton, Gucci, Nike, Kente Studio, Ayaba Collective and more. Order via WhatsApp.',
};

export default function HomePage() {
  const featured = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const promos = getPromotionProducts();
  const localProducts = getLocalDesignerProducts();
  const localBrands = getLocalDesignerBrands();
  const majorBrands = brands.filter((b) => !b.isLocalDesigner);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroContent}>
          <p className="section-label" style={{ color: 'rgba(201,169,110,0.9)' }}>
            New Season · 2025
          </p>
          <h1 className={`display-1 ${styles.heroTitle}`}>
            Fashion<br />
            <em>without</em><br />
            Compromise.
          </h1>
          <p className={styles.heroSub}>
            Luxury labels. Local voices. Every gender.<br />
            Curated and shipped from Ghana.
          </p>
          <div className={styles.heroActions}>
            <Link href="/shop" className="btn btn--gold btn--lg" id="hero-shop-btn">
              Shop the Collection
            </Link>
            <Link href="/local-designers" className="btn btn--outline btn--lg" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }} id="hero-local-btn">
              Local Designers
            </Link>
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          <div className={styles.heroImageBg} />
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeLabel}>Order via</span>
            <span className={styles.heroBadgeWa}>WhatsApp</span>
          </div>
        </div>
      </section>

      {/* ─── BRANDS STRIP ─── */}
      <section className={styles.brandsStrip} aria-label="Featured brands">
        <div className="container">
          <p className={styles.brandsLabel}>Carrying the world&apos;s finest</p>
          <div className={styles.brandsList}>
            {majorBrands.map((brand) => (
              <Link key={brand.id} href={`/brands/${brand.slug}`} className={styles.brandItem} id={`brand-strip-${brand.slug}`}>
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED ─── */}
      <section className="section container" aria-label="Featured products">
        <div className="section-header">
          <span className="section-label">Hand-picked</span>
          <h2 className="heading-1" style={{ marginTop: 'var(--space-3)' }}>Featured This Season</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
            Our stylists&apos; top picks for right now.
          </p>
        </div>
        <div className="product-grid product-grid--4">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 2} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
          <Link href="/shop" className="btn btn--outline">View All Products</Link>
        </div>
      </section>

      {/* ─── AD BANNER ─── */}
      <section className={styles.adBanner} aria-label="Promotional banner">
        <div className={`container ${styles.adBannerInner}`}>
          <div className={styles.adBannerText}>
            <p className="section-label" style={{ color: 'var(--color-accent)' }}>Limited Time</p>
            <h2 className="heading-1" style={{ color: '#fff', marginTop: 'var(--space-3)' }}>
              Season Sale<br />Up to 20% Off
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 'var(--space-3)' }}>
              Selected pieces from Nike, Gucci, and our local designers.
            </p>
            <Link href="/shop?isOnPromotion=true" className="btn btn--gold" style={{ marginTop: 'var(--space-6)' }} id="ad-banner-sale-btn">
              Shop the Sale
            </Link>
          </div>
          <div className={styles.adBannerDecor}>
            <div className={styles.adBannerCircle} />
          </div>
        </div>
      </section>

      {/* ─── NEW ARRIVALS ─── */}
      <section className="section container" aria-label="New arrivals">
        <div className="section-header">
          <span className="section-label">Just In</span>
          <h2 className="heading-1" style={{ marginTop: 'var(--space-3)' }}>New Arrivals</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
            Be the first to wear it.
          </p>
        </div>
        <div className="product-grid product-grid--4">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ─── PROMOTIONS ─── */}
      <section className={styles.promoSection} aria-label="On promotion">
        <div className="container">
          <div className="section-header">
            <span className="section-label">On Sale</span>
            <h2 className="heading-1" style={{ marginTop: 'var(--space-3)' }}>Promotions</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
              Shop before they&apos;re gone.
            </p>
          </div>
          <div className="product-grid product-grid--4">
            {promos.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCAL DESIGNERS SPOTLIGHT ─── */}
      <section className={styles.localSection} aria-label="Local designers">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Made in Ghana</span>
            <h2 className="heading-1" style={{ marginTop: 'var(--space-3)' }}>From Our Local Designers</h2>
            <p className="section-header__subtitle" style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)', textAlign: 'center', maxWidth: '500px', marginInline: 'auto' }}>
              Proudly Ghanaian. Internationally styled.
            </p>
          </div>

          {/* Local Brands */}
          <div className={styles.localBrands}>
            {localBrands.map((brand) => (
              <Link key={brand.id} href={`/brands/${brand.slug}`} className={styles.localBrandCard} id={`local-brand-${brand.slug}`}>
                <div className={styles.localBrandLogo}>
                  {brand.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className={styles.localBrandName}>{brand.name}</p>
                  <p className={styles.localBrandBio}>{brand.shortBio}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Local Products */}
          <div className="product-grid product-grid--4" style={{ marginTop: 'var(--space-10)' }}>
            {localProducts.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
            <Link href="/local-designers" className="btn btn--outline" id="local-designers-all-btn">
              Meet All Local Designers
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className={`section container`} aria-label="Shop by category">
        <div className="section-header section-header--center">
          <span className="section-label">Browse</span>
          <h2 className="heading-1" style={{ marginTop: 'var(--space-3)' }}>Shop by Category</h2>
        </div>
        <div className={styles.categoryGrid}>
          {[
            { href: '/shop?gender=women', label: 'Women', emoji: '👗' },
            { href: '/shop?gender=men', label: 'Men', emoji: '🧥' },
            { href: '/shop?gender=kids', label: 'Kids', emoji: '🎒' },
            { href: '/shop?category=footwear', label: 'Footwear', emoji: '👟' },
            { href: '/shop?category=bags', label: 'Bags', emoji: '👜' },
            { href: '/shop?category=accessories', label: 'Accessories', emoji: '⌚' },
          ].map((cat) => (
            <Link key={cat.href} href={cat.href} className={styles.categoryCard} id={`category-${cat.label.toLowerCase()}`}>
              <span className={styles.categoryEmoji}>{cat.emoji}</span>
              <span className={styles.categoryLabel}>{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── WHATSAPP CTA ─── */}
      <section className={styles.whatsappCta} aria-label="Order via WhatsApp">
        <div className={`container ${styles.whatsappCtaInner}`}>
          <div className={styles.whatsappIcon}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </div>
          <div>
            <h2 className="heading-2" style={{ color: '#fff' }}>How It Works</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: 'var(--space-2)', maxWidth: '480px' }}>
              Browse and add to cart. When you&apos;re ready, tap &quot;Send Order via WhatsApp&quot; — we&apos;ll receive your order summary and confirm availability &amp; payment manually.
            </p>
          </div>
          <Link href="/shop" className="btn btn--whatsapp btn--lg" style={{ flexShrink: 0 }} id="cta-shop-now-btn">
            Start Shopping
          </Link>
        </div>
      </section>
    </>
  );
}
