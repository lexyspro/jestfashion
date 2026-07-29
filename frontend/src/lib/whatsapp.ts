import { Cart, CartItem } from './types';
import { WHATSAPP_NUMBER } from './data';

export function generateOrderReference(): string {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `JF-${ts}-${rand}`;
}

export function formatOrderSummary(cart: Cart, reference: string): string {
  const lines = cart.items.map((item: CartItem) => {
    const name = `${item.product.brand} — ${item.product.name}`;
    const variant = `Size: ${item.size} | Colour: ${item.color}`;
    const unitPrice = item.product.isOnPromotion && item.product.price
      ? item.product.price
      : item.product.price;
    const lineTotal = (unitPrice * item.quantity).toFixed(2);
    return `• ${name}\n  ${variant}\n  Qty: ${item.quantity} × $${unitPrice.toFixed(2)} = $${lineTotal}`;
  });

  const summary = [
    `🛍️ *JEST FASHION — Order Request*`,
    `Reference: ${reference}`,
    ``,
    ...lines,
    ``,
    `──────────────────`,
    `*Subtotal: $${cart.subtotal.toFixed(2)}*`,
    ``,
    `Please confirm availability and share payment details. Thank you!`,
  ].join('\n');

  return summary;
}

export function buildWhatsAppLink(cart: Cart, reference: string): string {
  const message = formatOrderSummary(cart, reference);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
