import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, ClipboardList, Handshake, Loader2, ShieldCheck } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/ui/Button";
import { categories } from "../data/categories";

export function BulkOrders() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 1000);
  }

  return (
    <div>
      <PageHero
        eyebrow="Bulk Ordering"
        title="Request a Bulk Quote (RFQ)"
        description="Submit your requirement once. Verified suppliers will respond with wholesale quotations for you to compare."
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-20 text-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-600" />
                <h2 className="mt-4 text-xl font-bold text-charcoal-900">RFQ submitted successfully</h2>
                <p className="mt-2 max-w-md text-sm text-charcoal-600">
                  This is a demo submission. In production, your RFQ would be sent to matching verified suppliers,
                  and quotations would appear in your Buyer Dashboard under &ldquo;My RFQs&rdquo;.
                </p>
                <Button onClick={() => setStatus("idle")} variant="outline" className="mt-6">Submit Another RFQ</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-charcoal-100 bg-white p-6 shadow-card sm:p-8">
                <h2 className="text-lg font-bold text-charcoal-900">Requirement Details</h2>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField label="Product / Category" required>
                    <select required className="input">
                      <option value="">Select a category</option>
                      {categories.map((c) => (
                        <option key={c.id} value={c.slug}>{c.name}</option>
                      ))}
                    </select>
                  </FormField>
                  <FormField label="Quantity Required" required>
                    <input required type="text" placeholder="e.g. 500 Boxes" className="input" />
                  </FormField>
                  <FormField label="Delivery Location" required>
                    <input required type="text" placeholder="City, State" className="input" />
                  </FormField>
                  <FormField label="Required Date" required>
                    <input required type="date" className="input" />
                  </FormField>
                </div>

                <h2 className="mt-8 text-lg font-bold text-charcoal-900">Business Details</h2>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField label="Business Name" required>
                    <input required type="text" placeholder="Your company name" className="input" />
                  </FormField>
                  <FormField label="Contact Person" required>
                    <input required type="text" placeholder="Full name" className="input" />
                  </FormField>
                  <FormField label="Phone" required>
                    <input required type="tel" placeholder="+91 90000 00000" className="input" />
                  </FormField>
                  <FormField label="Email" required>
                    <input required type="email" placeholder="you@company.com" className="input" />
                  </FormField>
                  <FormField label="GST Number (if applicable)">
                    <input type="text" placeholder="22AAAAA0000A1Z5" className="input" />
                  </FormField>
                  <FormField label="Preferred Supplier (optional)">
                    <input type="text" placeholder="Leave blank to receive quotes from all matching suppliers" className="input" />
                  </FormField>
                </div>

                <div className="mt-5">
                  <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">Additional Requirements</label>
                  <textarea rows={4} placeholder="Packaging preferences, delivery instructions, etc." className="input" />
                </div>

                <label className="mt-5 flex items-start gap-2.5 text-xs text-charcoal-500">
                  <input required type="checkbox" className="mt-0.5 h-4 w-4 rounded border-charcoal-300 text-brand-600" />
                  I confirm that this enquiry is for legitimate wholesale/bulk business purposes and I will comply
                  with all applicable fireworks licences, permits and transport regulations.
                </label>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-6"
                  disabled={status === "loading"}
                  icon={status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ClipboardList className="h-4 w-4" />}
                >
                  {status === "loading" ? "Submitting RFQ..." : "Send RFQ"}
                </Button>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-charcoal-100 bg-white p-5 shadow-card">
              <h3 className="flex items-center gap-2 text-sm font-bold text-charcoal-900">
                <Handshake className="h-4 w-4 text-brand-600" /> What happens next?
              </h3>
              <ol className="mt-3 space-y-2.5 text-sm text-charcoal-600">
                <li>1. Your RFQ is shared with matching verified suppliers.</li>
                <li>2. Suppliers respond with pricing, taxes, shipping &amp; delivery timelines.</li>
                <li>3. Compare quotations in your Buyer Dashboard.</li>
                <li>4. Accept a quote and coordinate directly with the supplier.</li>
              </ol>
            </div>
            <div className="rounded-2xl border border-gold-200 bg-gold-50 p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold text-charcoal-900">
                <ShieldCheck className="h-4 w-4 text-gold-700" /> Verified Suppliers Only
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-charcoal-600">
                RFQs are routed to suppliers with submitted business/GST documentation. Buyers remain responsible
                for independent due diligence and compliance with applicable laws.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <style>{`.input { width: 100%; border-radius: 0.75rem; border: 1px solid #e7e7e9; padding: 0.625rem 0.875rem; font-size: 0.875rem; outline: none; } .input:focus { border-color: #c8342c; }`}</style>
    </div>
  );
}

function FormField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">
        {label} {required && <span className="text-brand-600">*</span>}
      </label>
      {children}
    </div>
  );
}
