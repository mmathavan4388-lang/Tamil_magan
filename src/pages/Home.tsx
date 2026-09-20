import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import { useProducts } from "../context/ProductsContext";
import { ProductGrid } from "../components/ProductGrid";
import { CategoryCard } from "../components/CategoryCard";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { ContactSection } from "../components/ContactSection";
import { SafetyNotice } from "../components/SafetyNotice";
import { DISPLAY_PHONE } from "../lib/constants";

export function Home() {
  const { products } = useProducts();
  const enabled = products.filter((p) => p.enabled !== false);
  const bestSellers = enabled.filter((p) => p.isBestSeller).slice(0, 8);
  const newArrivals = enabled.filter((p) => p.isNew).slice(0, 8);
  const giftBoxes = enabled.filter((p) => p.category === "gift-boxes");

  return (
    <div className="flex flex-col gap-14 sm:gap-20 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <span className="absolute left-[8%] top-10 text-6xl animate-sparkle">✨</span>
          <span className="absolute right-[10%] top-24 text-5xl animate-float">🎆</span>
          <span className="absolute left-[20%] bottom-10 text-4xl animate-sparkle">🎇</span>
          <span className="absolute right-[20%] bottom-16 text-6xl animate-float">🧨</span>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:py-28 flex flex-col items-center text-center gap-6">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-gold-400 ring-1 ring-white/20">
            Sivakasi's Trusted Fireworks Store
          </span>
          <h1 className="max-w-3xl text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Celebrate Every Moment With <span className="text-gold-400">KABERIAL PATTASU KADAI</span>
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-brand-100/90">
            Quality Fireworks from Sivakasi
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <Link
              to="/products"
              className="rounded-full bg-gold-500 px-6 py-3.5 font-bold text-brand-950 shadow-card transition-all hover:bg-gold-400 hover:shadow-card-hover active:scale-95"
            >
              Shop Products
            </Link>
            <WhatsAppButton />
          </div>

          <a
            href={`tel:${DISPLAY_PHONE.primary.replace(/\s/g, "")}`}
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm sm:text-base font-semibold ring-1 ring-white/20 hover:bg-white/20"
          >
            📞 Call us: {DISPLAY_PHONE.primary} / {DISPLAY_PHONE.secondary}
          </a>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 flex flex-col gap-14 sm:gap-20">
        {/* Popular Categories */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-950">Popular Categories</h2>
            <Link to="/categories" className="text-sm font-semibold text-brand-700 hover:text-brand-900">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {categories.slice(0, 8).map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </section>

        {/* Best Sellers */}
        {bestSellers.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950">Best Selling Products</h2>
              <Link to="/products?sort=popular" className="text-sm font-semibold text-brand-700 hover:text-brand-900">
                View All →
              </Link>
            </div>
            <ProductGrid products={bestSellers} />
          </section>
        )}

        {/* New Arrivals */}
        {newArrivals.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950">New Arrivals</h2>
              <Link to="/products?sort=new" className="text-sm font-semibold text-brand-700 hover:text-brand-900">
                View All →
              </Link>
            </div>
            <ProductGrid products={newArrivals} />
          </section>
        )}

        {/* Gift Boxes */}
        {giftBoxes.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950">Gift Boxes</h2>
              <Link to="/gift-boxes" className="text-sm font-semibold text-brand-700 hover:text-brand-900">
                View All →
              </Link>
            </div>
            <ProductGrid products={giftBoxes} />
          </section>
        )}

        <WhyChooseUs />
        <ContactSection />
        <SafetyNotice />
      </div>
    </div>
  );
}
