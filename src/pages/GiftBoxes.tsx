import { useProducts } from "../context/ProductsContext";
import { ProductGrid } from "../components/ProductGrid";

export function GiftBoxes() {
  const { products } = useProducts();
  const giftBoxes = products.filter((p) => p.category === "gift-boxes" && p.enabled !== false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 flex flex-col gap-6">
      <div className="text-center">
        <span className="text-4xl">🎁</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-brand-950 mt-2">Gift Boxes</h1>
        <p className="tamil text-brand-700/80 mt-1">கிப்ட் பாக்ஸ்</p>
        <p className="mt-2 max-w-xl mx-auto text-sm text-brand-600">
          Curated combo boxes with a mix of crackers — perfect for gifting this festive season.
        </p>
      </div>
      <ProductGrid products={giftBoxes} />
    </div>
  );
}
