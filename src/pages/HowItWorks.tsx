import { PageHero } from "../components/PageHero";
import { Button } from "../components/ui/Button";
import { howItWorksBuyer, howItWorksSupplier } from "../data/site";

export function HowItWorks() {
  return (
    <div>
      <PageHero
        eyebrow="Simple Process"
        title="How KABERIAL PATTASU KADAI Works"
        description="A structured, transparent process for both wholesale buyers and verified fireworks suppliers."
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section>
          <h2 className="text-xl font-bold text-charcoal-900">For Buyers</h2>
          <p className="mt-1 text-sm text-charcoal-500">From search to delivery in four structured steps.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksBuyer.map((s) => (
              <StepCard key={s.step} {...s} />
            ))}
          </div>
          <div className="mt-6">
            <Button to="/bulk-orders">Request Bulk Quote</Button>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-bold text-charcoal-900">For Suppliers</h2>
          <p className="mt-1 text-sm text-charcoal-500">Get verified and start receiving RFQs from wholesale buyers.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksSupplier.map((s) => (
              <StepCard key={s.step} {...s} />
            ))}
          </div>
          <div className="mt-6">
            <Button to="/register" variant="secondary">Register as a Supplier</Button>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-charcoal-100 bg-charcoal-50 p-8">
          <h2 className="text-lg font-bold text-charcoal-900">Understanding RFQs</h2>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
            A Request for Quotation (RFQ) is a structured requirement submitted by a buyer &mdash; product,
            quantity, delivery location, required date and business details. Suppliers respond with a quotation
            covering price, applicable taxes, shipping cost, estimated delivery and validity period. Buyers can
            compare multiple quotations before accepting one and coordinating the order directly with the chosen
            supplier.
          </p>
        </section>
      </div>
    </div>
  );
}

function StepCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-charcoal-100 bg-white p-5 shadow-card">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">{step}</span>
      <h3 className="mt-4 text-base font-bold text-charcoal-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-charcoal-500">{description}</p>
    </div>
  );
}
