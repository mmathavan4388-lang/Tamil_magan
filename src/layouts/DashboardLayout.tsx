import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { Menu, Sparkles, X } from "lucide-react";
import { DemoBadge } from "../components/ui/Badge";

export interface DashboardNavItem {
  to: string;
  label: string;
  icon: LucideIcon;
  end?: boolean;
}

export function DashboardLayout({
  navItems,
  roleLabel,
  userName,
}: {
  navItems: DashboardNavItem[];
  roleLabel: string;
  userName: string;
}) {
  const [open, setOpen] = useState(false);

  const sidebarContent = (
    <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] font-semibold transition-colors ${
              isActive ? "bg-brand-600 text-white shadow-card" : "text-charcoal-300 hover:bg-charcoal-800 hover:text-white"
            }`
          }
        >
          <item.icon className="h-4 w-4 shrink-0" />
          {item.label}
        </NavLink>
      ))}
    </nav>
  );

  return (
    <div className="flex min-h-screen bg-charcoal-50">
      <aside className="hidden w-64 flex-col bg-charcoal-950 lg:flex">
        <div className="flex items-center gap-2.5 border-b border-charcoal-800 px-4 py-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 text-white">
            <Sparkles className="h-4.5 w-4.5" />
          </span>
          <div className="leading-tight">
            <p className="text-[13px] font-extrabold text-white">KABERIAL</p>
            <p className="text-[10px] font-medium text-charcoal-400">{roleLabel}</p>
          </div>
        </div>
        {sidebarContent}
        <div className="border-t border-charcoal-800 p-4">
          <Link to="/" className="text-xs font-semibold text-charcoal-400 hover:text-white">
            &larr; Back to marketplace
          </Link>
        </div>
      </aside>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-charcoal-950/60" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 flex h-full w-72 flex-col bg-charcoal-950">
            <div className="flex items-center justify-between border-b border-charcoal-800 px-4 py-4">
              <span className="text-[13px] font-extrabold text-white">{roleLabel}</span>
              <button onClick={() => setOpen(false)} className="rounded-lg p-1.5 text-charcoal-300 hover:bg-charcoal-800">
                <X className="h-4 w-4" />
              </button>
            </div>
            {sidebarContent}
          </div>
        </div>
      )}

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-charcoal-100 bg-white px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            <button onClick={() => setOpen(true)} className="rounded-lg p-2 text-charcoal-600 hover:bg-charcoal-50 lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
            <div>
              <p className="text-sm font-bold text-charcoal-900">Welcome back, {userName}</p>
              <p className="text-xs text-charcoal-400">{roleLabel} &middot; Demo account</p>
            </div>
          </div>
          <DemoBadge />
        </header>
        <main className="flex-1 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
