import { useMemo, useState } from "react";
import { Building2 } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SupplierCard } from "../components/SupplierCard";
import { EmptyState } from "../components/ui/EmptyState";
import { suppliers } from "../data/suppliers";

export function Suppliers() {
  const [query, setQuery] = useState("");
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const filtered = useMemo(() => {
    return suppliers.filter((s) => {
      const matchesQuery =
        !query ||
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.location.toLowerCase().includes(query.toLowerCase()) ||
        s.categories.some((c) => c.toLowerCase().includes(query.toLowerCase()));
      const matchesVerified = !verifiedOnly || s.verified;
      return matchesQuery && matchesVerified;
    });
  }, [query, verifiedOnly]);

  return (
    <div>
      <PageHero
        eyebrow="Supplier Network"
        title="Verified Fireworks Suppliers"
        description="Business-verified manufacturers from Sivakasi and across Tamil Nadu, with transparent MOQs and product catalogues."
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search suppliers by name, location or category..."
            className="flex-1 rounded-xl border border-charcoal-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500"
          />
          <label className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-charcoal-200 px-4 py-2.5 text-sm font-medium text-charcoal-700">
            <input type="checkbox" checked={verifiedOnly} onChange={(e) => setVerifiedOnly(e.target.checked)} className="h-4 w-4 rounded border-charcoal-300 text-brand-600" />
            Verified only
          </label>
        </div>

        <p className="mb-4 text-sm text-charcoal-500">{filtered.length} suppliers found</p>

        {filtered.length === 0 ? (
          <EmptyState icon={Building2} title="No suppliers match your search" description="Try a different keyword or clear the verified filter." />
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <SupplierCard key={s.id} supplier={s} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
