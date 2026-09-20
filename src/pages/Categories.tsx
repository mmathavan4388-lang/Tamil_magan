import { categories } from "../data/categories";
import { CategoryCard } from "../components/CategoryCard";

export function Categories() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 flex flex-col gap-6">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-brand-950">Shop by Category</h1>
        <p className="tamil text-brand-700/80 mt-1">வகை வாரியாக வாங்குங்கள்</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.slug} category={cat} />
        ))}
      </div>
    </div>
  );
}
