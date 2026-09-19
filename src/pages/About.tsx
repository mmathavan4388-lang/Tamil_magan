import { Handshake, Network, ShieldCheck, Users2 } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/ui/Button";

const pillars = [
  {
    icon: Network,
    title: "The Sivakasi Fireworks Ecosystem",
    body: "Sivakasi and the surrounding Virudhunagar district are home to India's largest concentration of licensed fireworks manufacturers. We connect this established manufacturing base with wholesale buyers nationwide.",
  },
  {
    icon: Handshake,
    title: "Connecting Manufacturers & Buyers",
    body: "Our platform structures the discovery, enquiry and quotation process between fireworks manufacturers and bulk/wholesale buyers, replacing informal, fragmented outreach with a transparent digital process.",
  },
  {
    icon: Users2,
    title: "Supplier Discovery",
    body: "Buyers can browse verified supplier profiles, compare product catalogues, MOQs and indicative pricing, and reach out directly through structured RFQs rather than cold enquiries.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Business Communication",
    body: "RFQs, quotations and business documentation are structured and recorded, helping both sides communicate clearly on pricing, taxes, shipping and delivery expectations.",
  },
];

export function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Connecting Sivakasi's Fireworks Manufacturers with Businesses Nationwide"
        description="KABERIAL PATTASU KADAI is a B2B marketplace built to bring transparency and structure to fireworks wholesale trade."
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-charcoal-100 bg-white p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-charcoal-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-charcoal-100 bg-charcoal-50 p-8">
          <h2 className="text-lg font-bold text-charcoal-900">Our Business Model</h2>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
            KABERIAL PATTASU KADAI operates as a marketplace platform &mdash; we do not hold physical fireworks
            inventory. Buyers submit requirements, verified suppliers respond with quotations, and both parties
            transact directly under their own agreed terms, subject to applicable laws and regulations. This keeps
            our platform focused on connection, discovery and transparent business communication rather than
            product fulfilment.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-lg font-bold text-charcoal-900">Nationwide Business Networking</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-charcoal-600">
            While our supplier base is concentrated in Sivakasi and Tamil Nadu, we work with buyers across India
            seeking a structured, verified way to source fireworks at wholesale scale.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button to="/suppliers">Browse Verified Suppliers</Button>
            <Button to="/contact" variant="outline">Get in Touch</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
