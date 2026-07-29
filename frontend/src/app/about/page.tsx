import React from 'react';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Jest Fashion — multi-brand fashion for all genders, based in Ghana.',
};

export default function AboutPage() {
  return (
    <div>
      <div className={styles.hero}>
        <div className="container">
          <p className="section-label" style={{ color: 'var(--color-accent)' }}>Our Story</p>
          <h1 className={`display-2 ${styles.heroTitle}`}>Fashion without compromise.</h1>
          <p className={styles.heroSub}>
            Jest Fashion was born from a simple belief: great style shouldn&apos;t be a privilege.
            We carry the world&apos;s most iconic labels and the most exciting emerging Ghanaian designers — side by side, for every body.
          </p>
        </div>
      </div>

      <div className="container section">
        <div className={styles.grid}>
          <div>
            <h2 className="heading-2">Who we are</h2>
            <p className={styles.body} style={{ marginTop: 'var(--space-4)' }}>
              Founded by Madam Jessica Tetteh, Jest Fashion is a multi-brand retailer carrying major international labels — Louis Vuitton, Gucci, Nike, Adidas — alongside a curated roster of Ghana&apos;s finest independent designers. We believe in choice: whether you&apos;re after a Neverfull or a hand-woven kente wrap dress, you should be able to find it in one place, with the same care and attention.
            </p>
            <p className={styles.body} style={{ marginTop: 'var(--space-4)' }}>
              We keep things personal. Orders are confirmed via WhatsApp, payment is arranged directly with our team, and every item is verified before dispatch. It&apos;s old-school trust, with modern convenience.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {[
              { title: 'Authenticity', text: 'Every item we carry is sourced and verified. No fakes, no shortcuts.' },
              { title: 'Inclusivity', text: 'Fashion for all genders, all budgets — from entry luxury to everyday wear.' },
              { title: 'Local Pride', text: 'We actively spotlight and support Ghanaian independent designers.' },
              { title: 'Trust', text: 'Manual order confirmation means a real person checks every purchase.' },
            ].map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <hr className="divider--gold" />
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.howItWorks} id="how-it-works">
          <h2 className="heading-2">How ordering works</h2>
          <div className={styles.steps}>
            {[
              { n: '01', t: 'Browse & Add to Bag', d: 'Shop the full catalog, pick your sizes and colours, and add items to your bag.' },
              { n: '02', t: 'Send via WhatsApp', d: 'Tap "Send Order via WhatsApp" — your full order summary is pre-filled and sent to our official business number.' },
              { n: '03', t: 'We Confirm Stock', d: 'Our team checks availability and replies with confirmation plus payment details (bank transfer, mobile money, or cash on delivery).' },
              { n: '04', t: 'Pay & We Dispatch', d: 'Once payment is received, we pack your order and arrange delivery. Simple.' },
            ].map((s) => (
              <div key={s.n} className={styles.step}>
                <span className={styles.stepNum}>{s.n}</span>
                <div>
                  <h3 className={styles.stepTitle}>{s.t}</h3>
                  <p className={styles.stepDesc}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.shippingSection} id="shipping">
          <h2 className="heading-2">Shipping & Returns</h2>
          <div className={styles.infoGrid} style={{ marginTop: 'var(--space-6)' }}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Delivery</h3>
              <p className={styles.infoText}>Delivery timelines and costs are confirmed per order via WhatsApp, as they depend on your location and the specific items ordered. We work with trusted local couriers.</p>
            </div>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Returns</h3>
              <p className={styles.infoText}>We accept returns within 7 days of delivery for unworn, unaltered items with original tags. Contact us on WhatsApp to initiate a return. Local designer items may have separate policies.</p>
            </div>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Payment Methods</h3>
              <p className={styles.infoText}>Bank transfer, mobile money (MTN MoMo, Vodafone Cash, AirtelTigo Money), and cash on delivery (selected areas). All confirmed case-by-case via WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
