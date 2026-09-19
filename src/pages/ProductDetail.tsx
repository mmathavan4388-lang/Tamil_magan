import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AlertTriangle,
  BadgeCheck,
  MapPin,
  Minus,
  Package,
  Plus,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { getProductBySlug, getProductsByCategory } from "../data/products";
import { getSupplierById } from "../data/suppliers";
import { Button } from "../components/ui/Button";
import { VerifiedBadge } from "../components/ui/Badge";
import { ProductCard } from "../components/ProductCard";
import { NotFound } from "./NotFound";

export function ProductDetail() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(100);

  if (!product) return <NotFound />;

  const supplier = getSupplierById(product.supplierId);
  const related = getProductsByCategory(product.categorySlug).filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 text-xs text-charcoal-400">
        <Link to="/" className="hover:text-charcoal-700">Home</Link> /{" "}
        <Link to="/products" className="hover:text-charcoal-700">Products</Link> /{" "}
        <Link to={`/products?category=${product.categorySlug}`} className="hover:text-charcoal-700">{product.category}</Link> /{" "}
        <span className="text-charcoal-600">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-charcoal-100 bg-charcoal-50">
            <img src={product.images[activeImage]} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="mt-3 flex gap-2.5">
            {product.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`h-16 w-16 overflow-hidden rounded-lg border-2 ${activeImage === i ? "border-brand-600" : "border-transparent"}`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{product.category}</p>
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-charcoal-900 sm:text-3xl">{product.name}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link to={`/suppliers/${supplier?.slug}`} className="text-sm font-semibold text-charcoal-700 hover:text-brand-600">
              {supplier?.name}
            </Link>
            <VerifiedBadge verified={supplier?.verified} />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl bg-charcoal-50 p-4 sm:grid-cols-4">
            <InfoStat label="MOQ" value={product.moq} />
            <InfoStat label="Available Qty" value={product.availableQty} />
            <InfoStat label="Location" value={product.location} />
            <InfoStat label="Packaging" value={product.packaging} />
          </div>

          <div className="mt-6 rounded-2xl border border-charcoal-100 p-5">
            <p className="text-sm font-semibold text-charcoal-500">Wholesale Pricing</p>
            <p className="mt-1 text-xl font-extrabold text-charcoal-900">{product.priceLabel}</p>
            {product.priceRange && <p className="mt-1 text-sm text-charcoal-500">{product.priceRange}</p>}
            <p className="mt-2 text-xs text-charcoal-400">
              Prices may vary according to quantity, season, taxes and supplier.
            </p>

            <div className="mt-5">
              <label className="mb-2 block text-xs font-semibold text-charcoal-600">Bulk Quantity (boxes)</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 10))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-charcoal-200 text-charcoal-600 hover:bg-charcoal-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <input
                  type="number"
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value) || 0)}
                  className="w-24 rounded-lg border border-charcoal-200 px-3 py-2 text-center text-sm font-semibold outline-none focus:border-brand-500"
                />
                <button
                  onClick={() => setQty((q) => q + 10)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-charcoal-200 text-charcoal-600 hover:bg-charcoal-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <span className="text-xs text-charcoal-400">MOQ: {product.moq}</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button to="/bulk-orders" size="lg">Request Quote</Button>
              <Button variant="outline" size="lg" icon={<Package className="h-4 w-4" />}>Add to RFQ</Button>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-gold-200 bg-gold-50 p-4 text-xs leading-relaxed text-charcoal-700">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold-700" />
            <p>
              This product is a regulated fireworks item. Purchase, storage and transport are subject to applicable
              Indian laws, licences and state-specific restrictions. See our{" "}
              <Link to="/compliance" className="font-semibold underline">Compliance &amp; Safety</Link> page.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-2.5 rounded-xl border border-charcoal-100 p-3.5 text-sm text-charcoal-600">
              <Truck className="h-4 w-4 text-brand-600" /> Shipping availability varies by destination
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-charcoal-100 p-3.5 text-sm text-charcoal-600">
              <ShieldCheck className="h-4 w-4 text-brand-600" /> Business &amp; GST documentation on file
            </div>
          </div>
        </div>
      </div>

      {/* Description / specs */}
      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold text-charcoal-900">Product Description</h2>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{product.description}</p>

          <h2 className="mt-8 text-lg font-bold text-charcoal-900">Specifications</h2>
          <div className="mt-3 divide-y divide-charcoal-100 rounded-2xl border border-charcoal-100">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex items-center justify-between px-4 py-3 text-sm">
                <span className="text-charcoal-500">{spec.label}</span>
                <span className="font-semibold text-charcoal-800">{spec.value}</span>
              </div>
            ))}
          </div>

          <h2 className="mt-8 text-lg font-bold text-charcoal-900">Packaging Details</h2>
          <p className="mt-3 text-sm text-charcoal-600">{product.packaging}</p>

          <h2 className="mt-8 text-lg font-bold text-charcoal-900">Legal &amp; Compliance Information</h2>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
            Fireworks products require applicable licences for sale, storage and transport under Indian law.
            Buyers are responsible for verifying local regulations, permitted destinations and age restrictions
            in their state before ordering. See the full{" "}
            <Link to="/compliance" className="font-semibold text-brand-600">Compliance &amp; Safety</Link> page for details.
          </p>
        </div>

        {/* Supplier card */}
        {supplier && (
          <div className="rounded-2xl border border-charcoal-100 p-5 shadow-card">
            <h3 className="text-sm font-bold text-charcoal-900">Supplier Information</h3>
            <div className="mt-4 flex items-center gap-3">
              <img src={supplier.logo} alt="" className="h-12 w-12 rounded-lg" />
              <div>
                <p className="text-sm font-bold text-charcoal-900">{supplier.name}</p>
                <p className="flex items-center gap-1 text-xs text-charcoal-500"><MapPin className="h-3 w-3" /> {supplier.location}</p>
              </div>
            </div>
            <div className="mt-4"><VerifiedBadge verified={supplier.verified} /></div>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-charcoal-500">Experience</dt><dd className="font-semibold text-charcoal-800">{supplier.yearsInBusiness}+ years</dd></div>
              <div className="flex justify-between"><dt className="text-charcoal-500">Products Listed</dt><dd className="font-semibold text-charcoal-800">{supplier.productCount}+</dd></div>
              <div className="flex justify-between"><dt className="text-charcoal-500">Response Rate</dt><dd className="font-semibold text-charcoal-800">{supplier.responseRate}</dd></div>
            </dl>
            <div className="mt-5 flex flex-col gap-2">
              <Button to={`/suppliers/${supplier.slug}`} variant="outline" size="sm">View Supplier Profile</Button>
              <Button to="/contact" variant="primary" size="sm" icon={<BadgeCheck className="h-4 w-4" />}>Send Enquiry</Button>
            </div>
          </div>
        )}
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-lg font-bold text-charcoal-900">More in {product.category}</h2>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function InfoStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-400">{label}</p>
      <p className="mt-0.5 text-sm font-bold text-charcoal-800">{value}</p>
    </div>
  );
}
