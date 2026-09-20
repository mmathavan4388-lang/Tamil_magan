import { categories } from "../data/categories";

export type SortOption = "default" | "price-asc" | "price-desc" | "new" | "popular";

export interface Filters {
  category: string;
  minPrice: string;
  maxPrice: string;
  sort: SortOption;
}

export function FilterBar({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (filters: Filters) => void;
}) {
  return (
    <div className="rounded-2xl bg-white p-3 sm:p-4 shadow-card">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <label className="flex flex-col gap-1 text-xs font-medium text-brand-700">
          Category
          <select
            value={filters.category}
            onChange={(e) => onChange({ ...filters, category: e.target.value })}
            className="rounded-lg border border-brand-200 bg-white px-2.5 py-2 text-sm text-brand-900 focus:border-brand-500 focus:outline-none"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.nameEn}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-xs font-medium text-brand-700">
          Min Price (₹)
          <input
            type="number"
            min={0}
            inputMode="numeric"
            value={filters.minPrice}
            onChange={(e) => onChange({ ...filters, minPrice: e.target.value })}
            placeholder="0"
            className="rounded-lg border border-brand-200 bg-white px-2.5 py-2 text-sm text-brand-900 focus:border-brand-500 focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-1 text-xs font-medium text-brand-700">
          Max Price (₹)
          <input
            type="number"
            min={0}
            inputMode="numeric"
            value={filters.maxPrice}
            onChange={(e) => onChange({ ...filters, maxPrice: e.target.value })}
            placeholder="Any"
            className="rounded-lg border border-brand-200 bg-white px-2.5 py-2 text-sm text-brand-900 focus:border-brand-500 focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-1 text-xs font-medium text-brand-700">
          Sort By
          <select
            value={filters.sort}
            onChange={(e) => onChange({ ...filters, sort: e.target.value as SortOption })}
            className="rounded-lg border border-brand-200 bg-white px-2.5 py-2 text-sm text-brand-900 focus:border-brand-500 focus:outline-none"
          >
            <option value="default">Relevance</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="new">New Products</option>
            <option value="popular">Popular Products</option>
          </select>
        </label>
      </div>
    </div>
  );
}
