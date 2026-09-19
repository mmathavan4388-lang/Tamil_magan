import { BarChart3, Eye, ListChecks, ShoppingBag, TrendingUp, Users } from "lucide-react";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { StatCard } from "../../components/ui/StatCard";
import { supplierAnalytics } from "../../data/dashboard";

const monthly = [
  { month: "Apr", value: 40 },
  { month: "May", value: 55 },
  { month: "Jun", value: 48 },
  { month: "Jul", value: 62 },
  { month: "Aug", value: 70 },
  { month: "Sep", value: 84 },
];

export function SupplierAnalytics() {
  const max = Math.max(...monthly.map((m) => m.value));
  return (
    <div>
      <DashboardPageHeader title="Analytics" description="Track your marketplace performance over time." />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <StatCard label="Total Enquiries" value={String(supplierAnalytics.totalEnquiries)} icon={ListChecks} trend="+12% this month" />
        <StatCard label="RFQs Received" value={String(supplierAnalytics.rfqsReceived)} icon={Users} />
        <StatCard label="Orders" value={String(supplierAnalytics.orders)} icon={ShoppingBag} />
        <StatCard label="Revenue" value={supplierAnalytics.revenue} icon={TrendingUp} trend="+8% this month" />
        <StatCard label="Product Views" value={supplierAnalytics.productViews} icon={Eye} />
        <StatCard label="Conversion Rate" value={supplierAnalytics.conversionRate} icon={BarChart3} />
      </div>

      <div className="mt-6">
        <DashboardCard title="Enquiries Trend (last 6 months)">
          <div className="flex h-48 items-end gap-4 px-2">
            {monthly.map((m) => (
              <div key={m.month} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full flex-1 items-end">
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-brand-600 to-brand-400"
                    style={{ height: `${(m.value / max) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-charcoal-500">{m.month}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-charcoal-400">Demo data for illustration purposes only.</p>
        </DashboardCard>
      </div>
    </div>
  );
}
