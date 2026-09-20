import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CartItem, Product } from "../types";

const STORAGE_KEY = "kpk_cart_v1";

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, qty?: number) => void;
  removeItem: (productId: number) => void;
  updateQty: (productId: number, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  grandTotal: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => loadCart());
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
    const grandTotal = items.reduce((sum, i) => sum + i.qty * i.product.price, 0);

    return {
      items,
      addItem: (product, qty = 1) => {
        setItems((prev) => {
          const existing = prev.find((i) => i.product.id === product.id);
          if (existing) {
            return prev.map((i) =>
              i.product.id === product.id ? { ...i, qty: i.qty + qty } : i
            );
          }
          return [...prev, { product, qty }];
        });
        setDrawerOpen(true);
      },
      removeItem: (productId) => {
        setItems((prev) => prev.filter((i) => i.product.id !== productId));
      },
      updateQty: (productId, qty) => {
        setItems((prev) =>
          qty <= 0
            ? prev.filter((i) => i.product.id !== productId)
            : prev.map((i) => (i.product.id === productId ? { ...i, qty } : i))
        );
      },
      clearCart: () => setItems([]),
      totalItems,
      grandTotal,
      isDrawerOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
    };
  }, [items, isDrawerOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
