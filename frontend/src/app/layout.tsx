import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

export const metadata: Metadata = {
  title: {
    default: 'Jest Fashion — Luxury & Local Designers',
    template: '%s | Jest Fashion',
  },
  description:
    'Shop luxury labels and local Ghanaian designers — Louis Vuitton, Gucci, Nike, and more. Order via WhatsApp. All genders, all styles.',
  keywords: ['fashion', 'Ghana', 'luxury', 'Louis Vuitton', 'Gucci', 'Nike', 'local designers', 'kente', 'clothing'],
  openGraph: {
    siteName: 'Jest Fashion',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main style={{ paddingTop: 'var(--navbar-height)' }}>
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
