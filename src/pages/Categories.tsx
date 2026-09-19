import { PageHero } from "../components/PageHero";
import { CategoryCard } from "../components/CategoryCard";
import { categories } from "../data/categories";

export function Categories() {
  return (
    <div>
      <PageHero
        eyebrow="Browse"
        title="Product Categories"
        description="Explore wholesale fireworks categories sourced from verified Sivakasi manufacturers and suppliers."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
