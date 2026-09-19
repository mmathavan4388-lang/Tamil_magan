import { MapPin, Package, ShieldCheck } from "lucide-react";
import type { Supplier } from "../types";
import { Button } from "./ui/Button";
import { VerifiedBadge } from "./ui/Badge";

export function SupplierCard({ supplier }: { supplier: Supplier }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-charcoal-100 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="flex items-start gap-3.5">
        <img src={supplier.logo} alt={`${supplier.name} logo`} className="h-14 w-14 rounded-xl object-cover" />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-bold text-charcoal-900">{supplier.name}</h3>
          <p className="flex items-center gap-1 text-xs text-charcoal-500">
            <MapPin className="h-3 w-3" /> {supplier.location}
          </p>
        </div>
      </div>

      <VerifiedBadge verified={supplier.verified} />

      <div className="grid grid-cols-2 gap-2 rounded-xl bg-charcoal-50 p-3 text-xs text-charcoal-600">
        <div>
          <p className="text-charcoal-400">Products</p>
          <p className="font-semibold text-charcoal-900">{supplier.productCount}+</p>
        </div>
        <div>
          <p className="text-charcoal-400">Experience</p>
          <p className="font-semibold text-charcoal-900">{supplier.yearsInBusiness}+ Years</p>
        </div>
        <div>
          <p className="text-charcoal-400">Min. Order</p>
          <p className="font-semibold text-charcoal-900">{supplier.minOrder}</p>
        </div>
        <div>
          <p className="text-charcoal-400">Response Rate</p>
          <p className="font-semibold text-charcoal-900">{supplier.responseRate}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {supplier.categories.slice(0, 3).map((c) => (
          <span key={c} className="rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-medium text-brand-700">
            {c}
          </span>
        ))}
      </div>

      {supplier.gstVerified && (
        <p className="flex items-center gap-1.5 text-xs text-emerald-700">
          <ShieldCheck className="h-3.5 w-3.5" /> GST & business documents verified
        </p>
      )}

      <div className="mt-auto flex gap-2 border-t border-charcoal-100 pt-3.5">
        <Button to={`/suppliers/${supplier.slug}`} size="sm" variant="outline" className="flex-1">
          View Supplier
        </Button>
        <Button to={`/suppliers/${supplier.slug}#contact`} size="sm" variant="primary" className="flex-1" icon={<Package className="h-3.5 w-3.5" />}>
          Contact Supplier
        </Button>
      </div>
    </div>
  );
}
