import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-charcoal-200 bg-charcoal-50/60 px-6 py-14 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-charcoal-400 shadow-card">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-base font-bold text-charcoal-900">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm text-charcoal-500">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
