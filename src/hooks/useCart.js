import { useMemo, useState, useCallback } from 'react'

// Cart state: { [productId]: qty }
export function useCart() {
  const [qtyById, setQtyById] = useState({})

  const setQty = useCallback((product, qty) => {
    const clean = Math.max(0, Math.floor(Number.isFinite(qty) ? qty : 0))
    setQtyById((prev) => {
      if (clean === 0) {
        const next = { ...prev }
        delete next[product.id]
        return next
      }
      return { ...prev, [product.id]: clean }
    })
  }, [])

  const increment = useCallback((product) => {
    setQtyById((prev) => ({ ...prev, [product.id]: (prev[product.id] || 0) + 1 }))
  }, [])

  const decrement = useCallback((product) => {
    setQtyById((prev) => {
      const next = (prev[product.id] || 0) - 1
      const copy = { ...prev }
      if (next <= 0) delete copy[product.id]
      else copy[product.id] = next
      return copy
    })
  }, [])

  const remove = useCallback((product) => {
    setQtyById((prev) => {
      const copy = { ...prev }
      delete copy[product.id]
      return copy
    })
  }, [])

  const clear = useCallback(() => setQtyById({}), [])

  const getQty = useCallback((productId) => qtyById[productId] || 0, [qtyById])

  return { qtyById, setQty, increment, decrement, remove, clear, getQty }
}

export function buildCartLines(products, qtyById) {
  return products
    .filter((prod) => qtyById[prod.id] > 0 && prod.price != null)
    .map((prod) => ({
      product: prod,
      qty: qtyById[prod.id],
      lineTotal: prod.price * qtyById[prod.id],
    }))
}

export function useCartTotals(lines) {
  return useMemo(() => {
    const totalItems = lines.reduce((sum, l) => sum + l.qty, 0)
    const grandTotal = lines.reduce((sum, l) => sum + l.lineTotal, 0)
    return { totalItems, grandTotal }
  }, [lines])
}
