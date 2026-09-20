const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'discount-desc', label: 'Highest Discount' },
  { value: 'name-asc', label: 'Name A-Z' },
]

export default function FilterBar({ sortBy, onSortChange, resultCount }) {
  return (
    <div className="flex items-center justify-between gap-3 flex-wrap mb-6">
      <p className="text-white/50 text-xs sm:text-sm">
        {resultCount} product{resultCount === 1 ? '' : 's'}
      </p>
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-white/50 text-xs sm:text-sm">
          Sort by
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="rounded-lg bg-brand-card border border-white/10 text-white text-xs sm:text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-pink/60"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
