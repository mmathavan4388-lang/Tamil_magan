# KABERIAL PATTASU KADAI — Fireworks Catalogue

A mobile-first fireworks product catalogue built with React + Vite. Purple/pink
table-style catalogue (M.R.P. strike-through, green Our Price, live Qty ×
Price = Total, sticky cart bar, WhatsApp ordering), with English + Tamil
product names, category filtering, and bilingual search.

## Folder structure

```
Tamil_magan/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/products/       ← drop real product photos here
│       └── README.md
└── src/
    ├── main.jsx
    ├── App.jsx                ← wires everything together
    ├── index.css              ← all styling (purple/pink catalogue theme)
    ├── data/
    │   ├── products.js        ← ALL 128 PRODUCTS — edit prices/names here
    │   ├── categories.js      ← category list (English + Tamil, order)
    │   └── shopConfig.js      ← shop name, phone numbers, address
    ├── hooks/
    │   └── useCart.js         ← cart state (qty per product, totals)
    ├── utils/
    │   ├── whatsapp.js        ← ₹ formatting + WhatsApp message builder
    │   └── placeholderImage.js← generates placeholder image if photo missing
    └── components/
        ├── Header.jsx
        ├── SearchBar.jsx
        ├── CategoryFilter.jsx
        ├── ProductTable.jsx
        ├── ProductRow.jsx
        ├── ProductImage.jsx
        ├── QuantityInput.jsx
        ├── Cart.jsx           ← cart drawer (list, qty edit, remove, clear)
        ├── CartSummary.jsx    ← sticky bottom bar
        ├── WhatsAppOrder.jsx  ← quick "chat with us" links
        └── Footer.jsx
```

## Running locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). The site is
mobile-first — use your browser's device toolbar (F12 → toggle device
toolbar) to preview it as a phone, or open it directly on your phone if it's
on the same network (`npm run dev -- --host` to expose it).

To build a production bundle:

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Changing prices, names, or units

Open **`src/data/products.js`**. Every product is one line, e.g.:

```js
p(29, 'bombs', 'Digital Bomb', 'டிஜிட்டல் பாம்', '1 BOX', 2200, 220),
//   id  category    English name     Tamil name      unit   MRP  Our Price
```

- The **6th argument** (`2200`) is the M.R.P./reference price (shown red,
  strike-through).
- The **7th argument** (`220`) is "Our Price" (shown green, bold) — this is
  what quantity × price calculations use.
- To mark a price as not yet available, pass `null` for `price` and add
  `{ needsVerification: true, note: 'Price Update Required' }` as a 7th/8th
  argument — see items #45 and #59 for examples. **Never invent a number.**
- Gift Boxes (#123–128) pass `mrp: null` and `{ netRate: true }`, which
  shows "NET RATE" instead of a strike-through/discount.

Categories are edited separately in **`src/data/categories.js`** (order,
English/Tamil names). The `category` field on each product must match a
category `id` from that file exactly.

## Replacing product images

Real photos go in **`public/images/products/`**, named to match each
product's `image` field in `products.js`:

```
product-001.webp
product-002.webp
...
product-128.webp
```

If a file isn't there yet, the site automatically shows a small generated
placeholder (product number + name) — nothing breaks, and it swaps to the
real photo automatically once you add the file at that exact path.
Recommended: square photos, ≥200×200px, `.webp` for small file size (other
formats work too, just update the extension in `products.js`).

## Changing the WhatsApp numbers / shop details

Open **`src/data/shopConfig.js`**:

```js
export const SHOP = {
  name: 'KABERIAL PATTASU KADAI',
  tagline: 'Quality Fireworks | Sivakasi',
  phones: ['+91 9500356197', '+91 76049 65753'],
  whatsappNumber: '919500356197', // used by the "Order via WhatsApp" button
  address: ['2/369, Sattur Main Road,', 'Thayilpatti,', 'Sivakasi - 626 128'],
}
```

`whatsappNumber` must be digits only, with country code, no `+` or spaces.
The two quick "Chat" links near the search bar are set in
`src/components/WhatsAppOrder.jsx` if you want to change those independently.

## How ordering works

1. Customer sets quantities on any product rows (Qty × Our Price = Total,
   updates instantly, no page reload).
2. A sticky bar at the bottom shows live item count + grand total, and opens
   the cart drawer.
3. In the cart drawer, customer can adjust quantities, remove items, or clear
   the cart.
4. "Order via WhatsApp" opens WhatsApp (web or app) with a pre-filled message
   listing every product, quantity, unit price and line total, plus the
   grand total — the customer reviews and sends it themselves. No order is
   ever placed automatically.

## Deploying online

Any static host works since this builds to plain HTML/CSS/JS:

**Vercel**
```bash
npm i -g vercel
vercel --prod
```
(Framework preset: Vite — it auto-detects `npm run build` → `dist/`.)

**Netlify**
```bash
npm run build
# Drag-and-drop the dist/ folder at app.netlify.com/drop
# or: npx netlify-cli deploy --prod --dir=dist
```

**GitHub Pages**
```bash
npm run build
# push the contents of dist/ to a `gh-pages` branch, or use the
# `gh-pages` npm package / a GitHub Actions workflow that runs
# `npm run build` and publishes `dist/`.
```

Any of these work — just make sure the build command is `npm run build` and
the output directory is `dist`.

## Notes on pricing display

- The **first price** in the source product list is shown as the M.R.P./
  reference price only — it is **not** presented as the manufacturer's
  original market price.
- The **second price** is "Our Price", the actual selling price used for all
  calculations.
- Discount % is only shown when both prices are known; Gift Boxes show
  "NET RATE" instead since no MRP was supplied for them.
- Products with genuinely missing price data show "Price Update Required" and
  cannot be added to the cart until a real price is entered in
  `products.js`.

---

Products are subject to availability and applicable local laws and
regulations. Please follow all applicable fireworks safety instructions and
purchase/use only where legally permitted.
