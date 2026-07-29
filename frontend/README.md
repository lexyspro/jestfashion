# Jest Fashion Platform

Welcome to the Jest Fashion storefront! This is a modern, headless e-commerce platform built with Next.js and Sanity CMS. It features a unique WhatsApp-based checkout flow designed to streamline orders and manual payment confirmation.

## 🚀 Quick Start (Local Development)

To run the platform locally on your machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **View the site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management (Sanity CMS)

Your entire catalog, brands, and homepage sections are managed via Sanity. The Studio dashboard is embedded directly into the website.

- **Access the Studio:** Navigate to `/studio` in your browser (e.g., `http://localhost:3000/studio`).
- **Initial Setup:** You need to create a Sanity project to host your live data.
  1. Run `npx sanity init` in the terminal.
  2. Follow the prompts to create an account and project.
  3. Copy your new `projectId` into a `.env.local` file:
     ```env
     NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
     NEXT_PUBLIC_SANITY_DATASET="production"
     ```

*Note: Until the Sanity API keys are provided, the site will safely fall back to using static mock data.*

## 💬 WhatsApp Order Flow

Instead of a traditional payment gateway, Jest Fashion uses a WhatsApp handoff:
1. Customers add items to their cart (sizes, colors, and quantities).
2. Upon clicking "Send Order via WhatsApp", the site generates a formatted text summary including a unique Order Reference.
3. The customer is redirected to the official store WhatsApp (`wa.me`) with the message pre-filled.
4. Staff can then manually confirm stock availability and send payment details (Mobile Money, Bank Transfer, etc.).

## 🌍 Deployment

The easiest and recommended way to deploy this platform is via [Vercel](https://vercel.com/):

1. Push this repository to GitHub.
2. Log into Vercel and import the repository.
3. Add your Environment Variables (`NEXT_PUBLIC_SANITY_PROJECT_ID`, etc.) in the Vercel project settings.
4. Click **Deploy**. Vercel will automatically build the Next.js app and serve it globally on their Edge Network.
