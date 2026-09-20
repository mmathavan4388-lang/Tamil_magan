import { CATEGORIES } from '../data/products'
import { slugify } from '../utils/slug'
import ProductCard from './ProductCard'

// Renders products grouped under their category headers (like the grid),
// or as a single flat grid when a search/filter has been applied.
export default function ProductGrid({ products, groupByCategory = true }) {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center text-white/50">
        <p className="text-4xl mb-3">🔍</p>
        <p className="font-semibold">No products found</p>
        <p className="text-sm mt-1">Try a different search term or category.</p>
      </div>
    )
  }

  if (!groupByCategory) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    )
  }

  const byCategory = CATEGORIES.map((cat) => ({
    cat,
    items: products.filter((p) => p.category === cat),
  })).filter((g) => g.items.length > 0)

  return (
    <div className="flex flex-col gap-10">
      {byCategory.map(({ cat, items }) => (
        <section key={cat} id={`cat-${slugify(cat)}`} className="scroll-mt-24">
          <div className="mb-4 inline-block rounded-lg bg-gradient-to-r from-brand-pink to-brand-pinkDark px-4 py-2 shadow-glow">
            <h2 className="text-white font-extrabold text-sm sm:text-base tracking-wide uppercase">
              {cat}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
