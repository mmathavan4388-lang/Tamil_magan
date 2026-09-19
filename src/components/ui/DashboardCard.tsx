import type { ReactNode } from "react";

export function DashboardCard({ title, action, children, className = "" }: { title?: string; action?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-charcoal-100 bg-white shadow-card ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between border-b border-charcoal-100 px-5 py-4">
          {title && <h3 className="text-sm font-bold text-charcoal-900">{title}</h3>}
          {action}
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}

export function DashboardPageHeader({ title, description, action }: { title: string; description?: string; action?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-xl font-extrabold text-charcoal-900 sm:text-2xl">{title}</h1>
        {description && <p className="mt-1 text-sm text-charcoal-500">{description}</p>}
      </div>
      {action}
    </div>
  );
}
