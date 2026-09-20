import { useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CategoryNav from './components/CategoryNav'
import FilterBar from './components/FilterBar'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import MobileBottomNav from './components/MobileBottomNav'
import { PRODUCTS, getDiscountPercent } from './data/products'
import { useCart } from './context/CartContext'

export default function App() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState(null)
  const [sortBy, setSortBy] = useState('default')
  const [cartOpen, setCartOpen] = useState(false)

  const { itemCount } = useCart()

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase()

    let list = PRODUCTS.filter((p) => {
      const matchesCategory = !activeCategory || p.category === activeCategory
      if (!matchesCategory) return false
      if (!q) return true
      return (
        p.name.toLowerCase().includes(q) ||
        p.tamilName.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    })

    switch (sortBy) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.offerPrice - b.offerPrice)
        break
      case 'price-desc':
        list = [...list].sort((a, b) => b.offerPrice - a.offerPrice)
        break
      case 'discount-desc':
        list = [...list].sort(
          (a, b) =>
            getDiscountPercent(b.mrp, b.offerPrice) - getDiscountPercent(a.mrp, a.offerPrice),
        )
        break
      case 'name-asc':
        list = [...list].sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return list
  }, [search, activeCategory, sortBy])

  const isFiltering = Boolean(search.trim()) || sortBy !== 'default'

  return (
    <div className="min-h-screen bg-brand-bg">
      <Header
        search={search}
        onSearchChange={setSearch}
        cartCount={itemCount}
        onCartClick={() => setCartOpen(true)}
        onMenuClick={() => {
          document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      <Hero />

      <CategoryNav activeCategory={activeCategory} onSelect={setActiveCategory} />

      <main className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-6">
        <FilterBar sortBy={sortBy} onSortChange={setSortBy} resultCount={filteredProducts.length} />
        <ProductGrid products={filteredProducts} groupByCategory={!isFiltering && !activeCategory} />
      </main>

      <Footer />

      <MobileBottomNav
        cartCount={itemCount}
        onCartClick={() => setCartOpen(true)}
        onSearchClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          setTimeout(() => document.querySelector('input[type="text"]')?.focus(), 400)
        }}
        onCategoriesClick={() => {
          document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}
