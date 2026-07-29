import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getLocalDesignerProducts, getLocalDesignerBrands } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Local Designers',
  description: 'Discover Ghanaian independent fashion designers — Kente Studio, Ayaba Collective, Urban Thread and more.',
};

export default function LocalDesignersPage() {
  const localBrands = getLocalDesignerBrands();
  const localProducts = getLocalDesignerProducts();

  return (
    <div>
      <section className={styles.hero}>
        <div className="container">
          <p className="section-label" style={{ color: 'var(--color-accent)' }}>🇬🇭 Made in Ghana</p>
          <h1 className={`display-2 ${styles.heroTitle}`}>
            Local Designers
          </h1>
          <p className={styles.heroSub}>
            We champion Ghana&apos;s most exciting independent fashion voices.
            Every piece you buy supports a local creative and their community.
          </p>
        </div>
      </section>

      <div className="container section">
        {/* Designer cards */}
        <div className="section-header">
          <span className="section-label">The Creatives</span>
          <h2 className="heading-2" style={{ marginTop: 'var(--space-3)' }}>Meet the Designers</h2>
        </div>
        <div className={styles.designerGrid}>
          {localBrands.map((brand) => (
            <Link key={brand.id} href={`/brands/${brand.slug}`} className={styles.designerCard} id={`designer-${brand.slug}`}>
              <div className={styles.designerLogo}>{brand.name.substring(0, 2).toUpperCase()}</div>
              <div>
                <h3 className={styles.designerName}>{brand.name}</h3>
                <p className={styles.designerBio}>{brand.shortBio}</p>
                {brand.instagram && <p className={styles.instagram}>{brand.instagram}</p>}
              </div>
              <span className={styles.viewBtn}>View Collection →</span>
            </Link>
          ))}
        </div>

        {/* Products */}
        <div className="section-header" style={{ marginTop: 'var(--space-16)' }}>
          <span className="section-label">The Collection</span>
          <h2 className="heading-2" style={{ marginTop: 'var(--space-3)' }}>Local Picks</h2>
        </div>
        <div className="product-grid product-grid--4">
          {localProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
