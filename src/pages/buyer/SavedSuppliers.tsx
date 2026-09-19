import { DashboardPageHeader } from "../../components/ui/DashboardCard";
import { SupplierCard } from "../../components/SupplierCard";
import { EmptyState } from "../../components/ui/EmptyState";
import { Heart } from "lucide-react";
import { suppliers } from "../../data/suppliers";

export function BuyerSavedSuppliers() {
  const saved = suppliers.slice(0, 3);
  return (
    <div>
      <DashboardPageHeader title="Saved Suppliers" description="Suppliers you've bookmarked for quick access." />
      {saved.length === 0 ? (
        <EmptyState icon={Heart} title="No saved suppliers" description="Save suppliers from their profile page to compare them later." />
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {saved.map((s) => (
            <SupplierCard key={s.id} supplier={s} />
          ))}
        </div>
      )}
    </div>
  );
}
