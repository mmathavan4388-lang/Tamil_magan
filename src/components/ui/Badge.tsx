import type { ReactNode } from "react";
import { BadgeCheck } from "lucide-react";

export function VerifiedBadge({ verified = true }: { verified?: boolean }) {
  if (!verified) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-charcoal-100 px-2.5 py-1 text-xs font-semibold text-charcoal-500">
        Verification Pending
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
      <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
      Verified Supplier
    </span>
  );
}

export function DemoBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`demo-badge inline-flex items-center rounded-full border border-gold-300 bg-gold-50 px-2 py-0.5 font-bold uppercase text-gold-800 ${className}`}
    >
      Demo Content
    </span>
  );
}

export function Pill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "brand" | "gold" | "green" }) {
  const tones = {
    neutral: "bg-charcoal-100 text-charcoal-600",
    brand: "bg-brand-50 text-brand-700",
    gold: "bg-gold-50 text-gold-800",
    green: "bg-emerald-50 text-emerald-700",
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}
