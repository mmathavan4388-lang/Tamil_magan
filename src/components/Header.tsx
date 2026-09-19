import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ListChecks,
  LogIn,
  Menu,
  Search,
  ShoppingCart,
  Sparkles,
  Store,
  X,
} from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/categories", label: "Categories" },
  { to: "/price-list", label: "Price List" },
  { to: "/suppliers", label: "Verified Suppliers" },
  { to: "/bulk-orders", label: "Bulk Orders" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-charcoal-100 bg-white/95 backdrop-blur">
      <div className="border-b border-charcoal-100 bg-charcoal-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-[11px] sm:px-6 lg:px-8">
          <p className="flex items-center gap-1.5 text-charcoal-200">
            <Sparkles className="h-3 w-3 text-gold-400" />
            Verified B2B fireworks marketplace &mdash; wholesale &amp; bulk enquiries only
          </p>
          <Link to="/compliance" className="hidden text-charcoal-300 hover:text-white sm:block">
            Compliance &amp; Safety
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1600px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-card">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-extrabold tracking-tight text-charcoal-900 sm:text-base">
              KABERIAL PATTASU KADAI
            </span>
            <span className="hidden text-[11px] font-medium text-charcoal-400 sm:block">
              Sivakasi Fireworks Marketplace
            </span>
          </span>
        </Link>

        <nav className="ml-2 hidden flex-1 items-center gap-0.5 min-[1400px]:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-semibold transition-colors ${
                  isActive ? "bg-brand-50 text-brand-700" : "text-charcoal-600 hover:bg-charcoal-50 hover:text-charcoal-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="rounded-lg p-2 text-charcoal-500 hover:bg-charcoal-50 hover:text-charcoal-900"
          >
            <Search className="h-5 w-5" />
          </button>

          <div className="hidden items-center gap-0.5 lg:flex">
            <Link to="/login" title="Login / Register" className="flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-semibold text-charcoal-600 hover:bg-charcoal-50">
              <LogIn className="h-4 w-4 shrink-0" /> <span className="hidden 2xl:inline">Login / Register</span>
            </Link>
            <Link to="/buyer" title="Buyer Dashboard" className="flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-semibold text-charcoal-600 hover:bg-charcoal-50">
              <LayoutDashboard className="h-4 w-4 shrink-0" /> <span className="hidden 2xl:inline">Buyer</span>
            </Link>
            <Link to="/supplier" title="Supplier Dashboard" className="flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-semibold text-charcoal-600 hover:bg-charcoal-50">
              <Store className="h-4 w-4 shrink-0" /> <span className="hidden 2xl:inline">Supplier</span>
            </Link>
            <Link to="/buyer/rfqs" aria-label="Cart / RFQ" title="Cart / RFQ" className="relative rounded-lg p-2 text-charcoal-500 hover:bg-charcoal-50 hover:text-charcoal-900">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-[9px] font-bold text-white">3</span>
            </Link>
          </div>

          <Link
            to="/bulk-orders"
            className="ml-1 hidden items-center gap-1.5 whitespace-nowrap rounded-xl bg-brand-600 px-4 py-2.5 text-[13px] font-bold text-white shadow-card hover:bg-brand-700 md:flex"
          >
            <ListChecks className="h-4 w-4" /> Request Bulk Quote
          </Link>

          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-charcoal-600 hover:bg-charcoal-50 min-[1400px]:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-charcoal-100 bg-charcoal-50 px-4 py-3 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl items-center gap-2 rounded-xl border border-charcoal-200 bg-white px-3 py-2 shadow-card">
            <Search className="h-4 w-4 text-charcoal-400" />
            <input
              autoFocus
              type="text"
              placeholder="Search fireworks, products, suppliers or categories..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-charcoal-400"
            />
            <button onClick={() => setSearchOpen(false)} className="rounded-md p-1 text-charcoal-400 hover:bg-charcoal-100">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

    </header>

    {mobileOpen && (
      <div className="fixed inset-0 z-50 min-[1400px]:hidden">
        <div className="absolute inset-0 bg-charcoal-950/50" onClick={() => setMobileOpen(false)} />
        <div className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col gap-1 overflow-y-auto bg-white p-5 shadow-2xl">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-display text-sm font-extrabold text-charcoal-900">Menu</span>
            <button onClick={() => setMobileOpen(false)} className="rounded-lg p-2 text-charcoal-500 hover:bg-charcoal-50">
              <X className="h-5 w-5" />
            </button>
          </div>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-sm font-semibold ${isActive ? "bg-brand-50 text-brand-700" : "text-charcoal-700 hover:bg-charcoal-50"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="my-2 border-t border-charcoal-100" />
          <Link to="/login" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-semibold text-charcoal-700 hover:bg-charcoal-50">
            Login / Register
          </Link>
          <Link to="/buyer" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-semibold text-charcoal-700 hover:bg-charcoal-50">
            Buyer Dashboard
          </Link>
          <Link to="/supplier" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-semibold text-charcoal-700 hover:bg-charcoal-50">
            Supplier Dashboard
          </Link>
          <Link
            to="/bulk-orders"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-4 py-3 text-sm font-bold text-white"
          >
            Request Bulk Quote
          </Link>
        </div>
      </div>
    )}
    </>
  );
}
