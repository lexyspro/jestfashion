import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const shopLinks = [
  { href: '/shop?gender=women', label: 'Women' },
  { href: '/shop?gender=men', label: 'Men' },
  { href: '/shop?gender=kids', label: 'Kids' },
  { href: '/shop?category=accessories', label: 'Accessories' },
  { href: '/shop?isOnPromotion=true', label: 'Sale' },
];

const brandLinks = [
  { href: '/brands/louis-vuitton', label: 'Louis Vuitton' },
  { href: '/brands/gucci', label: 'Gucci' },
  { href: '/brands/nike', label: 'Nike' },
  { href: '/brands/adidas', label: 'Adidas' },
  { href: '/local-designers', label: 'Local Designers' },
];

const infoLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/about#shipping', label: 'Shipping & Returns' },
  { href: '/about#faq', label: 'FAQ' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand column */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>JEST</span>
            <span className={styles.logoAccent}>&nbsp;FASHION</span>
          </Link>
          <p className={styles.tagline}>
            Multi-brand fashion for every story.<br />
            Luxury labels. Local voices. All genders.
          </p>
          <div className={styles.social}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={styles.socialLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
            </a>
            <a href="https://wa.me/233XXXXXXXXX" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links columns */}
        <div className={styles.linksGrid}>
          <div className={styles.linkCol}>
            <h3 className={styles.linkColTitle}>Shop</h3>
            <ul className={styles.linkList}>
              {shopLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className={styles.link}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className={styles.linkCol}>
            <h3 className={styles.linkColTitle}>Brands</h3>
            <ul className={styles.linkList}>
              {brandLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className={styles.link}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className={styles.linkCol}>
            <h3 className={styles.linkColTitle}>Info</h3>
            <ul className={styles.linkList}>
              {infoLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className={styles.link}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.legal}>
            © {new Date().getFullYear()} Jest Fashion — All rights reserved.
          </p>
          <p className={styles.whatsappNote}>
            Orders via WhatsApp · Payment confirmed manually before dispatch
          </p>
        </div>
      </div>
    </footer>
  );
}
