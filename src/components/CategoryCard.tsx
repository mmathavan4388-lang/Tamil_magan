import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "../types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to={`/products?category=${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-charcoal-900">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-bold text-white">{category.name}</h3>
          <p className="text-xs text-white/70">{category.productCount} products</p>
        </div>
        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-charcoal-800 opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="line-clamp-2 text-sm text-charcoal-500">{category.description}</p>
        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
          View Products <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
