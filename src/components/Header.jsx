import { SHOP } from '../data/shop'

export default function Header({
  search,
  onSearchChange,
  cartCount,
  onCartClick,
  onMenuClick,
}) {
  const primaryPhone = SHOP.phones[0]
  const waNumber = SHOP.whatsappNumbers[0]

  return (
    <header className="sticky top-0 z-40 bg-brand-panel/95 backdrop-blur border-b border-white/5 shadow-card">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-2.5">
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden p-2 -ml-2 text-white/80 hover:text-brand-pink"
            aria-label="Open categories"
            onClick={onMenuClick}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          </button>

          <a href="#top" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl" role="img" aria-hidden="true">🎇</span>
            <div className="leading-tight">
              <div className="font-extrabold text-sm sm:text-lg text-white tracking-wide" style={{ fontFamily: "'Baloo Bhai 2', sans-serif" }}>
                KABERIAL <span className="text-brand-pink">PATTASU KADAI</span>
              </div>
              <div className="hidden sm:block text-[11px] text-white/50">Sivakasi - Thayilpatti</div>
            </div>
          </a>

          <div className="flex-1 hidden md:block">
            <SearchInput search={search} onSearchChange={onSearchChange} />
          </div>

          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            <a
              href={`tel:${primaryPhone.replace(/\s/g, '')}`}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold px-3 py-2 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8z"/></svg>
              Call
            </a>
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-green-600 hover:bg-green-500 text-white text-xs font-semibold px-3 py-2 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.3-.13.58.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.93.29.14.48.21.55.33.07.12.07.7-.17 1.38z"/></svg>
              WhatsApp
            </a>
            <button
              onClick={onCartClick}
              className="relative inline-flex items-center gap-1.5 rounded-full bg-brand-pink hover:bg-brand-pinkDark text-white text-xs font-semibold px-3 py-2 shadow-glow transition-colors"
              aria-label="Open cart"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-brand-gold text-black text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="mt-2.5 md:hidden">
          <SearchInput search={search} onSearchChange={onSearchChange} />
        </div>
      </div>
    </header>
  )
}

function SearchInput({ search, onSearchChange }) {
  return (
    <div className="relative">
      <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" strokeLinecap="round" />
      </svg>
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search crackers... (English / தமிழ்)"
        className="w-full rounded-full bg-brand-card border border-white/10 text-white text-sm pl-9 pr-4 py-2.5 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-pink/60"
      />
    </div>
  )
}
