'use client';

import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './page.module.css';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleWhatsApp() {
    const text = `Hi Jest Fashion! My name is ${name || '[Your Name]'}.\n\n${message || '[Your message]'}`;
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(link, '_blank');
    setSent(true);
  }

  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="container">
          <p className="section-label">Get in touch</p>
          <h1 className="heading-1" style={{ marginTop: 'var(--space-2)' }}>Contact Us</h1>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
            Questions about an order, a product, or just want to say hi? We&apos;re on WhatsApp.
          </p>
        </div>
      </div>

      <div className={`container ${styles.layout}`}>
        {/* Contact info */}
        <div className={styles.infoCol}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
            <div>
              <h3 className={styles.infoTitle}>WhatsApp</h3>
              <p className={styles.infoText}>Our primary channel — fastest response.</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoLink}
                id="contact-whatsapp-direct"
              >
                Chat with us →
              </a>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </div>
            <div>
              <h3 className={styles.infoTitle}>Instagram</h3>
              <p className={styles.infoText}>Follow us for new arrivals, style inspo, and local designer features.</p>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.infoLink} id="contact-instagram">
                @jestfashiongh →
              </a>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <h3 className={styles.infoTitle}>Location</h3>
              <p className={styles.infoText}>Based in Accra, Ghana. Serving nationwide.</p>
            </div>
          </div>

          <div className={styles.hours}>
            <h3 className={styles.hoursTitle}>Response Hours</h3>
            <div className={styles.hoursGrid}>
              <span>Monday – Saturday</span><span>8:00 AM – 8:00 PM</span>
              <span>Sunday</span><span>10:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>

        {/* Message form */}
        <div className={styles.formCol}>
          <div className={styles.formCard}>
            {sent ? (
              <div className={styles.sentState}>
                <div className={styles.sentIcon}>✓</div>
                <h3 className="heading-2">Message sent!</h3>
                <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-3)' }}>
                  Your WhatsApp is now open with the message pre-filled. We&apos;ll reply as soon as possible.
                </p>
                <button className="btn btn--outline" onClick={() => setSent(false)} style={{ marginTop: 'var(--space-6)' }}>
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h2 className={styles.formTitle}>Send a Message</h2>
                <p className={styles.formSub}>
                  Fill in your details below — we&apos;ll open WhatsApp with everything pre-filled.
                </p>
                <div className={styles.formFields}>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-name" className={styles.fieldLabel}>Your Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      className="input"
                      placeholder="Ama Owusu"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-message" className={styles.fieldLabel}>Message</label>
                    <textarea
                      id="contact-message"
                      className={`input ${styles.textarea}`}
                      placeholder="I have a question about..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button
                    className={`btn btn--whatsapp ${styles.sendBtn}`}
                    onClick={handleWhatsApp}
                    id="contact-send-whatsapp"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    Open WhatsApp
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
