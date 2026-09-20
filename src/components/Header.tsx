import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { SearchBar } from "./SearchBar";
import { WhatsAppButton } from "./WhatsAppButton";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/categories", label: "Categories" },
  { to: "/gift-boxes", label: "Gift Boxes" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const { totalItems, openDrawer } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-brand-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-xl sm:text-2xl shadow-card">
              🎆
            </span>
            <span className="leading-tight">
              <span className="block font-extrabold text-brand-900 text-sm sm:text-lg tracking-tight">
                KABERIAL
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold text-gold-600 tracking-widest">
                PATTASU KADAI
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-50 text-brand-800"
                      : "text-brand-900/80 hover:bg-brand-50 hover:text-brand-800"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block w-64">
            <SearchBar />
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              aria-label="Search"
              className="md:hidden rounded-full p-2.5 text-brand-800 hover:bg-brand-50"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" strokeLinecap="round" />
              </svg>
            </button>

            <button
              aria-label="Open cart"
              onClick={openDrawer}
              className="relative rounded-full p-2.5 text-brand-800 hover:bg-brand-50"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 text-[11px] font-bold text-brand-950">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>

            <div className="hidden sm:block">
              <WhatsAppButton className="!py-2 !px-4 text-sm" label="WhatsApp" />
            </div>

            <button
              aria-label="Open menu"
              className="lg:hidden rounded-full p-2.5 text-brand-800 hover:bg-brand-50"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="md:hidden pb-3">
            <SearchBar autoFocus onSubmit={() => setSearchOpen(false)} />
          </div>
        )}
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-brand-100 bg-white px-4 py-3">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-medium ${
                    isActive ? "bg-brand-50 text-brand-800" : "text-brand-900/80 hover:bg-brand-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
