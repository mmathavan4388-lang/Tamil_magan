import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start"} ${action ? "sm:flex-row sm:items-end sm:justify-between sm:text-left" : ""}`}>
      <div className={align === "center" && !action ? "max-w-2xl" : ""}>
        {eyebrow && (
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">{eyebrow}</p>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-charcoal-900 sm:text-3xl">{title}</h2>
        {description && <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-charcoal-500">{description}</p>}
      </div>
      {action}
    </div>
  );
}
