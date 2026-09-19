import type { LucideIcon } from "lucide-react";

export function StatCard({
  label,
  value,
  icon: Icon,
  trend,
}: {
  label: string;
  value: string;
  icon?: LucideIcon;
  trend?: string;
}) {
  return (
    <div className="rounded-2xl border border-charcoal-100 bg-white p-5 shadow-card">
      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-400">{label}</p>
        {Icon && (
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
            <Icon className="h-4 w-4" />
          </span>
        )}
      </div>
      <p className="mt-3 text-2xl font-extrabold text-charcoal-900">{value}</p>
      {trend && <p className="mt-1 text-xs font-medium text-emerald-600">{trend}</p>}
    </div>
  );
}
