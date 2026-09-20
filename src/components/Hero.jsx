import { SHOP } from '../data/shop'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#1a0a1f] via-[#12081a] to-brand-bg border-b border-white/5"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-10 left-1/4 w-64 h-64 rounded-full bg-brand-pink/30 blur-3xl" />
        <div className="absolute top-20 right-10 w-56 h-56 rounded-full bg-brand-gold/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-green-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 text-center">
        <div className="text-4xl sm:text-5xl mb-3" aria-hidden="true">🎆 🎇 🧨</div>
        <h1
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-wide"
          style={{ fontFamily: "'Baloo Bhai 2', sans-serif" }}
        >
          {SHOP.name}
        </h1>
        <p className="mt-3 text-brand-pink font-semibold text-base sm:text-xl">
          {SHOP.tagline}
        </p>
        <p className="mt-1 text-white/60 text-sm sm:text-base">{SHOP.location}</p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-gold/15 border border-brand-gold/40 px-4 py-2">
          <span className="text-brand-gold font-bold text-sm sm:text-base">✨ Best Offer Prices</span>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#categories"
            className="rounded-full bg-brand-pink hover:bg-brand-pinkDark text-white font-semibold px-6 py-3 text-sm shadow-glow transition-colors"
          >
            Browse Categories
          </a>
          <a
            href={`https://wa.me/${SHOP.whatsappNumbers[0]}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 text-sm transition-colors"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
