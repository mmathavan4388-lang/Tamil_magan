import { CATEGORIES } from '../data/products'
import { slugify } from '../utils/slug'

export default function CategoryNav({ activeCategory, onSelect }) {
  const scrollTo = (cat) => {
    onSelect?.(cat)
    const el = document.getElementById(`cat-${slugify(cat)}`)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 96
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <nav id="categories" className="bg-brand-panel/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-3">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => {
              onSelect(null)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className={`shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold border transition-colors ${
              !activeCategory
                ? 'bg-brand-pink border-brand-pink text-white'
                : 'bg-transparent border-white/15 text-white/70 hover:border-brand-pink/60'
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => scrollTo(cat)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold border transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-brand-pink border-brand-pink text-white'
                  : 'bg-transparent border-white/15 text-white/70 hover:border-brand-pink/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
