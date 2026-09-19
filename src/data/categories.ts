import type { Category } from "../types";
import { placeholderImage } from "../lib/placeholder";

const raw: Omit<Category, "image">[] = [
  { id: "cat-1", name: "Flower Pots", slug: "flower-pots", description: "Ground-based colour fountains, a festive staple for every celebration.", productCount: 186 },
  { id: "cat-2", name: "Ground Chakkars", slug: "ground-chakkars", description: "Spinning ground wheels available in single and multi-colour variants.", productCount: 124 },
  { id: "cat-3", name: "Sparklers", slug: "sparklers", description: "Electric and colour sparklers in multiple lengths for family use.", productCount: 210 },
  { id: "cat-4", name: "Rockets", slug: "rockets", description: "Aerial rockets with sound and colour effects, sold in wholesale lots.", productCount: 97 },
  { id: "cat-5", name: "Fountains", slug: "fountains", description: "Tall and short duration fountains with vivid colour changes.", productCount: 143 },
  { id: "cat-6", name: "Gift Boxes", slug: "gift-boxes", description: "Curated assortment boxes ideal for corporate and retail gifting.", productCount: 88 },
  { id: "cat-7", name: "Family Packs", slug: "family-packs", description: "Mixed-item packs bundling popular products for household celebration.", productCount: 76 },
  { id: "cat-8", name: "Celebration Combos", slug: "celebration-combos", description: "Festival-ready combo sets curated for weddings and functions.", productCount: 64 },
  { id: "cat-9", name: "Wholesale Packs", slug: "wholesale-packs", description: "Bulk cartons designed for distributors and large-scale retailers.", productCount: 152 },
  { id: "cat-10", name: "New Products", slug: "new-products", description: "Newly listed items from verified Sivakasi manufacturers.", productCount: 41 },
];

export const categories: Category[] = raw.map((c) => ({
  ...c,
  image: placeholderImage(c.id, c.name),
}));
