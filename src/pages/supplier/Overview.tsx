import { BarChart3, Eye, ListChecks, ShoppingBag } from "lucide-react";
import { StatCard } from "../../components/ui/StatCard";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { Button } from "../../components/ui/Button";
import { supplierAnalytics, supplierRFQRequests } from "../../data/dashboard";

export function SupplierOverview() {
  return (
    <div>
      <DashboardPageHeader
        title="Supplier Dashboard"
        description="Monitor enquiries, RFQs and product performance."
        action={<Button to="/supplier/products/add" size="sm">+ Add Product</Button>}
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Total Enquiries" value={String(supplierAnalytics.totalEnquiries)} icon={ListChecks} trend="+12% this month" />
        <StatCard label="RFQs Received" value={String(supplierAnalytics.rfqsReceived)} icon={ListChecks} />
        <StatCard label="Orders" value={String(supplierAnalytics.orders)} icon={ShoppingBag} />
        <StatCard label="Product Views" value={supplierAnalytics.productViews} icon={Eye} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <DashboardCard title="Recent RFQ Requests" action={<Button to="/supplier/rfqs" size="sm" variant="ghost">View all</Button>}>
          <Table head={["RFQ ID", "Buyer", "Product", "Status"]}>
            {supplierRFQRequests.map((r) => (
              <tr key={r.id}>
                <Td className="font-semibold text-charcoal-800">{r.id}</Td>
                <Td>{r.buyer}</Td>
                <Td className="max-w-[180px] truncate">{r.product}</Td>
                <Td>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${r.status === "Quoted" ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700"}`}>
                    {r.status}
                  </span>
                </Td>
              </tr>
            ))}
          </Table>
        </DashboardCard>

        <DashboardCard title="Revenue Snapshot">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <BarChart3 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-2xl font-extrabold text-charcoal-900">{supplierAnalytics.revenue}</p>
              <p className="text-xs text-charcoal-500">Total revenue (demo)</p>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-charcoal-500">Conversion Rate</span><span className="font-semibold text-charcoal-800">{supplierAnalytics.conversionRate}</span></div>
            <div className="flex justify-between"><span className="text-charcoal-500">Product Views</span><span className="font-semibold text-charcoal-800">{supplierAnalytics.productViews}</span></div>
          </div>
          <Button to="/supplier/analytics" size="sm" variant="outline" className="mt-4 w-full">View Full Analytics</Button>
        </DashboardCard>
      </div>
    </div>
  );
}
