import { useState } from 'react'
import { getDiscountPercent } from '../data/products'
import { formatINR } from '../data/shop'
import { useCart } from '../context/CartContext'
import ProductImage from './ProductImage'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const discount = getDiscountPercent(product.mrp, product.offerPrice)
  const hasDiscount = discount > 0

  const changeQty = (delta) => {
    setQty((prev) => Math.max(1, prev + delta))
  }

  const handleAdd = () => {
    addToCart(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <div className="group flex flex-col rounded-2xl bg-brand-card border border-white/5 overflow-hidden shadow-card hover:border-brand-pink/40 hover:shadow-glow transition-all">
      <div className="relative aspect-square bg-black/30">
        <ProductImage src={product.image} alt={product.name} className="w-full h-full object-cover" />
        {hasDiscount && (
          <span className="absolute top-2 left-2 rounded-full bg-brand-red text-white text-[11px] font-bold px-2 py-1 shadow">
            {discount}% OFF
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5 p-3 flex-1">
        <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2">{product.name}</h3>
        <p className="text-white/50 text-xs leading-tight line-clamp-1">{product.tamilName}</p>
        <p className="text-white/40 text-[11px]">Packing: {product.packing}</p>

        <div className="mt-1 flex items-baseline gap-2 flex-wrap">
          {hasDiscount && (
            <span className="text-brand-red text-xs line-through decoration-2">
              {formatINR(product.mrp)}
            </span>
          )}
          <span className="text-brand-green font-extrabold text-lg">
            {formatINR(product.offerPrice)}
          </span>
        </div>

        <div className="mt-auto pt-2 flex items-center gap-2">
          <div className="flex items-center rounded-lg border border-white/15 overflow-hidden">
            <button
              onClick={() => changeQty(-1)}
              className="px-2.5 py-1.5 text-white/70 hover:bg-white/10 active:bg-white/15"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="px-3 text-white text-sm font-semibold min-w-[2ch] text-center">{qty}</span>
            <button
              onClick={() => changeQty(1)}
              className="px-2.5 py-1.5 text-white/70 hover:bg-white/10 active:bg-white/15"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAdd}
            className={`flex-1 rounded-lg text-xs font-bold py-2 transition-colors ${
              added
                ? 'bg-brand-green text-black'
                : 'bg-brand-pink hover:bg-brand-pinkDark text-white'
            }`}
          >
            {added ? 'Added ✓' : 'ADD TO CART'}
          </button>
        </div>
      </div>
    </div>
  )
}
