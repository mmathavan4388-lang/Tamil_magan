import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, ImagePlus, Loader2, PackagePlus } from "lucide-react";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Button } from "../../components/ui/Button";
import { categories } from "../../data/categories";

export function SupplierAddProduct() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <div>
      <DashboardPageHeader title="Add Product" description="List a new wholesale product for buyer discovery." />

      {status === "success" ? (
        <DashboardCard>
          <div className="flex flex-col items-center py-10 text-center">
            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
            <h3 className="mt-3 text-base font-bold text-charcoal-900">Product submitted for review</h3>
            <p className="mt-1.5 max-w-sm text-sm text-charcoal-500">
              Demo submission &mdash; in production, this listing would be sent to the Admin Panel for approval
              before appearing on the marketplace.
            </p>
            <Button variant="outline" size="sm" className="mt-5" onClick={() => setStatus("idle")}>Add Another Product</Button>
          </div>
        </DashboardCard>
      ) : (
        <form onSubmit={handleSubmit}>
          <DashboardCard title="Product Details">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Product Name" required><input required className="input" placeholder="e.g. Premium Flower Pot" /></Field>
              <Field label="Category" required>
                <select required className="input">
                  <option value="">Select category</option>
                  {categories.map((c) => <option key={c.id} value={c.slug}>{c.name}</option>)}
                </select>
              </Field>
              <Field label="MOQ" required><input required className="input" placeholder="e.g. 100 Boxes" /></Field>
              <Field label="Available Quantity" required><input required className="input" placeholder="e.g. 5,000 Boxes / month" /></Field>
              <Field label="Wholesale Price Range"><input className="input" placeholder="e.g. ₹180 – ₹240 / box" /></Field>
              <Field label="Packaging Details"><input className="input" placeholder="e.g. 10 pcs per box, 50 boxes per carton" /></Field>
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">Description</label>
              <textarea rows={4} className="input" placeholder="Describe the product, its features and ideal use case..." />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">Product Images</label>
              <div className="flex flex-wrap gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex h-20 w-20 items-center justify-center rounded-xl border-2 border-dashed border-charcoal-200 text-charcoal-300">
                    <ImagePlus className="h-5 w-5" />
                  </div>
                ))}
              </div>
              <p className="mt-1.5 text-xs text-charcoal-400">Demo uploader &mdash; image upload is not wired to storage yet.</p>
            </div>
          </DashboardCard>

          <div className="mt-5 flex justify-end">
            <Button type="submit" disabled={status === "loading"} icon={status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <PackagePlus className="h-4 w-4" />}>
              {status === "loading" ? "Submitting..." : "Submit for Approval"}
            </Button>
          </div>
        </form>
      )}

      <style>{`.input { width: 100%; border-radius: 0.75rem; border: 1px solid #e7e7e9; padding: 0.625rem 0.875rem; font-size: 0.875rem; outline: none; } .input:focus { border-color: #c8342c; }`}</style>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">{label} {required && <span className="text-brand-600">*</span>}</label>
      {children}
    </div>
  );
}
