import { AlertTriangle, FileText, Flame, MapPinOff, ShieldCheck, Truck, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";

const sections = [
  {
    icon: UserCheck,
    title: "Age Restrictions",
    body: "Fireworks purchase and use are subject to age restrictions under applicable state and local regulations. Suppliers and buyers must ensure compliance with any minimum age requirements that apply to their transaction and jurisdiction.",
  },
  {
    icon: FileText,
    title: "Required Licences",
    body: "Manufacture, storage, transport and sale of fireworks require valid licences under the Explosives Act and related rules. Suppliers listed on the marketplace are expected to hold applicable manufacturing and trade licences; buyers undertaking bulk resale may require their own trade licences.",
  },
  {
    icon: ShieldCheck,
    title: "Supplier Verification",
    body: "Suppliers submit business and GST documentation for admin review before receiving a “Verified Supplier” badge. This reflects documentation on file with KABERIAL PATTASU KADAI and does not constitute a government certification, safety guarantee, or endorsement of any specific product.",
  },
  {
    icon: FileText,
    title: "GST / Business Documentation",
    body: "Wholesale transactions typically require valid GST registration for both buyer and supplier. Buyers and suppliers are responsible for issuing and retaining appropriate tax documentation for their transactions.",
  },
  {
    icon: Truck,
    title: "Legal Transportation Requirements",
    body: "Transport of fireworks is a regulated activity requiring compliant packaging, labelling, and, where applicable, transport permits. Buyers and suppliers must arrange transportation through parties authorised to carry hazardous/regulated goods, in compliance with central and state transport rules.",
  },
  {
    icon: MapPinOff,
    title: "Restricted Destinations",
    body: "Certain states, districts, or local authorities may restrict or prohibit the sale, transport, or use of fireworks, including seasonal or court-mandated restrictions. Buyers are responsible for confirming that their delivery destination permits the products being ordered.",
  },
  {
    icon: Flame,
    title: "Safety Information",
    body: "Fireworks should always be stored in licensed, ventilated, fire-safe premises away from open flames and residential ignition sources. Never demonstrate, test, or use fireworks in unsafe, crowded, or unauthorised locations. Follow all manufacturer safety instructions and local fire safety guidance.",
  },
];

export function Compliance() {
  return (
    <div>
      <PageHero
        eyebrow="Regulated Product Category"
        title="Fireworks Compliance & Safety"
        description="Fireworks are a regulated product category in India. Please review the following guidance before placing or fulfilling any order."
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-start gap-3 rounded-2xl border border-gold-200 bg-gold-50 p-5">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-gold-700" />
          <p className="text-sm leading-relaxed text-charcoal-700">
            KABERIAL PATTASU KADAI is a marketplace platform. Buyers and suppliers are responsible for complying
            with all applicable laws, licences, permits, taxes, transportation rules and safety requirements.
            We do not verify end-use compliance for every transaction and do not claim government approval or
            certification of any listed product or supplier unless explicitly stated and independently verifiable.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="flex gap-4 border-b border-charcoal-100 pb-8 last:border-0">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-base font-bold text-charcoal-900">{s.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal-600">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-charcoal-100 bg-charcoal-50 p-6">
          <h2 className="text-base font-bold text-charcoal-900">Terms &amp; Conditions Summary</h2>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
            By using KABERIAL PATTASU KADAI, buyers and suppliers agree to transact lawfully, provide accurate
            business information, and independently verify the licences, permits and regulatory requirements
            applicable to their specific state, product category and quantity. For the complete terms, see our{" "}
            <Link to="/legal/terms" className="font-semibold text-brand-600">Terms &amp; Conditions</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
