import { useParams } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { NotFound } from "./NotFound";

const content: Record<string, { title: string; body: string[] }> = {
  terms: {
    title: "Terms & Conditions",
    body: [
      "KABERIAL PATTASU KADAI is a B2B marketplace platform connecting fireworks manufacturers/suppliers with wholesale buyers. We do not hold physical inventory and are not a party to transactions between buyers and suppliers.",
      "Buyers and suppliers are solely responsible for complying with all applicable laws, licences, permits, taxes, transportation rules and safety requirements related to fireworks manufacture, sale, storage and transport.",
      "Business and GST verification badges reflect documentation submitted to and reviewed by our admin team. They do not constitute a government certification, safety guarantee, or endorsement of any product or supplier.",
      "Pricing shown on product listings is indicative and may vary according to quantity, season, taxes and individual supplier terms. Final pricing is agreed directly between buyer and supplier via RFQ and quotation.",
      "This is placeholder legal content for a demonstration marketplace UI and should be reviewed and replaced with counsel-approved terms before production use.",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    body: [
      "This demo marketplace does not collect, store or transmit real personal data. Forms on this preview site are illustrative only and do not submit information to any backend service.",
      "In a production deployment, this page would describe what business and personal information is collected (account details, RFQ content, business/GST documents), how it is used, how long it is retained, and buyer/supplier rights regarding their data.",
      "This is placeholder legal content and should be reviewed and replaced with counsel-approved privacy terms before production use.",
    ],
  },
  refund: {
    title: "Refund Policy",
    body: [
      "As a marketplace platform, KABERIAL PATTASU KADAI is not a party to the sale transaction between buyers and suppliers, and does not process payments directly on their behalf in this preview.",
      "Refund, cancellation and return terms for a specific order are agreed directly between the buyer and the supplier as part of the accepted quotation and should be documented in writing before order confirmation.",
      "This is placeholder legal content and should be reviewed and replaced with counsel-approved refund terms before production use.",
    ],
  },
};

export function LegalPage() {
  const { page } = useParams();
  const entry = page ? content[page] : undefined;
  if (!entry) return <NotFound />;

  return (
    <div>
      <PageHero eyebrow="Legal" title={entry.title} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-5">
          {entry.body.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-charcoal-600">{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
