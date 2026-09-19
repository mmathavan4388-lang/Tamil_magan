import { Link } from "react-router-dom";
import { ListPlus, MapPin, PackageCheck } from "lucide-react";
import type { Product } from "../types";
import { getSupplierById } from "../data/suppliers";
import { VerifiedBadge } from "./ui/Badge";
import { Button } from "./ui/Button";

export function ProductCard({ product }: { product: Product }) {
  const supplier = getSupplierById(product.supplierId);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover">
      <Link to={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-charcoal-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 flex gap-1.5">
          {product.isNew && (
            <span className="rounded-full bg-gold-400 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-charcoal-900 shadow">
              New
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{product.category}</p>
        <Link to={`/products/${product.slug}`}>
          <h3 className="line-clamp-2 text-[15px] font-bold leading-snug text-charcoal-900 hover:text-brand-700">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between text-xs text-charcoal-500">
          <span className="truncate">{supplier?.name ?? product.supplierName}</span>
          <VerifiedBadge verified={supplier?.verified} />
        </div>

        <div className="mt-1 grid grid-cols-2 gap-2 text-xs text-charcoal-600">
          <div className="flex items-center gap-1.5">
            <PackageCheck className="h-3.5 w-3.5 text-charcoal-400" />
            <span>MOQ: <strong className="text-charcoal-800">{product.moq}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-charcoal-400" />
            <span className="truncate">{product.location.split(",")[0]}</span>
          </div>
        </div>

        <div className="mt-1 border-t border-dashed border-charcoal-100 pt-2.5">
          <p className="text-sm font-bold text-charcoal-900">{product.priceLabel}</p>
          {product.priceRange && <p className="text-xs text-charcoal-400">{product.priceRange}</p>}
        </div>

        <div className="mt-auto flex gap-2 pt-2">
          <Button to={`/products/${product.slug}`} size="sm" variant="primary" className="flex-1">
            Get Quote
          </Button>
          <Button to={`/products/${product.slug}`} size="sm" variant="outline" className="flex-1">
            View Details
          </Button>
          <button
            type="button"
            title="Add to RFQ"
            aria-label="Add to RFQ"
            className="flex items-center justify-center rounded-xl border border-charcoal-200 p-2.5 text-charcoal-500 transition-colors hover:border-gold-400 hover:text-gold-700"
          >
            <ListPlus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
