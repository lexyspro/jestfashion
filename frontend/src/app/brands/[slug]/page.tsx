import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getBrandBySlug, getProductsByBrand } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  return {
    title: brand?.name ?? 'Brand',
    description: brand?.shortBio,
  };
}

export default async function BrandPage({ params }: PageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', textAlign: 'center', padding: 'var(--space-10)' }}>
        <h1 className="heading-1">Brand not found</h1>
        <Link href="/brands" className="btn btn--outline" style={{ marginTop: 'var(--space-6)' }}>Back to Brands</Link>
      </div>
    );
  }

  const products = getProductsByBrand(slug);

  return (
    <div>
      {/* Header */}
      <div className={`${styles.brandHeader} ${brand.isLocalDesigner ? styles.localHeader : ''}`}>
        <div className="container">
          <Link href="/brands" className={styles.backLink}>← All Brands</Link>
          <div className={styles.brandHero}>
            <div className={styles.brandLogo}>
              {brand.name.substring(0, 2).toUpperCase()}
            </div>
            <div>
              {brand.isLocalDesigner && (
                <p className="section-label" style={{ color: brand.isLocalDesigner ? 'var(--color-accent)' : 'rgba(201,169,110,0.8)', marginBottom: 'var(--space-2)' }}>
                  🇬🇭 Local Designer
                </p>
              )}
              <h1 className={`heading-1 ${styles.brandTitle}`}>{brand.name}</h1>
              <p className={styles.brandBio}>{brand.shortBio}</p>
              <div className={styles.brandLinks}>
                {brand.website && (
                  <a href={brand.website} target="_blank" rel="noopener noreferrer" className={styles.brandLink}>
                    Website ↗
                  </a>
                )}
                {brand.instagram && (
                  <a href={`https://instagram.com/${brand.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className={styles.brandLink}>
                    {brand.instagram} ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <section className="section container" aria-label={`${brand.name} products`}>
        <div className="section-header">
          <span className="section-label">{brand.name}</span>
          <h2 className="heading-2" style={{ marginTop: 'var(--space-3)' }}>
            {products.length > 0 ? `${products.length} Piece${products.length !== 1 ? 's' : ''}` : 'No Products Yet'}
          </h2>
        </div>
        {products.length > 0 ? (
          <div className="product-grid product-grid--4">
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 'var(--space-16)', color: 'var(--color-text-muted)' }}>
            <p>Products from {brand.name} are coming soon.</p>
          </div>
        )}
      </section>
    </div>
  );
}
