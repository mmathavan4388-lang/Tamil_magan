import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ProductImage } from "../components/ProductImage";
import { formatINR } from "../lib/format";
import { buildOrderMessage, whatsappOrderUrl } from "../lib/whatsapp";
import { DISPLAY_PHONE, WHATSAPP_NUMBERS } from "../lib/constants";

export function Cart() {
  const { items, updateQty, removeItem, grandTotal, clearCart } = useCart();
  const [customer, setCustomer] = useState({ name: "", phone: "", address: "" });

  const message = buildOrderMessage(items, customer, grandTotal);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:py-10 flex flex-col gap-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-brand-950">Your Cart</h1>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-brand-200 bg-white py-20 text-center">
          <span className="text-5xl">🛒</span>
          <p className="mt-4 text-brand-600">Your cart is empty.</p>
          <Link
            to="/products"
            className="mt-4 inline-block rounded-full bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-800"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="hidden sm:grid grid-cols-[1fr_auto_auto_auto] gap-4 px-2 text-xs font-semibold uppercase text-brand-500">
              <span>Product</span>
              <span>Quantity</span>
              <span>Total</span>
              <span></span>
            </div>
            {items.map(({ product, qty }) => (
              <div
                key={product.id}
                className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_auto_auto] items-center gap-4 rounded-2xl bg-white p-3 sm:p-4 shadow-card"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                    <ProductImage
                      category={product.category}
                      image={product.image}
                      alt={product.nameEn}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-brand-950 truncate">{product.nameEn}</p>
                    <p className="tamil text-sm text-brand-600 truncate">{product.nameTa}</p>
                    <p className="text-xs text-brand-500">{formatINR(product.price)} / {product.unit}</p>
                  </div>
                </div>

                <div className="flex items-center rounded-full border border-brand-200 overflow-hidden justify-self-start sm:justify-self-center">
                  <button className="px-3 py-1.5 text-brand-700 hover:bg-brand-50" onClick={() => updateQty(product.id, qty - 1)}>
                    −
                  </button>
                  <span className="w-8 text-center text-sm font-semibold">{qty}</span>
                  <button className="px-3 py-1.5 text-brand-700 hover:bg-brand-50" onClick={() => updateQty(product.id, qty + 1)}>
                    +
                  </button>
                </div>

                <span className="hidden sm:block font-bold text-brand-800">{formatINR(product.price * qty)}</span>

                <button
                  onClick={() => removeItem(product.id)}
                  className="justify-self-end text-sm font-medium text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}

            <button onClick={clearCart} className="self-start text-sm font-medium text-brand-500 hover:text-red-500 mt-1">
              Clear cart
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-white p-5 shadow-card">
              <h2 className="font-bold text-brand-950 mb-3">Customer Details</h2>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={customer.name}
                  onChange={(e) => setCustomer((c) => ({ ...c, name: e.target.value }))}
                  className="rounded-lg border border-brand-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={customer.phone}
                  onChange={(e) => setCustomer((c) => ({ ...c, phone: e.target.value }))}
                  className="rounded-lg border border-brand-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
                />
                <textarea
                  placeholder="Delivery Address"
                  rows={3}
                  value={customer.address}
                  onChange={(e) => setCustomer((c) => ({ ...c, address: e.target.value }))}
                  className="rounded-lg border border-brand-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none resize-none"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <span className="text-brand-600 font-medium">Grand Total</span>
                <span className="text-2xl font-extrabold text-brand-900">{formatINR(grandTotal)}</span>
              </div>
              <a
                href={whatsappOrderUrl(message, WHATSAPP_NUMBERS.primary)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 font-semibold text-white shadow hover:brightness-105 active:scale-95"
              >
                Order via WhatsApp
              </a>
              <p className="mt-3 text-center text-xs text-brand-500">
                Sends order to {DISPLAY_PHONE.primary}. Alternate contact: {DISPLAY_PHONE.secondary}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
