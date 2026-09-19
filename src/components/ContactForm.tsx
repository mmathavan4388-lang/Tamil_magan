import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import { Button } from "./ui/Button";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        <h3 className="mt-4 text-base font-bold text-charcoal-900">Enquiry sent successfully</h3>
        <p className="mt-1.5 max-w-sm text-sm text-charcoal-600">
          This is a demo submission — no data was transmitted. In production this enquiry would route to our
          business team and relevant verified suppliers.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline" size="sm" className="mt-5">
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-charcoal-100 bg-white p-6 shadow-card">
      <div className={`grid grid-cols-1 gap-4 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2"}`}>
        <Field label="Name" placeholder="Your full name" required />
        <Field label="Business Name" placeholder="Company / firm name" />
        <Field label="Phone" placeholder="+91 90000 00000" type="tel" required />
        <Field label="Email" placeholder="you@company.com" type="email" required />
        <Field label="City" placeholder="e.g. Chennai" />
        <Field label="Requirement" placeholder="e.g. Flower pots, 500 boxes" />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">Message</label>
        <textarea
          rows={4}
          placeholder="Tell us more about your requirement..."
          className="w-full rounded-xl border border-charcoal-200 px-3.5 py-2.5 text-sm text-charcoal-900 outline-none placeholder:text-charcoal-400 focus:border-brand-500"
        />
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button type="submit" disabled={status === "loading"} icon={status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}>
          {status === "loading" ? "Sending..." : "Send Enquiry"}
        </Button>
        <Button type="button" variant="secondary">Request Bulk Quote</Button>
        <Button type="button" variant="outline" icon={<MessageCircle className="h-4 w-4 text-emerald-600" />}>
          WhatsApp Enquiry
        </Button>
      </div>
      <p className="mt-3 text-xs text-charcoal-400">
        By submitting, you agree to be contacted regarding your enquiry. Demo form — no data is stored or sent.
      </p>
    </form>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">
        {label} {required && <span className="text-brand-600">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-charcoal-200 px-3.5 py-2.5 text-sm text-charcoal-900 outline-none placeholder:text-charcoal-400 focus:border-brand-500"
      />
    </div>
  );
}
