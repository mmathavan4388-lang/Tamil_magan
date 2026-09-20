# KABERIAL PATTASU KADAI

Modern, mobile-first fireworks catalog & ordering website for KABERIAL PATTASU KADAI (Sivakasi - Thayilpatti).

## Features

- Browse 120+ fireworks products across 16 categories
- Search by English name, Tamil name, or category
- Sort by price, discount, or name
- MRP (strikethrough, red) vs Offer Price (bold, green) with auto-calculated discount %
- Quantity controls, cart drawer, live cart badge
- One-tap order via WhatsApp with an auto-formatted order message
- Fully responsive: 2 columns on mobile, 3 on tablet, 4 on desktop
- Fixed bottom navigation on mobile (Home / Categories / Search / Cart / WhatsApp)

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Editing product data

All product data lives in one place: `src/data/products.js`. Each entry:

```js
{
  id: 29,
  category: 'Bombs',
  name: 'Digital Bomb',
  tamilName: 'டிஜிட்டல் பாம்',
  mrp: 2200,
  offerPrice: 220,
  packing: '1 BOX',
  image: '/images/digital-bomb.jpg',
}
```

`mrp` is always the first (original) price, `offerPrice` is the actual
selling price. Discount % is calculated automatically — never hardcode it.

Shop details (name, address, phone numbers) live in `src/data/shop.js`.

## Adding product photos

Drop images into `public/images/` using the filename referenced in each
product's `image` field. Missing images fall back to a placeholder
automatically — see `public/images/README.md`.
