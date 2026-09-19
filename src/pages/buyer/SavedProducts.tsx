import { Package } from "lucide-react";
import { DashboardPageHeader } from "../../components/ui/DashboardCard";
import { ProductCard } from "../../components/ProductCard";
import { EmptyState } from "../../components/ui/EmptyState";
import { products } from "../../data/products";

export function BuyerSavedProducts() {
  const saved = products.filter((p) => p.featured).slice(0, 4);
  return (
    <div>
      <DashboardPageHeader title="Saved Products" description="Products you've saved for future RFQs." />
      {saved.length === 0 ? (
        <EmptyState icon={Package} title="No saved products" description="Save products while browsing the marketplace to find them here later." />
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {saved.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
