import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'kpk_cart_v1'

function loadInitialCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function CartProvider({ children }) {
  // items: { [productId]: qty }
  const [items, setItems] = useState(loadInitialCart)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore storage errors (private browsing, quota, etc.)
    }
  }, [items])

  const addToCart = useCallback((product, qty = 1) => {
    if (qty <= 0) return
    setItems((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + qty,
    }))
  }, [])

  const setQty = useCallback((productId, qty) => {
    setItems((prev) => {
      if (qty <= 0) {
        const next = { ...prev }
        delete next[productId]
        return next
      }
      return { ...prev, [productId]: qty }
    })
  }, [])

  const removeItem = useCallback((productId) => {
    setItems((prev) => {
      const next = { ...prev }
      delete next[productId]
      return next
    })
  }, [])

  const clearCart = useCallback(() => setItems({}), [])

  const itemCount = useMemo(
    () => Object.values(items).reduce((sum, qty) => sum + qty, 0),
    [items],
  )

  const value = { items, addToCart, setQty, removeItem, clearCart, itemCount }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
