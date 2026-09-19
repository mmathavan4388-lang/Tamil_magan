import { useParams } from "react-router-dom";
import { CalendarCheck2, MapPin, MessageSquare, Package, ShieldCheck } from "lucide-react";
import { getSupplierBySlug } from "../data/suppliers";
import { getProductsBySupplier } from "../data/products";
import { Button } from "../components/ui/Button";
import { VerifiedBadge } from "../components/ui/Badge";
import { ProductCard } from "../components/ProductCard";
import { EmptyState } from "../components/ui/EmptyState";
import { ContactForm } from "../components/ContactForm";
import { NotFound } from "./NotFound";

export function SupplierDetail() {
  const { slug } = useParams();
  const supplier = slug ? getSupplierBySlug(slug) : undefined;
  if (!supplier) return <NotFound />;

  const supplierProducts = getProductsBySupplier(supplier.id);

  return (
    <div>
      <section className="border-b border-charcoal-100 bg-charcoal-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <img src={supplier.logo} alt="" className="h-20 w-20 rounded-2xl shadow-card" />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-extrabold text-white sm:text-3xl">{supplier.name}</h1>
                <VerifiedBadge verified={supplier.verified} />
              </div>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-charcoal-300">
                <MapPin className="h-4 w-4" /> {supplier.location}
              </p>
            </div>
            <div className="flex gap-3">
              <Button href="#contact" variant="gold" icon={<MessageSquare className="h-4 w-4" />}>Contact Supplier</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat icon={Package} label="Products" value={`${supplier.productCount}+`} />
          <Stat icon={CalendarCheck2} label="Experience" value={`${supplier.yearsInBusiness}+ Years`} />
          <Stat icon={ShieldCheck} label="Min. Order" value={supplier.minOrder} />
          <Stat icon={MessageSquare} label="Response Rate" value={supplier.responseRate} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-charcoal-900">About {supplier.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{supplier.description}</p>

            <h2 className="mt-8 text-lg font-bold text-charcoal-900">Product Categories</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {supplier.categories.map((c) => (
                <span key={c} className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">{c}</span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-charcoal-100 p-5 shadow-card">
            <h3 className="text-sm font-bold text-charcoal-900">Business Verification</h3>
            <ul className="mt-4 space-y-3 text-sm text-charcoal-600">
              <li className="flex items-center gap-2">
                <ShieldCheck className={`h-4 w-4 ${supplier.gstVerified ? "text-emerald-600" : "text-charcoal-300"}`} />
                GST documentation {supplier.gstVerified ? "verified" : "pending"}
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className={`h-4 w-4 ${supplier.verified ? "text-emerald-600" : "text-charcoal-300"}`} />
                Business profile {supplier.verified ? "verified" : "under review"}
              </li>
            </ul>
            <p className="mt-4 text-xs text-charcoal-400">
              Verification reflects business/GST documentation submitted to KABERIAL PATTASU KADAI. Buyers should
              still conduct independent due diligence before transacting.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-lg font-bold text-charcoal-900">Products from {supplier.name}</h2>
          {supplierProducts.length === 0 ? (
            <div className="mt-5">
              <EmptyState icon={Package} title="No products listed yet" description="This supplier has not published any products yet." />
            </div>
          ) : (
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {supplierProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>

        <div id="contact" className="mt-16 scroll-mt-24">
          <h2 className="text-lg font-bold text-charcoal-900">Business Enquiry</h2>
          <p className="mt-1 mb-5 text-sm text-charcoal-500">Send a direct enquiry to {supplier.name}.</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Package; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-charcoal-100 bg-white p-4 shadow-card">
      <Icon className="h-5 w-5 text-brand-600" />
      <p className="mt-2 text-lg font-extrabold text-charcoal-900">{value}</p>
      <p className="text-xs text-charcoal-500">{label}</p>
    </div>
  );
}
