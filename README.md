# KABERIAL PATTASU KADAI

Premium, mobile-first fireworks e-commerce catalogue website for **KABERIAL PATTASU KADAI**, Sivakasi.
Built with React, TypeScript, Tailwind CSS v4 and React Router.

## 1. Project Structure

```
src/
  components/        Reusable UI components
    Header.tsx, AnnouncementBar.tsx, Footer.tsx, MobileBottomNav.tsx
    CategoryCard.tsx, ProductCard.tsx, ProductGrid.tsx, ProductImage.tsx
    SearchBar.tsx, FilterBar.tsx, CartDrawer.tsx, WhatsAppButton.tsx
    ContactSection.tsx, WhyChooseUs.tsx, SafetyNotice.tsx, Layout.tsx
  pages/              Route-level pages
    Home.tsx, Products.tsx, ProductDetail.tsx, Categories.tsx,
    GiftBoxes.tsx, Cart.tsx, Contact.tsx, Admin.tsx, NotFound.tsx
  context/            Global state (React Context)
    ProductsContext.tsx  — product catalogue + admin CRUD, persisted to localStorage
    CartContext.tsx      — shopping cart, persisted to localStorage
  data/
    products.ts   — all 124 catalogue products (source of truth)
    categories.ts — the 15 product categories (English + Tamil)
  lib/
    constants.ts  — business name, phone numbers, address
    format.ts     — INR currency formatting
    whatsapp.ts   — WhatsApp order message builder
  types/index.ts  — Product, Category, CartItem types
```

Products **44, 45, 59 and 60 are intentionally skipped** — not present anywhere in `data/products.ts`,
per the source catalogue.

## 2. Setup Instructions

Requirements: Node.js 20+.

```bash
npm install
npm run dev       # starts local dev server (default http://localhost:5173)
npm run build     # type-checks and builds production bundle to dist/
npm run preview   # preview the production build locally
```

## 3. How to Add / Change Products

All product data lives in `src/data/products.ts` as a compact array of tuples:

```ts
[id, "English Name", "தமிழ் பெயர்", "category-slug", price, "unit", netRate],
```

- Add a new row to the `raw` array — a slug and `Product` object are generated automatically.
- Category slugs must match one defined in `src/data/categories.ts`.
- To feature a product on the homepage, add its `id` to `bestSellerIds` or `newArrivalIds` near the
  bottom of `products.ts`.

**You do not need to touch any component code to add products** — the catalogue, search, filters and
cart all read from this single array.

Alternatively, use the **Admin Dashboard** (see below) to add/edit/delete products at runtime without
touching code — changes are saved to the browser's `localStorage` and override the file-based catalogue.

## 4. How to Upload Product Images

By default every product shows a clean, category-themed placeholder graphic (`ProductImage.tsx`) so no
product ever shows an unrelated/broken image.

To add a real photo for a product:

1. Go to `/admin` and log in (see below).
2. Find the product row and click **Upload** under its thumbnail.
3. Choose an image file — it is stored as a data URL in `localStorage` and immediately replaces the
   placeholder across the whole site.
4. Click **Remove** to revert to the placeholder.

For a permanent, production setup, replace this with real file uploads to a storage bucket (S3,
Cloudinary, Supabase Storage, etc.) — see section 9.

## 5. How to Change Prices

- **Quickly for one product:** open `/admin`, edit the **Price** or **Net Rate** cell directly in the
  table — it saves instantly.
- **In source code:** edit the price/rate values in `src/data/products.ts` and rebuild/redeploy.

## 6. How to Change WhatsApp Numbers

Edit `src/lib/constants.ts`:

```ts
export const WHATSAPP_NUMBERS = {
  primary: "919500356197",   // used for "Order on WhatsApp" / cart checkout
  secondary: "917604965753", // shown as an alternate contact number
};

export const DISPLAY_PHONE = {
  primary: "+91 95003 56197",
  secondary: "+91 76049 65753",
};
```

Numbers must be in international format without `+` or spaces for the `wa.me` links (`WHATSAPP_NUMBERS`),
and the human-readable format for anything displayed on screen (`DISPLAY_PHONE`).

## 7. Admin Dashboard

Visit `/admin` (not linked from the public navigation). Demo password: **`kaberial2024`**

⚠️ This is a client-side demo login suitable for a small single-operator shop. For real deployment,
replace it with proper authentication (see section 9) before sharing the link.

From the dashboard you can:
- Add / edit / delete products
- Change price, net rate, English name, Tamil name, category, unit
- Upload or remove a product image
- Mark a product as **New** or **Best Seller**
- Enable / disable a product (hidden from the public site when disabled)
- Manage gift boxes (filter by the "Gift Boxes" category)

All changes are saved to `localStorage` under the `kaberial-pattasu-kadai` domain, so they persist
across reloads on the same browser/device.

## 8. How to Deploy

This is a static Vite build — deploy the `dist/` folder to any static host:

**Vercel**
```bash
npm i -g vercel
vercel --prod
```

**Netlify**
```bash
npm run build
# drag-and-drop the dist/ folder into Netlify, or:
netlify deploy --prod --dir=dist
```

**Any static host (GitHub Pages, Cloudflare Pages, S3 + CloudFront, etc.)**
```bash
npm run build
# upload the contents of dist/
```

Since this app uses client-side routing (`react-router-dom`), configure your host to redirect all
unknown paths to `index.html` (SPA fallback) — e.g. a `_redirects` file for Netlify (`/* /index.html 200`)
or Vercel's automatic SPA handling.

## 9. Connecting a Real Database Later

Currently, all product and cart data lives in the browser (`data/products.ts` + `localStorage`). To move
to a real backend:

1. Pick a backend: Supabase, Firebase, or a custom Node/Express + PostgreSQL/MySQL API.
2. Replace `src/context/ProductsContext.tsx`'s `loadProducts`/CRUD functions with API calls
   (`fetch`/`axios`) to your backend instead of `localStorage`.
3. Move product images to real file storage (S3, Cloudinary, Supabase Storage) and store the returned
   URL in the `image` field instead of a data URL.
4. Add real authentication (e.g. Supabase Auth, Firebase Auth, or NextAuth if migrating to Next.js) to
   protect `/admin` instead of the demo password.
5. Optionally persist the cart server-side per logged-in customer instead of `localStorage`.

## 10. Connecting a Real Payment Gateway Later

The checkout flow currently sends the order as a formatted WhatsApp message — no payment is collected
online, which matches how most Sivakasi fireworks retailers operate today. To add online payments:

1. Choose a gateway available in India: Razorpay, PayU, Cashfree, or Stripe (international).
2. On checkout, create an order on your backend (never handle raw card details client-side) and get a
   payment session/order ID from the gateway's server SDK.
3. Add the gateway's checkout widget/SDK to `src/pages/Cart.tsx`, replacing or supplementing the
   "Order via WhatsApp" button with a "Pay Now" button that opens the gateway's payment UI.
4. Verify payment success via a backend webhook before marking the order as paid/confirmed.
5. Continue sending the WhatsApp order summary as a confirmation, or replace it with an order-confirmation
   email/SMS.

## Legal & Safety Notice

This website is a product catalogue and ordering-assistance tool. It does not claim that fireworks are
legal to purchase, ship, or use in every jurisdiction — buyers are responsible for complying with local
laws, age restrictions, and safety regulations. See the "Safety & Legal Information" section on the
Home and Contact pages.
