const REASONS = [
  { icon: "🏭", title: "Direct from Sivakasi", desc: "Sourced from the fireworks capital of India for authentic quality." },
  { icon: "💰", title: "Best Net Rates", desc: "Transparent pricing with attractive offer rates on every product." },
  { icon: "🚚", title: "Trusted Ordering", desc: "Easy WhatsApp ordering with quick response from our team." },
  { icon: "🛡️", title: "Quality Assured", desc: "Carefully selected products for a safe and joyful celebration." },
];

export function WhyChooseUs() {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold text-brand-950 mb-6 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {REASONS.map((r) => (
          <div
            key={r.title}
            className="rounded-2xl bg-white p-4 sm:p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
          >
            <span className="text-3xl sm:text-4xl">{r.icon}</span>
            <h3 className="mt-3 font-semibold text-brand-950 text-sm sm:text-base">{r.title}</h3>
            <p className="mt-1 text-xs sm:text-sm text-brand-600/80">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
