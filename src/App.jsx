import { useMemo, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import ProductTable from './components/ProductTable'
import CartSummary from './components/CartSummary'
import Cart from './components/Cart'
import WhatsAppOrder from './components/WhatsAppOrder'
import Footer from './components/Footer'
import { PRODUCTS } from './data/products'
import { CATEGORIES } from './data/categories'
import { useCart, buildCartLines, useCartTotals } from './hooks/useCart'
import { buildWhatsAppMessage, whatsappLink } from './utils/whatsapp'
import { SHOP } from './data/shopConfig'

export default function App() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [cartOpen, setCartOpen] = useState(false)

  const { setQty, increment, decrement, remove, clear, getQty, qtyById } = useCart()

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase()
    return PRODUCTS.filter((prod) => {
      if (activeCategory !== 'all' && prod.category !== activeCategory) return false
      if (!q) return true
      const idMatch = String(prod.id).includes(q)
      const nameMatch = prod.name.toLowerCase().includes(q)
      const tamilMatch = prod.tamilName && prod.tamilName.includes(search.trim())
      return idMatch || nameMatch || tamilMatch
    })
  }, [search, activeCategory])

  const productsByCategory = useMemo(() => {
    const map = {}
    for (const cat of CATEGORIES) map[cat.id] = []
    for (const prod of filteredProducts) {
      if (map[prod.category]) map[prod.category].push(prod)
    }
    return map
  }, [filteredProducts])

  const cartLines = useMemo(() => buildCartLines(PRODUCTS, qtyById), [qtyById])
  const { totalItems, grandTotal } = useCartTotals(cartLines)

  const handleOrder = () => {
    const message = buildWhatsAppMessage(cartLines, grandTotal)
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  const hasResults = filteredProducts.length > 0

  return (
    <div className="app">
      <Header />

      <div className="toolbar">
        <SearchBar value={search} onChange={setSearch} />
        <WhatsAppOrder />
      </div>

      <CategoryFilter categories={CATEGORIES} activeId={activeCategory} onSelect={setActiveCategory} />

      <main className="catalogue">
        {!hasResults && (
          <p className="catalogue__no-results">No products found. Try a different search or category.</p>
        )}
        {CATEGORIES.map((cat) => (
          <ProductTable
            key={cat.id}
            category={cat}
            products={productsByCategory[cat.id] || []}
            getQty={getQty}
            onSetQty={setQty}
            onIncrement={increment}
            onDecrement={decrement}
          />
        ))}
      </main>

      <Footer />

      {totalItems > 0 && (
        <CartSummary totalItems={totalItems} grandTotal={grandTotal} onOpen={() => setCartOpen(true)} />
      )}

      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        lines={cartLines}
        grandTotal={grandTotal}
        onIncrement={increment}
        onDecrement={decrement}
        onRemove={remove}
        onClear={clear}
        onOrder={handleOrder}
      />
    </div>
  )
}
