import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { brands } from '@/lib/data';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Brands',
  description: 'Browse all brands carried by Jest Fashion — from Louis Vuitton and Gucci to local Ghanaian designers.',
};

export default function BrandsPage() {
  const majorBrands = brands.filter((b) => !b.isLocalDesigner);
  const localBrands = brands.filter((b) => b.isLocalDesigner);

  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="container">
          <p className="section-label">Directory</p>
          <h1 className="heading-1" style={{ marginTop: 'var(--space-2)' }}>All Brands</h1>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
            {brands.length} brands — global luxury labels and proud local designers.
          </p>
        </div>
      </div>

      <div className="container section">
        <section aria-label="International brands">
          <div className="section-header">
            <span className="section-label">International</span>
            <h2 className="heading-2" style={{ marginTop: 'var(--space-3)' }}>Luxury Labels</h2>
          </div>
          <div className={styles.brandGrid}>
            {majorBrands.map((brand) => (
              <Link key={brand.id} href={`/brands/${brand.slug}`} className={styles.brandCard} id={`brand-card-${brand.slug}`}>
                <div className={styles.brandInitials}>{brand.name.substring(0, 2).toUpperCase()}</div>
                <div className={styles.brandInfo}>
                  <h3 className={styles.brandName}>{brand.name}</h3>
                  <p className={styles.brandBio}>{brand.shortBio}</p>
                </div>
                <div className={styles.brandArrow}>→</div>
              </Link>
            ))}
          </div>
        </section>

        <section aria-label="Local designers" style={{ marginTop: 'var(--space-16)' }}>
          <div className="section-header">
            <span className="section-label">🇬🇭 Made in Ghana</span>
            <h2 className="heading-2" style={{ marginTop: 'var(--space-3)' }}>Local Designers</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
              Supporting and spotlighting Ghana&apos;s finest independent fashion talent.
            </p>
          </div>
          <div className={styles.brandGrid}>
            {localBrands.map((brand) => (
              <Link key={brand.id} href={`/brands/${brand.slug}`} className={`${styles.brandCard} ${styles.localCard}`} id={`brand-card-${brand.slug}`}>
                <div className={`${styles.brandInitials} ${styles.localInitials}`}>{brand.name.substring(0, 2).toUpperCase()}</div>
                <div className={styles.brandInfo}>
                  <h3 className={styles.brandName}>{brand.name}</h3>
                  <p className={styles.brandBio}>{brand.shortBio}</p>
                  {brand.instagram && (
                    <p className={styles.brandInstagram}>{brand.instagram}</p>
                  )}
                </div>
                <div className={styles.brandArrow}>→</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
