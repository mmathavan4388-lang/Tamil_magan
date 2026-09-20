import { Link } from "react-router-dom";
import type { Category } from "../types";
import { ProductImage } from "./ProductImage";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to={`/products?category=${category.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ProductImage
          category={category.slug}
          alt={category.nameEn}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-3 sm:p-4 text-center">
        <h3 className="font-semibold text-brand-950 text-sm sm:text-base">{category.nameEn}</h3>
        <p className="tamil text-brand-700/70 text-xs sm:text-sm mt-0.5">{category.nameTa}</p>
        <span className="mt-3 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
          View Products
        </span>
      </div>
    </Link>
  );
}
