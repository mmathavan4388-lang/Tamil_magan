import { FileText, Heart, ListChecks, ShoppingBag } from "lucide-react";
import { StatCard } from "../../components/ui/StatCard";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { StatusPill } from "../../components/ui/StatusPill";
import { Button } from "../../components/ui/Button";
import { demoOrders, demoRFQs } from "../../data/dashboard";

export function BuyerOverview() {
  return (
    <div>
      <DashboardPageHeader
        title="Buyer Dashboard"
        description="Track your RFQs, quotations and orders in one place."
        action={<Button to="/bulk-orders" size="sm">+ New RFQ</Button>}
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Active RFQs" value="4" icon={ListChecks} />
        <StatCard label="Quotes Received" value="10" icon={FileText} />
        <StatCard label="Orders Placed" value="12" icon={ShoppingBag} />
        <StatCard label="Saved Suppliers" value="6" icon={Heart} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DashboardCard title="Recent RFQs" action={<Button to="/buyer/rfqs" size="sm" variant="ghost">View all</Button>}>
          <Table head={["RFQ ID", "Product", "Status"]}>
            {demoRFQs.slice(0, 4).map((r) => (
              <tr key={r.id}>
                <Td className="font-semibold text-charcoal-800">{r.id}</Td>
                <Td className="max-w-[180px] truncate">{r.product}</Td>
                <Td><StatusPill status={r.status} /></Td>
              </tr>
            ))}
          </Table>
        </DashboardCard>

        <DashboardCard title="Recent Orders" action={<Button to="/buyer/orders" size="sm" variant="ghost">View all</Button>}>
          <Table head={["Order ID", "Product", "Status"]}>
            {demoOrders.map((o) => (
              <tr key={o.id}>
                <Td className="font-semibold text-charcoal-800">{o.id}</Td>
                <Td className="max-w-[180px] truncate">{o.product}</Td>
                <Td><StatusPill status={o.status} /></Td>
              </tr>
            ))}
          </Table>
        </DashboardCard>
      </div>
    </div>
  );
}
