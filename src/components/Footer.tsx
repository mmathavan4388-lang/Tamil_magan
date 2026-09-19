import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";

const linkGroups = [
  {
    title: "Marketplace",
    links: [
      { label: "Products", to: "/products" },
      { label: "Categories", to: "/categories" },
      { label: "Verified Suppliers", to: "/suppliers" },
      { label: "Bulk Orders", to: "/bulk-orders" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "How It Works", to: "/how-it-works" },
      { label: "Contact", to: "/contact" },
      { label: "Compliance & Safety", to: "/compliance" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", to: "/legal/terms" },
      { label: "Privacy Policy", to: "/legal/privacy" },
      { label: "Refund Policy", to: "/legal/refund" },
      { label: "Compliance & Safety", to: "/compliance" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-charcoal-800 bg-charcoal-950 text-charcoal-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-display text-base font-extrabold tracking-tight text-white">KABERIAL PATTASU KADAI</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal-400">
              Sivakasi Fireworks Marketplace &mdash; connecting verified fireworks manufacturers with wholesale
              buyers across India. A marketplace platform, not a physical inventory holder.
            </p>
            <div className="mt-5 space-y-2 text-sm text-charcoal-400">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-500" /> Sivakasi, Tamil Nadu, India</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-500" /> +91 90000 00000 (Demo)</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-500" /> hello@kaberialpattasukadai.example</p>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-bold text-white">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-charcoal-400 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-charcoal-800 bg-charcoal-900/60 p-4 text-xs leading-relaxed text-charcoal-400">
          KABERIAL PATTASU KADAI is a marketplace platform. Buyers and suppliers are responsible for complying
          with all applicable laws, licences, permits, taxes, transportation rules and safety requirements.
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-charcoal-800 pt-6 text-xs text-charcoal-500 sm:flex-row">
          <p>&copy; 2026 KABERIAL PATTASU KADAI. All rights reserved.</p>
          <p>Demo marketplace UI &mdash; content shown is for illustration purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
