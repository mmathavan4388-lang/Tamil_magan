import { useMemo, useState } from 'react'
import { PRODUCTS } from '../data/products'
import { formatINR, SHOP } from '../data/shop'
import { useCart } from '../context/CartContext'
import ProductImage from './ProductImage'

export default function CartDrawer({ open, onClose }) {
  const { items, setQty, removeItem, clearCart } = useCart()
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerAddress, setCustomerAddress] = useState('')

  const lines = useMemo(() => {
    return Object.entries(items)
      .map(([id, qty]) => {
        const product = PRODUCTS.find((p) => p.id === Number(id))
        if (!product) return null
        return { product, qty, subtotal: product.offerPrice * qty }
      })
      .filter(Boolean)
  }, [items])

  const total = lines.reduce((sum, l) => sum + l.subtotal, 0)

  const buildWhatsAppMessage = () => {
    const productLines = lines
      .map(
        (l) =>
          `${l.product.name} - ${l.qty} ${l.product.packing.split(' ')[1] || 'Unit'} x ${formatINR(
            l.product.offerPrice,
          )} = ${formatINR(l.subtotal)}`,
      )
      .join('\n')

    return [
      `${SHOP.name} - ORDER`,
      '',
      `Customer Name: ${customerName || '-'}`,
      `Phone: ${customerPhone || '-'}`,
      `Address: ${customerAddress || '-'}`,
      '',
      'Products:',
      productLines || '-',
      '',
      `Total: ${formatINR(total)}`,
      '',
      'Please confirm availability and order details.',
    ].join('\n')
  }

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(buildWhatsAppMessage())
    window.open(`https://wa.me/${SHOP.whatsappNumbers[0]}?text=${message}`, '_blank')
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-brand-panel border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10">
          <h2 className="text-white font-bold text-lg">Your Cart</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white p-1" aria-label="Close cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3">
          {lines.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-white/40 gap-2">
              <span className="text-4xl">🛒</span>
              <p className="font-semibold">Your cart is empty</p>
              <p className="text-sm">Add some fireworks to get started!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {lines.map(({ product, qty, subtotal }) => (
                <div key={product.id} className="flex gap-3 bg-brand-card rounded-xl p-2.5 border border-white/5">
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold truncate">{product.name}</p>
                    <p className="text-white/40 text-xs truncate">{product.tamilName}</p>
                    <div className="mt-1 flex items-center justify-between">
                      <div className="flex items-center rounded-lg border border-white/15 overflow-hidden">
                        <button
                          onClick={() => setQty(product.id, qty - 1)}
                          className="px-2 py-0.5 text-white/70 hover:bg-white/10"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="px-2.5 text-white text-xs font-semibold">{qty}</span>
                        <button
                          onClick={() => setQty(product.id, qty + 1)}
                          className="px-2 py-0.5 text-white/70 hover:bg-white/10"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-brand-green font-bold text-sm">{formatINR(subtotal)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-white/30 hover:text-brand-red self-start p-1"
                    aria-label={`Remove ${product.name}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              ))}

              <div className="mt-2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Your Name (optional)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="rounded-lg bg-brand-card border border-white/10 text-white text-sm px-3 py-2.5 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-pink/60"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="rounded-lg bg-brand-card border border-white/10 text-white text-sm px-3 py-2.5 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-pink/60"
                />
                <textarea
                  placeholder="Delivery Address (optional)"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  rows={2}
                  className="rounded-lg bg-brand-card border border-white/10 text-white text-sm px-3 py-2.5 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-pink/60 resize-none"
                />
              </div>
            </div>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-white/10 px-4 py-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-white/60 font-semibold">Total (Rs.)</span>
              <span className="text-brand-green font-extrabold text-2xl">{formatINR(total)}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={clearCart}
                className="flex-1 rounded-lg border border-white/15 text-white/70 hover:text-white hover:border-white/30 text-sm font-semibold py-2.5 transition-colors"
              >
                Clear Cart
              </button>
              <button
                onClick={handleWhatsAppOrder}
                className="flex-[2] rounded-lg bg-green-600 hover:bg-green-500 text-white text-sm font-bold py-2.5 flex items-center justify-center gap-2 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.3-.13.58.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.93.29.14.48.21.55.33.07.12.07.7-.17 1.38z"/></svg>
                Order on WhatsApp
              </button>
            </div>
            <p className="text-white/30 text-[11px] text-center">
              Or call us: {SHOP.phones.join('  ·  ')}
            </p>
          </div>
        )}
      </aside>
    </>
  )
}
