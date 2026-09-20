import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { ProductGrid } from "../components/ProductGrid";
import { FilterBar, type Filters, type SortOption } from "../components/FilterBar";
import { getCategory } from "../data/categories";

export function Products() {
  const { products } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("q") ?? "";
  const [filters, setFilters] = useState<Filters>({
    category: searchParams.get("category") ?? "",
    minPrice: "",
    maxPrice: "",
    sort: (searchParams.get("sort") as SortOption) ?? "default",
  });

  const category = filters.category ? getCategory(filters.category) : undefined;

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let list = products.filter((p) => p.enabled !== false);

    if (needle) {
      const cat = getCategory(filters.category || "");
      list = list.filter((p) => {
        const categoryObj = getCategory(p.category);
        return (
          p.nameEn.toLowerCase().includes(needle) ||
          p.nameTa.includes(q.trim()) ||
          categoryObj?.nameEn.toLowerCase().includes(needle) ||
          categoryObj?.nameTa.includes(q.trim())
        );
      });
      void cat;
    }

    if (filters.category) {
      list = list.filter((p) => p.category === filters.category);
    }

    const min = Number(filters.minPrice);
    const max = Number(filters.maxPrice);
    if (filters.minPrice) list = list.filter((p) => p.price >= min);
    if (filters.maxPrice) list = list.filter((p) => p.price <= max);

    switch (filters.sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "new":
        list = list.filter((p) => p.isNew);
        break;
      case "popular":
        list = list.filter((p) => p.isBestSeller);
        break;
    }

    return list;
  }, [products, q, filters]);

  function handleFiltersChange(next: Filters) {
    setFilters(next);
    const params = new URLSearchParams(searchParams);
    if (next.category) params.set("category", next.category);
    else params.delete("category");
    setSearchParams(params, { replace: true });
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 flex flex-col gap-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-brand-950">
          {category ? category.nameEn : "All Products"}
        </h1>
        {category && <p className="tamil text-brand-700/80 mt-1">{category.nameTa}</p>}
        {q && (
          <p className="text-sm text-brand-600 mt-1">
            Showing results for "<span className="font-semibold">{q}</span>"
          </p>
        )}
      </div>

      <FilterBar filters={filters} onChange={handleFiltersChange} />

      <p className="text-sm text-brand-500">{filtered.length} products found</p>

      <ProductGrid products={filtered} />
    </div>
  );
}
