import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-charcoal-100 bg-charcoal-950 bg-noise">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-gold-400">{eyebrow}</p>}
        <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-charcoal-300">{description}</p>}
        {children}
      </div>
    </section>
  );
}
