const POINTS = [
  "Follow all applicable fireworks laws and local regulations in your area.",
  "Only legally permitted products are listed on this website.",
  "Age restrictions apply where required by law — fireworks are not for sale to minors.",
  "Shipping and delivery availability depends on applicable laws and carrier restrictions.",
  "Always read manufacturer instructions and use fireworks under adult supervision.",
  "Light one item at a time, at a safe distance, on a clear, flat, non-flammable surface.",
  "Keep water or a fire extinguisher nearby. Never re-light a dud firework.",
  "Store fireworks in a cool, dry place, away from open flame and direct sunlight.",
];

export function SafetyNotice() {
  return (
    <section className="rounded-2xl border border-gold-500/30 bg-gold-500/5 p-5 sm:p-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">⚠️</span>
        <h2 className="text-lg sm:text-xl font-bold text-brand-950">Safety & Legal Information</h2>
      </div>
      <ul className="grid gap-2.5 sm:grid-cols-2 text-sm text-brand-800/90">
        {POINTS.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600" />
            {point}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-brand-600/80">
        We do not make claims about product certification or legality beyond what is stated by the
        manufacturer. Please verify local regulations before purchase and use.
      </p>
    </section>
  );
}
