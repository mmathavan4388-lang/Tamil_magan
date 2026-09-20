import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { getCategory } from "../data/categories";
import { ProductImage } from "../components/ProductImage";
import { ProductGrid } from "../components/ProductGrid";
import { formatINR } from "../lib/format";
import { useCart } from "../context/CartContext";
import { whatsappSingleProductUrl } from "../lib/whatsapp";

export function ProductDetail() {
  const { slug } = useParams();
  const { products } = useProducts();
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-brand-950">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block text-brand-700 font-semibold hover:underline">
          ← Back to Products
        </Link>
      </div>
    );
  }

  const category = getCategory(product.category);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id && p.enabled !== false)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10 flex flex-col gap-10">
      <nav className="text-xs sm:text-sm text-brand-500">
        <Link to="/" className="hover:text-brand-800">Home</Link> /{" "}
        <Link to="/products" className="hover:text-brand-800">Products</Link> /{" "}
        {category && (
          <>
            <Link to={`/products?category=${category.slug}`} className="hover:text-brand-800">
              {category.nameEn}
            </Link>{" "}
            /{" "}
          </>
        )}
        <span className="text-brand-800 font-medium">{product.nameEn}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-3xl shadow-card">
          <ProductImage
            category={product.category}
            image={product.image}
            alt={product.nameEn}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            {product.isNew && (
              <span className="rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase text-white">New</span>
            )}
            {product.isBestSeller && (
              <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase text-brand-950">
                Best Seller
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-brand-950">{product.nameEn}</h1>
          <p className="tamil text-lg text-brand-700/80">{product.nameTa}</p>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-brand-800">{formatINR(product.price)}</span>
            <span className="text-brand-500">/ {product.unit}</span>
          </div>
          <p className="text-sm text-brand-500">Net Rate (Offer): {formatINR(product.rate)} per unit</p>

          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center rounded-full border border-brand-200 overflow-hidden">
              <button className="px-4 py-2.5 text-brand-700 hover:bg-brand-50" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                −
              </button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button className="px-4 py-2.5 text-brand-700 hover:bg-brand-50" onClick={() => setQty((q) => q + 1)}>
                +
              </button>
            </div>
            <span className="text-brand-600 text-sm">Total: {formatINR(product.price * qty)}</span>
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            <button
              onClick={() => addItem(product, qty)}
              className="rounded-full bg-brand-700 px-6 py-3 font-semibold text-white shadow hover:bg-brand-800 active:scale-95"
            >
              Add to Cart
            </button>
            <a
              href={whatsappSingleProductUrl(product.nameEn, product.nameTa)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow hover:brightness-105 active:scale-95"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-brand-950 mb-4">You may also like</h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
