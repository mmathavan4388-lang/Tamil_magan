import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { WHATSAPP_NUMBERS, BUSINESS_NAME } from "../lib/constants";

const ITEMS = [
  {
    to: "/",
    label: "Home",
    icon: (
      <path d="M3 11.5 12 4l9 7.5M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    to: "/categories",
    label: "Categories",
    icon: <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" strokeLinejoin="round" />,
  },
  {
    to: "/products?q=",
    label: "Search",
    icon: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" strokeLinecap="round" /></>,
  },
];

export function MobileBottomNav() {
  const { totalItems, openDrawer } = useCart();
  const message = encodeURIComponent(`Hi ${BUSINESS_NAME}, I would like to place an order.`);

  return (
    <nav className="safe-bottom fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-brand-100 bg-white/95 backdrop-blur shadow-[0_-4px_16px_rgba(8,60,37,0.08)]">
      <div className="grid grid-cols-5">
        {ITEMS.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 py-2.5 text-[11px] font-medium ${
                isActive ? "text-brand-700" : "text-brand-900/60"
              }`
            }
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {item.icon}
            </svg>
            {item.label}
          </NavLink>
        ))}

        <button
          onClick={openDrawer}
          className="relative flex flex-col items-center justify-center gap-0.5 py-2.5 text-[11px] font-medium text-brand-900/60"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Cart
          {totalItems > 0 && (
            <span className="absolute top-1 right-3.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 text-[9px] font-bold text-brand-950">
              {totalItems > 9 ? "9+" : totalItems}
            </span>
          )}
        </button>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBERS.primary}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-[11px] font-medium text-[#25D366]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.96 9.96 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10-10Z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
