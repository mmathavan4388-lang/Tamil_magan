import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types";
import { ProductImage } from "./ProductImage";
import { formatINR } from "../lib/format";
import { useCart } from "../context/CartContext";
import { whatsappSingleProductUrl } from "../lib/whatsapp";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
      <Link to={`/product/${product.slug}`} className="relative block aspect-square overflow-hidden bg-brand-50">
        <ProductImage
          category={product.category}
          image={product.image}
          alt={product.nameEn}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="rounded-full bg-gold-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-950 shadow">
              Best Seller
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-1.5 p-3 sm:p-4">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-semibold text-brand-950 text-sm sm:text-base leading-snug line-clamp-2">
            {product.nameEn}
          </h3>
          <p className="tamil text-brand-700/80 text-xs sm:text-sm line-clamp-1">{product.nameTa}</p>
        </Link>

        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg sm:text-xl font-extrabold text-brand-800">{formatINR(product.price)}</span>
          <span className="text-xs text-brand-500">/ {product.unit}</span>
        </div>
        <p className="text-[11px] sm:text-xs text-brand-500">Net Rate: {formatINR(product.rate)}</p>

        <div className="mt-auto pt-3 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center rounded-full border border-brand-200 overflow-hidden">
              <button
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-1.5 text-brand-700 hover:bg-brand-50 active:scale-95"
              >
                −
              </button>
              <span className="w-8 text-center text-sm font-semibold text-brand-900">{qty}</span>
              <button
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-1.5 text-brand-700 hover:bg-brand-50 active:scale-95"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                addItem(product, qty);
                setQty(1);
              }}
              className="flex-1 rounded-full bg-brand-700 px-3 py-2 text-xs sm:text-sm font-semibold text-white shadow transition-colors hover:bg-brand-800 active:scale-95"
            >
              Add to Cart
            </button>
          </div>
          <a
            href={whatsappSingleProductUrl(product.nameEn, product.nameTa)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-2 text-xs sm:text-sm font-semibold text-[#128C4A] hover:bg-[#25D366]/20 active:scale-95"
          >
            WhatsApp Order
          </a>
        </div>
      </div>
    </div>
  );
}
