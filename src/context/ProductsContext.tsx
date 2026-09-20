import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products as baseProducts } from "../data/products";
import type { Product } from "../types";

const STORAGE_KEY = "kpk_products_v1";

function loadProducts(): Product[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return baseProducts;
    const saved: Product[] = JSON.parse(raw);
    // Merge: keep any newly-added base products, prefer saved edits by id.
    const savedIds = new Set(saved.map((p) => p.id));
    const merged = [...saved, ...baseProducts.filter((p) => !savedIds.has(p.id))];
    return merged;
  } catch {
    return baseProducts;
  }
}

interface ProductsContextValue {
  products: Product[];
  addProduct: (product: Omit<Product, "id">) => void;
  updateProduct: (id: number, patch: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  resetToDefaults: () => void;
}

const ProductsContext = createContext<ProductsContextValue | null>(null);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(() => loadProducts());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const value = useMemo<ProductsContextValue>(
    () => ({
      products,
      addProduct: (product) => {
        setProducts((prev) => {
          const nextId = prev.length ? Math.max(...prev.map((p) => p.id)) + 1 : 1;
          return [...prev, { ...product, id: nextId }];
        });
      },
      updateProduct: (id, patch) => {
        setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));
      },
      deleteProduct: (id) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
      },
      resetToDefaults: () => {
        setProducts(baseProducts);
      },
    }),
    [products]
  );

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts must be used within ProductsProvider");
  return ctx;
}
