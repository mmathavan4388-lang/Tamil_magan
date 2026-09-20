import type { Product } from "../types";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products, emptyLabel = "No products found." }: { products: Product[]; emptyLabel?: string }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-brand-200 bg-white py-16 text-center text-brand-500">
        {emptyLabel}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
