import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  FileCheck2,
  Handshake,
  MessageSquareText,
  PackageSearch,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { DemoBadge } from "../components/ui/Badge";
import { CategoryCard } from "../components/CategoryCard";
import { ProductCard } from "../components/ProductCard";
import { SupplierCard } from "../components/SupplierCard";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { suppliers } from "../data/suppliers";
import { faqs, howItWorksBuyer, stats, testimonials, trustFeatures } from "../data/site";
import { FAQAccordion } from "../components/FAQAccordion";
import { ContactForm } from "../components/ContactForm";

export function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);
  const featuredSuppliers = suppliers.filter((s) => s.verified).slice(0, 3);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    navigate(query ? `/products?q=${encodeURIComponent(query)}` : "/products");
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal-950">
        <div className="absolute inset-0 bg-noise opacity-40" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-700/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-gold-300">
              <Sparkles className="h-3.5 w-3.5" /> Trusted Suppliers &middot; Verified Buyers
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              India&rsquo;s Trusted B2B Fireworks Marketplace
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-charcoal-300 sm:text-lg">
              Connect with verified fireworks manufacturers and wholesale buyers from Sivakasi and across India.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/products" size="lg" variant="primary" iconRight={<ArrowRight className="h-4 w-4" />}>
                Explore Products
              </Button>
              <Button to="/bulk-orders" size="lg" variant="gold">
                Request Bulk Quote
              </Button>
            </div>

            <form onSubmit={handleSearch} className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-2xl border border-white/10 bg-white/95 p-2 shadow-2xl backdrop-blur">
              <Search className="ml-2 h-5 w-5 shrink-0 text-charcoal-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search fireworks, products, suppliers or categories..."
                className="w-full bg-transparent py-2 text-sm text-charcoal-900 outline-none placeholder:text-charcoal-400"
              />
              <Button type="submit" size="md">Search</Button>
            </form>

            <p className="mt-6 text-xs font-medium uppercase tracking-wide text-charcoal-400">
              Verified Suppliers &bull; Bulk Orders &bull; Transparent Pricing &bull; Business Support
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Browse by Category"
          title="Wholesale Fireworks Categories"
          description="From flower pots to celebration combos — sourced directly from verified Sivakasi manufacturers."
          action={<Button to="/categories" variant="outline" size="sm">View All Categories</Button>}
        />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-charcoal-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Marketplace"
            title="Featured Wholesale Products"
            description="Popular listings from verified suppliers, updated regularly."
            action={<Button to="/products" variant="outline" size="sm">Browse All Products</Button>}
          />
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Verified Suppliers */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Supplier Network"
          title="Verified Fireworks Suppliers"
          description="Business-verified manufacturers with transparent product catalogues and MOQs."
          action={<Button to="/suppliers" variant="outline" size="sm">View All Suppliers</Button>}
        />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredSuppliers.map((s) => (
            <SupplierCard key={s.id} supplier={s} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-charcoal-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Simple Process"
            title="How It Works for Buyers"
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksBuyer.map((step) => (
              <div key={step.step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {step.step}
                </span>
                <h3 className="mt-4 text-base font-bold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal-300">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/how-it-works" variant="outline" className="!border-white/20 !text-white hover:!border-gold-400 hover:!text-gold-300">
              See Full How It Works Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Bulk RFQ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-charcoal-100 bg-gradient-to-br from-brand-50 to-white p-8 shadow-card lg:grid-cols-2 lg:p-12">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-700">
              <PackageSearch className="h-3.5 w-3.5" /> Bulk Ordering
            </span>
            <h2 className="mt-4 text-2xl font-bold text-charcoal-900 sm:text-3xl">
              Need a large wholesale order? Request a Bulk Quote.
            </h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-charcoal-600">
              Submit your product requirements, quantity and delivery location once — receive quotations from
              multiple verified suppliers and compare pricing, taxes and delivery timelines side by side.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/bulk-orders" size="lg">Request Bulk Quote</Button>
              <Button to="/how-it-works" size="lg" variant="outline">Learn About RFQs</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: FileCheck2, label: "Structured RFQ Form" },
              { icon: Handshake, label: "Multi-Supplier Quotes" },
              { icon: ShieldCheck, label: "Verified Suppliers Only" },
              { icon: MessageSquareText, label: "Direct Supplier Chat" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-start gap-3 rounded-2xl bg-white p-5 shadow-card">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <f.icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-charcoal-800">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Verification */}
      <section className="bg-charcoal-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Businesses Trust Us" title="Built for Safe & Transparent Business" align="center" />
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustFeatures.map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-charcoal-100 bg-white p-4 shadow-card">
                <BadgeCheck className="h-5 w-5 shrink-0 text-brand-600" />
                <span className="text-sm font-semibold text-charcoal-800">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance teaser */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-gold-200 bg-gold-50 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold text-charcoal-900">Fireworks Compliance &amp; Safety</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
              Fireworks are a regulated product category. Transactions and transportation are subject to
              applicable Indian laws, licences, storage rules, transport regulations and state-specific
              restrictions. Review our compliance guidance before placing an order.
            </p>
          </div>
          <Button to="/compliance" variant="secondary">Read Compliance &amp; Safety</Button>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <SectionHeading eyebrow="Platform Snapshot" title="Business Statistics" />
            <DemoBadge />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.id} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-3xl font-extrabold text-gold-400">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-charcoal-300">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-charcoal-500">
            Placeholder figures shown for preview. Editable from the Admin Panel; not representative of live production data.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <SectionHeading eyebrow="Buyer Feedback" title="What Businesses Say" />
          <DemoBadge />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col gap-4 rounded-2xl border border-charcoal-100 bg-white p-6 shadow-card">
              <p className="text-sm italic leading-relaxed text-charcoal-600">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-auto flex items-center gap-3 border-t border-charcoal-100 pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                  {t.name[0]}
                </span>
                <div>
                  <p className="text-sm font-bold text-charcoal-900">{t.name}</p>
                  <p className="text-xs text-charcoal-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-charcoal-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" align="center" />
          <div className="mt-8">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Get in Touch" title="Contact KABERIAL PATTASU KADAI" description="Have a bulk requirement or a business question? Send us an enquiry and our team will connect you with the right verified suppliers." />
            <div className="mt-6 space-y-3">
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
                View full contact page <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3">
            <ContactForm compact />
          </div>
        </div>
      </section>
    </div>
  );
}
