import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PackageSearch, SlidersHorizontal, X } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ProductCard } from "../components/ProductCard";
import { EmptyState } from "../components/ui/EmptyState";
import { products } from "../data/products";
import { categories } from "../data/categories";
import { suppliers } from "../data/suppliers";

type SortKey = "relevance" | "price" | "newest" | "popular" | "rating";

export function Products() {
  const [params, setParams] = useSearchParams();
  const initialQuery = params.get("q") ?? "";
  const initialCategory = params.get("category") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState<SortKey>("relevance");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const locations = useMemo(() => Array.from(new Set(suppliers.map((s) => s.location))), []);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const supplier = suppliers.find((s) => s.id === p.supplierId);
      const matchesQuery =
        !query ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        (supplier?.name.toLowerCase().includes(query.toLowerCase()) ?? false);
      const matchesCategory = !category || p.categorySlug === category;
      const matchesVerified = !verifiedOnly || supplier?.verified;
      const matchesLocation = !location || p.location === location;
      return matchesQuery && matchesCategory && matchesVerified && matchesLocation;
    });

    switch (sort) {
      case "newest":
        list = [...list].sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      case "popular":
        list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
        break;
      case "rating": {
        const ratingOf = (p: (typeof products)[number]) => suppliers.find((s) => s.id === p.supplierId)?.rating ?? 0;
        list = [...list].sort((a, b) => ratingOf(b) - ratingOf(a));
        break;
      }
      default:
        break;
    }
    return list;
  }, [query, category, verifiedOnly, location, sort]);

  function updateCategory(slug: string) {
    setCategory(slug);
    const next = new URLSearchParams(params);
    if (slug) next.set("category", slug);
    else next.delete("category");
    setParams(next, { replace: true });
  }

  const filterPanel = (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-bold text-charcoal-900">Category</h3>
        <div className="flex flex-col gap-1.5">
          <button
            onClick={() => updateCategory("")}
            className={`rounded-lg px-2.5 py-1.5 text-left text-sm font-medium ${!category ? "bg-brand-50 text-brand-700" : "text-charcoal-600 hover:bg-charcoal-50"}`}
          >
            All Categories
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => updateCategory(c.slug)}
              className={`rounded-lg px-2.5 py-1.5 text-left text-sm font-medium ${category === c.slug ? "bg-brand-50 text-brand-700" : "text-charcoal-600 hover:bg-charcoal-50"}`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-bold text-charcoal-900">Supplier Verification</h3>
        <label className="flex items-center gap-2 text-sm text-charcoal-600">
          <input type="checkbox" checked={verifiedOnly} onChange={(e) => setVerifiedOnly(e.target.checked)} className="h-4 w-4 rounded border-charcoal-300 text-brand-600" />
          Verified suppliers only
        </label>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-bold text-charcoal-900">Location</h3>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full rounded-lg border border-charcoal-200 px-3 py-2 text-sm text-charcoal-700 outline-none focus:border-brand-500"
        >
          <option value="">All Locations</option>
          {locations.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-bold text-charcoal-900">Availability</h3>
        <p className="text-sm text-charcoal-500">All listed products are available for wholesale ordering.</p>
      </div>
    </div>
  );

  return (
    <div>
      <PageHero eyebrow="Marketplace" title="Wholesale Fireworks Products" description="Browse verified supplier listings by category, location and pricing." />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search products, categories or suppliers..."
            className="flex-1 rounded-xl border border-charcoal-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-xl border border-charcoal-200 px-4 py-2.5 text-sm text-charcoal-700 outline-none focus:border-brand-500"
          >
            <option value="relevance">Sort: Relevance</option>
            <option value="price">Sort: Price</option>
            <option value="newest">Sort: Newest</option>
            <option value="popular">Sort: Popular</option>
            <option value="rating">Sort: Supplier Rating</option>
          </select>
          <button
            onClick={() => setFiltersOpen(true)}
            className="flex items-center justify-center gap-2 rounded-xl border border-charcoal-200 px-4 py-2.5 text-sm font-semibold text-charcoal-700 lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-charcoal-100 bg-white p-5 shadow-card">{filterPanel}</div>
          </aside>

          <div>
            <p className="mb-4 text-sm text-charcoal-500">{filtered.length} products found</p>
            {filtered.length === 0 ? (
              <EmptyState
                icon={PackageSearch}
                title="No products match your filters"
                description="Try adjusting your search, category or location filters to see more results."
              />
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-charcoal-950/50" onClick={() => setFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-bold text-charcoal-900">Filters</h3>
              <button onClick={() => setFiltersOpen(false)} className="rounded-lg p-1.5 text-charcoal-500 hover:bg-charcoal-50">
                <X className="h-4 w-4" />
              </button>
            </div>
            {filterPanel}
          </div>
        </div>
      )}
    </div>
  );
}
