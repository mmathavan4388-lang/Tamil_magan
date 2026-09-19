# KABERIAL PATTASU KADAI

Sivakasi Fireworks Marketplace — Trusted Suppliers, Verified Buyers.

A premium, modular B2B marketplace UI connecting verified Sivakasi fireworks manufacturers with
wholesale/bulk buyers across India. Built as a fully structured marketplace frontend — product
catalogue, supplier network, RFQ system, buyer/supplier/admin dashboards — ready for a backend to
be wired in.

> This is a frontend demo. All listings, suppliers, statistics and dashboard data are
> illustrative placeholder content clearly marked as demo — no backend, authentication or payment
> processing is connected.

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- React Router v7
- lucide-react icons

## Getting Started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run lint      # run oxlint
```

## Project Structure

```
src/
  components/       Reusable UI (ProductCard, SupplierCard, Header, Footer, forms, etc.)
  components/ui/     Design-system primitives (Button, Badge, Table, StatCard, ...)
  layouts/           MainLayout (public site) and DashboardLayout (buyer/supplier/admin)
  pages/             Route-level pages
  pages/buyer/       Buyer dashboard pages
  pages/supplier/    Supplier dashboard pages
  pages/admin/       Admin panel pages
  data/               Mock/demo data (products, suppliers, categories, dashboard records)
  types/             Shared TypeScript interfaces (Product, Supplier, RFQ, Quote, Order, ...)
  config/            Dashboard navigation config
  lib/               Placeholder image generator (deterministic, offline, on-brand)
```

## Key Features

- **Marketplace**: product listings with search/filter/sort, category browsing, product detail
  pages with bulk quantity selector and specs.
- **Supplier network**: verified supplier profiles, business/GST verification badges.
- **RFQ system**: structured Request for Quotation flow with multi-supplier quotation comparison.
- **Dashboards**: modular Buyer, Supplier and Admin dashboards with sidebar navigation, stats,
  tables, messaging UI and settings.
- **Compliance-first**: a dedicated Compliance & Safety page and disclaimers throughout, since
  fireworks are a regulated product category.

## Architecture Notes

The app is intentionally structured so a real backend/database can be connected later without
restructuring the UI:

- `src/data/*.ts` mirrors the shape a real API would return (`Product`, `Supplier`, `RFQRecord`,
  `QuoteRecord`, `OrderRecord`, etc. — see `src/types`). Swapping these for API calls/React Query
  hooks is a drop-in replacement.
- Buyer/Supplier/Admin dashboards, product/supplier cards and the RFQ form are all standalone,
  reusable components — no page-specific one-off logic.
- Revenue model (subscriptions, featured listings, lead fees, commission, ads) and platform
  statistics are designed to be admin-configurable (see `pages/admin/HomepageContent.tsx`).

## Disclaimer

KABERIAL PATTASU KADAI is a marketplace platform concept. Buyers and suppliers using a production
version of this platform would be responsible for complying with all applicable laws, licences,
permits, taxes, transportation rules and safety requirements. See `/compliance` in the app.
