import { BarChart3, ShoppingBag, TrendingUp, Users } from "lucide-react";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { StatCard } from "../../components/ui/StatCard";

const monthly = [
  { month: "Apr", enquiries: 320, orders: 60 },
  { month: "May", enquiries: 410, orders: 78 },
  { month: "Jun", enquiries: 390, orders: 72 },
  { month: "Jul", enquiries: 480, orders: 95 },
  { month: "Aug", enquiries: 560, orders: 118 },
  { month: "Sep", enquiries: 620, orders: 134 },
];

export function AdminAnalytics() {
  const max = Math.max(...monthly.map((m) => m.enquiries));
  return (
    <div>
      <DashboardPageHeader title="Platform Analytics" description="Marketplace-wide activity across suppliers, buyers and orders." />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Total Enquiries" value="6,240" icon={Users} trend="+9% this month" />
        <StatCard label="Total Orders" value="1,180" icon={ShoppingBag} trend="+14% this month" />
        <StatCard label="GMV (Demo)" value="₹3.2Cr" icon={TrendingUp} />
        <StatCard label="Avg. Conversion" value="11.8%" icon={BarChart3} />
      </div>

      <div className="mt-6">
        <DashboardCard title="Enquiries vs. Orders (last 6 months)">
          <div className="flex h-52 items-end gap-4 px-2">
            {monthly.map((m) => (
              <div key={m.month} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full flex-1 items-end gap-1">
                  <div className="flex-1 rounded-t-lg bg-gradient-to-t from-brand-600 to-brand-400" style={{ height: `${(m.enquiries / max) * 100}%` }} />
                  <div className="flex-1 rounded-t-lg bg-gradient-to-t from-gold-500 to-gold-300" style={{ height: `${(m.orders / max) * 100}%` }} />
                </div>
                <span className="text-xs font-medium text-charcoal-500">{m.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-center gap-6 text-xs text-charcoal-500">
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-brand-600" /> Enquiries</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-gold-400" /> Orders</span>
          </div>
          <p className="mt-3 text-center text-xs text-charcoal-400">Demo data for illustration purposes only.</p>
        </DashboardCard>
      </div>
    </div>
  );
}
