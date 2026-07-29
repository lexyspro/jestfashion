'use client';

import React, { useState, useMemo } from 'react';
import { products, brands } from '@/lib/data';
import { ProductCategory, Gender } from '@/lib/types';
import ProductCard from '@/components/ui/ProductCard';
import styles from './page.module.css';

const CATEGORIES: { value: ProductCategory | ''; label: string }[] = [
  { value: '', label: 'All' },
  { value: 'tops', label: 'Tops' },
  { value: 'bottoms', label: 'Bottoms' },
  { value: 'dresses', label: 'Dresses' },
  { value: 'outerwear', label: 'Outerwear' },
  { value: 'footwear', label: 'Footwear' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'bags', label: 'Bags' },
  { value: 'watches', label: 'Watches' },
];

const GENDERS: { value: Gender | ''; label: string }[] = [
  { value: '', label: 'All' },
  { value: 'women', label: 'Women' },
  { value: 'men', label: 'Men' },
  { value: 'kids', label: 'Kids' },
  { value: 'unisex', label: 'Unisex' },
];

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A–Z' },
];

export default function ShopPage() {
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState<Gender | ''>('');
  const [category, setCategory] = useState<ProductCategory | ''>('');
  const [brand, setBrand] = useState('');
  const [onPromo, setOnPromo] = useState(false);
  const [localOnly, setLocalOnly] = useState(false);
  const [sort, setSort] = useState('newest');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.description.toLowerCase().includes(q),
      );
    }
    if (gender) list = list.filter((p) => p.gender.includes(gender as Gender));
    if (category) list = list.filter((p) => p.category === category);
    if (brand) list = list.filter((p) => p.brandSlug === brand);
    if (onPromo) list = list.filter((p) => p.isOnPromotion);
    if (localOnly) list = list.filter((p) => p.isLocalDesigner);

    switch (sort) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'name': list.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'newest': list.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0)); break;
    }
    return list;
  }, [search, gender, category, brand, onPromo, localOnly, sort]);

  function clearAll() {
    setSearch('');
    setGender('');
    setCategory('');
    setBrand('');
    setOnPromo(false);
    setLocalOnly(false);
    setSort('newest');
  }

  const hasFilters = search || gender || category || brand || onPromo || localOnly;

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className="container">
          <p className="section-label">Collection</p>
          <h1 className="heading-1" style={{ marginTop: 'var(--space-2)' }}>All Products</h1>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          </p>
        </div>
      </div>

      <div className={`container ${styles.layout}`}>
        {/* Sidebar Filters — Desktop */}
        <aside className={styles.sidebar}>
          <div className={styles.filterSection}>
            <p className={styles.filterLabel}>Search</p>
            <input
              type="search"
              className="input"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search products"
              id="shop-search"
            />
          </div>

          <div className={styles.filterSection}>
            <p className={styles.filterLabel}>Gender</p>
            <div className={styles.pillGroup}>
              {GENDERS.map((g) => (
                <button
                  key={g.value}
                  className={`${styles.pill} ${gender === g.value ? styles.pillActive : ''}`}
                  onClick={() => setGender(g.value as Gender | '')}
                  id={`filter-gender-${g.value || 'all'}`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <p className={styles.filterLabel}>Category</p>
            <div className={styles.pillGroup}>
              {CATEGORIES.map((c) => (
                <button
                  key={c.value}
                  className={`${styles.pill} ${category === c.value ? styles.pillActive : ''}`}
                  onClick={() => setCategory(c.value as ProductCategory | '')}
                  id={`filter-cat-${c.value || 'all'}`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <p className={styles.filterLabel}>Brand</p>
            <select
              className={`input select`}
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              aria-label="Filter by brand"
              id="filter-brand"
            >
              <option value="">All Brands</option>
              {brands.map((b) => (
                <option key={b.id} value={b.slug}>{b.name}</option>
              ))}
            </select>
          </div>

          <div className={styles.filterSection}>
            <p className={styles.filterLabel}>Special</p>
            <label className={styles.checkLabel} id="filter-promo-label">
              <input
                type="checkbox"
                checked={onPromo}
                onChange={(e) => setOnPromo(e.target.checked)}
                id="filter-promo"
              />
              On Promotion
            </label>
            <label className={styles.checkLabel} id="filter-local-label">
              <input
                type="checkbox"
                checked={localOnly}
                onChange={(e) => setLocalOnly(e.target.checked)}
                id="filter-local"
              />
              🇬🇭 Local Designers Only
            </label>
          </div>

          {hasFilters && (
            <button className="btn btn--ghost" onClick={clearAll} id="clear-filters-btn">
              Clear All Filters
            </button>
          )}
        </aside>

        {/* Main Grid */}
        <div className={styles.main}>
          {/* Toolbar */}
          <div className={styles.toolbar}>
            <button
              className={`btn btn--ghost ${styles.mobileFilterToggle}`}
              onClick={() => setFiltersOpen(!filtersOpen)}
              id="mobile-filter-toggle"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="12" y1="18" x2="20" y2="18"/>
              </svg>
              Filters
            </button>
            <select
              className={`input select ${styles.sortSelect}`}
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
              id="shop-sort"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Mobile Filters Drawer */}
          {filtersOpen && (
            <div className={styles.mobileFilters}>
              <div className={styles.mobileFiltersHeader}>
                <h3>Filters</h3>
                <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">✕</button>
              </div>
              {/* Repeat filters for mobile */}
              <select
                className="input select"
                value={gender}
                onChange={(e) => setGender(e.target.value as Gender | '')}
              >
                {GENDERS.map((g) => <option key={g.value} value={g.value}>{g.label}</option>)}
              </select>
              <select
                className="input select"
                value={category}
                onChange={(e) => setCategory(e.target.value as ProductCategory | '')}
              >
                {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label || 'All Categories'}</option>)}
              </select>
              <select
                className="input select"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="">All Brands</option>
                {brands.map((b) => <option key={b.id} value={b.slug}>{b.name}</option>)}
              </select>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className={styles.noResults}>
              <p className={styles.noResultsTitle}>No products found</p>
              <p className={styles.noResultsSub}>Try adjusting your filters.</p>
              <button className="btn btn--outline" onClick={clearAll}>Clear Filters</button>
            </div>
          ) : (
            <div className="product-grid product-grid--4">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
