import { SHOP } from '../data/shop'

export default function MobileBottomNav({ cartCount, onCartClick, onSearchClick, onCategoriesClick }) {
  const items = [
    {
      key: 'home',
      label: 'Home',
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      key: 'categories',
      label: 'Categories',
      onClick: onCategoriesClick,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },
    {
      key: 'search',
      label: 'Search',
      onClick: onSearchClick,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      key: 'cart',
      label: 'Cart',
      onClick: onCartClick,
      badge: cartCount,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      key: 'whatsapp',
      label: 'WhatsApp',
      href: `https://wa.me/${SHOP.whatsappNumbers[0]}`,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"/></svg>
      ),
    },
  ]

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-panel/95 backdrop-blur border-t border-white/10 flex items-stretch">
      {items.map((item) =>
        item.href ? (
          <a
            key={item.key}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-white/60 hover:text-green-400"
          >
            {item.icon}
            <span className="text-[10px] font-medium">{item.label}</span>
          </a>
        ) : (
          <button
            key={item.key}
            onClick={item.onClick}
            className="relative flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-white/60 hover:text-brand-pink"
          >
            {item.icon}
            <span className="text-[10px] font-medium">{item.label}</span>
            {item.badge > 0 && (
              <span className="absolute top-1 right-1/4 min-w-[16px] h-[16px] px-1 rounded-full bg-brand-gold text-black text-[9px] font-bold flex items-center justify-center">
                {item.badge}
              </span>
            )}
          </button>
        ),
      )}
    </nav>
  )
}
