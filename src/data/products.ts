import type { Product } from "../types";
import { placeholderImage } from "../lib/placeholder";
import { categories } from "./categories";
import { suppliers } from "./suppliers";

interface RawProduct {
  id: string;
  name: string;
  categorySlug: string;
  supplierId: string;
  moq: string;
  availableQty: string;
  location: string;
  packaging: string;
  description: string;
  specs: { label: string; value: string }[];
  isNew?: boolean;
  featured?: boolean;
  priceRange?: string;
}

const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? slug;

const raw: RawProduct[] = [
  {
    id: "p-1",
    name: "Premium Flower Pot — Wholesale Pack",
    categorySlug: "flower-pots",
    supplierId: "sup-1",
    moq: "100 Boxes",
    availableQty: "12,000 Boxes / month",
    location: "Sivakasi, Tamil Nadu",
    packaging: "10 pots per box, 50 boxes per carton",
    priceRange: "₹180 – ₹240 / box (indicative)",
    description: "A best-selling colour flower pot with a long burn duration, supplied in bulk cartons suitable for distributor and retail resale.",
    specs: [
      { label: "Burn Duration", value: "35 – 45 seconds" },
      { label: "Effect", value: "Multi-colour fountain" },
      { label: "Pack Size", value: "10 pcs / box" },
      { label: "Storage", value: "Licensed dry storage required" },
    ],
    featured: true,
  },
  {
    id: "p-2",
    name: "Deluxe Ground Chakkar Combo",
    categorySlug: "ground-chakkars",
    supplierId: "sup-2",
    moq: "150 Boxes",
    availableQty: "8,500 Boxes / month",
    location: "Sivakasi, Tamil Nadu",
    packaging: "5 chakkars per box, 40 boxes per carton",
    priceRange: "₹95 – ₹130 / box (indicative)",
    description: "Spinning ground wheel with multi-colour spark effect, a consistent mover for regional festival stock.",
    specs: [
      { label: "Spin Duration", value: "40 seconds" },
      { label: "Effect", value: "Colour spark wheel" },
      { label: "Pack Size", value: "5 pcs / box" },
    ],
    featured: true,
  },
  {
    id: "p-3",
    name: "10-inch Electric Sparklers (Wholesale Carton)",
    categorySlug: "sparklers",
    supplierId: "sup-1",
    moq: "200 Boxes",
    availableQty: "20,000 Boxes / month",
    location: "Sivakasi, Tamil Nadu",
    packaging: "20 sparklers per box, 100 boxes per carton",
    priceRange: "₹45 – ₹65 / box (indicative)",
    description: "Standard 10-inch electric sparklers, a family-pack favourite with consistent bulk availability.",
    specs: [
      { label: "Length", value: "10 inches" },
      { label: "Burn Time", value: "≈ 60 seconds" },
      { label: "Pack Size", value: "20 pcs / box" },
    ],
    featured: true,
    isNew: false,
  },
  {
    id: "p-4",
    name: "Sky Shot Rocket Pack — 25 Shot",
    categorySlug: "rockets",
    supplierId: "sup-4",
    moq: "80 Boxes",
    availableQty: "5,200 Boxes / month",
    location: "Virudhunagar, Tamil Nadu",
    packaging: "1 unit per box, 20 boxes per carton",
    priceRange: "₹950 – ₹1,250 / box (indicative)",
    description: "Aerial rocket pack with sound and colour break effects, sold strictly to licensed wholesale buyers.",
    specs: [
      { label: "Shots", value: "25" },
      { label: "Effect", value: "Colour break + report" },
      { label: "Compliance", value: "Requires transport permit" },
    ],
    featured: false,
  },
  {
    id: "p-5",
    name: "Colour Fountain — Tall Duration",
    categorySlug: "fountains",
    supplierId: "sup-3",
    moq: "60 Boxes",
    availableQty: "6,800 Boxes / month",
    location: "Sivakasi, Tamil Nadu",
    packaging: "6 pcs per box, 30 boxes per carton",
    priceRange: "₹310 – ₹380 / box (indicative)",
    description: "Tall-format fountain with extended colour-change duration, popular for wedding and function orders.",
    specs: [
      { label: "Height", value: "18 inches" },
      { label: "Burn Duration", value: "60 seconds" },
      { label: "Pack Size", value: "6 pcs / box" },
    ],
    featured: true,
  },
  {
    id: "p-6",
    name: "Corporate Gift Box — Assorted 24 pc",
    categorySlug: "gift-boxes",
    supplierId: "sup-1",
    moq: "40 Boxes",
    availableQty: "3,000 Boxes / month",
    location: "Sivakasi, Tamil Nadu",
    packaging: "24 assorted items per gift box",
    priceRange: "₹650 – ₹820 / box (indicative)",
    description: "Curated assortment box combining sparklers, small fountains and flower pots — designed for corporate and retail gifting.",
    specs: [
      { label: "Items Included", value: "24 assorted pieces" },
      { label: "Packaging", value: "Rigid gift box with sleeve" },
    ],
    isNew: true,
  },
  {
    id: "p-7",
    name: "Festival Family Pack — 100 pc",
    categorySlug: "family-packs",
    supplierId: "sup-4",
    moq: "50 Boxes",
    availableQty: "9,000 Boxes / month",
    location: "Virudhunagar, Tamil Nadu",
    packaging: "100 mixed items per pack",
    priceRange: "₹1,450 – ₹1,800 / pack (indicative)",
    description: "Bundled household pack mixing top-selling items across categories, priced for distributor resale.",
    specs: [
      { label: "Items Included", value: "100 mixed pieces" },
      { label: "Categories Covered", value: "Sparklers, pots, chakkars, fountains" },
    ],
    featured: true,
  },
  {
    id: "p-8",
    name: "Wedding Celebration Combo",
    categorySlug: "celebration-combos",
    supplierId: "sup-3",
    moq: "30 Boxes",
    availableQty: "2,400 Boxes / month",
    location: "Sivakasi, Tamil Nadu",
    packaging: "Curated combo, single unit per box",
    priceRange: "₹2,200 – ₹2,900 / box (indicative)",
    description: "A premium combo of fountains, aerial shots and ground spinners curated for wedding-scale functions.",
    specs: [
      { label: "Occasion", value: "Weddings & large functions" },
      { label: "Item Count", value: "45 pieces" },
    ],
    isNew: true,
  },
  {
    id: "p-9",
    name: "Distributor Wholesale Carton — Mixed SKU",
    categorySlug: "wholesale-packs",
    supplierId: "sup-6",
    moq: "300 Boxes",
    availableQty: "18,000 Boxes / month",
    location: "Sattur, Tamil Nadu",
    packaging: "Full carton, mixed SKU by category",
    priceRange: "Request quote for volume pricing",
    description: "Large-volume wholesale carton with a mixed SKU assortment, built for distributors and regional retailers.",
    specs: [
      { label: "Carton Type", value: "Mixed SKU" },
      { label: "Ideal For", value: "Distributors, regional retail chains" },
    ],
    featured: true,
  },
  {
    id: "p-10",
    name: "New Season Sparkle Fountain",
    categorySlug: "new-products",
    supplierId: "sup-6",
    moq: "70 Boxes",
    availableQty: "4,100 Boxes / month",
    location: "Sattur, Tamil Nadu",
    packaging: "8 pcs per box, 25 boxes per carton",
    priceRange: "₹280 – ₹340 / box (indicative)",
    description: "Newly launched fountain variant with a layered colour-change sequence, freshly listed by a verified manufacturer.",
    specs: [
      { label: "Burn Duration", value: "50 seconds" },
      { label: "Effect", value: "Layered colour change" },
    ],
    isNew: true,
  },
  {
    id: "p-11",
    name: "Multi-Colour Ground Spinner Set",
    categorySlug: "ground-chakkars",
    supplierId: "sup-6",
    moq: "100 Boxes",
    availableQty: "7,200 Boxes / month",
    location: "Sattur, Tamil Nadu",
    packaging: "8 pcs per box, 30 boxes per carton",
    priceRange: "₹110 – ₹150 / box (indicative)",
    description: "A dependable multi-colour spinner set with strong repeat demand across regional wholesale channels.",
    specs: [
      { label: "Spin Duration", value: "45 seconds" },
      { label: "Pack Size", value: "8 pcs / box" },
    ],
  },
  {
    id: "p-12",
    name: "Classic Flower Pot — Retail Ready Pack",
    categorySlug: "flower-pots",
    supplierId: "sup-2",
    moq: "120 Boxes",
    availableQty: "10,500 Boxes / month",
    location: "Sivakasi, Tamil Nadu",
    packaging: "12 pots per box, 45 boxes per carton",
    priceRange: "₹160 – ₹210 / box (indicative)",
    description: "Entry-level flower pot packaged for retail-ready resale, backed by consistent monthly production capacity.",
    specs: [
      { label: "Burn Duration", value: "30 seconds" },
      { label: "Pack Size", value: "12 pcs / box" },
    ],
  },
];

export const products: Product[] = raw.map((p) => {
  const supplier = suppliers.find((s) => s.id === p.supplierId);
  const slug = p.id;
  const image = placeholderImage(p.id, p.name);
  return {
    id: p.id,
    name: p.name,
    slug,
    category: categoryName(p.categorySlug),
    categorySlug: p.categorySlug,
    supplierId: p.supplierId,
    images: [image, placeholderImage(p.id + "-2", p.name), placeholderImage(p.id + "-3", p.name)],
    moq: p.moq,
    priceLabel: "Request Wholesale Quote",
    priceRange: p.priceRange,
    availableQty: p.availableQty,
    location: p.location,
    specs: p.specs,
    packaging: p.packaging,
    description: p.description,
    isNew: p.isNew,
    featured: p.featured,
    supplierName: supplier?.name,
  };
});

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.categorySlug === slug);
}

export function getProductsBySupplier(supplierId: string) {
  return products.filter((p) => p.supplierId === supplierId);
}
