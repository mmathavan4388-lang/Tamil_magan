export default function CategoryFilter({ categories, activeId, onSelect }) {
  return (
    <nav className="category-filter" aria-label="Product categories">
      <button
        className={`category-filter__btn ${activeId === 'all' ? 'is-active' : ''}`}
        onClick={() => onSelect('all')}
      >
        ALL
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`category-filter__btn ${activeId === cat.id ? 'is-active' : ''}`}
          onClick={() => onSelect(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </nav>
  )
}
