import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ProductImage } from "./ProductImage";
import { formatINR } from "../lib/format";

export function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, updateQty, removeItem, grandTotal, totalItems } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        aria-label="Close cart"
        className="absolute inset-0 bg-brand-950/50 backdrop-blur-sm"
        onClick={closeDrawer}
      />
      <div className="relative flex h-full w-full max-w-md flex-col bg-white shadow-2xl animate-[slideIn_0.25s_ease-out]">
        <div className="flex items-center justify-between border-b border-brand-100 px-4 py-4">
          <h2 className="text-lg font-bold text-brand-950">Your Cart ({totalItems})</h2>
          <button
            onClick={closeDrawer}
            aria-label="Close"
            className="rounded-full p-2 text-brand-700 hover:bg-brand-50"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-brand-500">
              <span className="text-4xl">🛒</span>
              <p>Your cart is empty.</p>
              <Link
                to="/products"
                onClick={closeDrawer}
                className="rounded-full bg-brand-700 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-800"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {items.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-3 rounded-xl border border-brand-100 p-2.5">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                    <ProductImage
                      category={product.category}
                      image={product.image}
                      alt={product.nameEn}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-semibold text-brand-950 line-clamp-1">{product.nameEn}</p>
                    <p className="tamil text-xs text-brand-600 line-clamp-1">{product.nameTa}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-brand-200 overflow-hidden">
                        <button
                          className="px-2.5 py-1 text-brand-700 hover:bg-brand-50"
                          onClick={() => updateQty(product.id, qty - 1)}
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-xs font-semibold">{qty}</span>
                        <button
                          className="px-2.5 py-1 text-brand-700 hover:bg-brand-50"
                          onClick={() => updateQty(product.id, qty + 1)}
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-bold text-brand-800">
                        {formatINR(product.price * qty)}
                      </span>
                    </div>
                  </div>
                  <button
                    aria-label="Remove item"
                    onClick={() => removeItem(product.id)}
                    className="self-start text-brand-400 hover:text-red-500"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-brand-100 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-brand-600">Grand Total</span>
              <span className="text-xl font-extrabold text-brand-900">{formatINR(grandTotal)}</span>
            </div>
            <Link
              to="/cart"
              onClick={closeDrawer}
              className="block w-full rounded-full bg-brand-700 py-3 text-center font-semibold text-white shadow hover:bg-brand-800"
            >
              View Cart & Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
