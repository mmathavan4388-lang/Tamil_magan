import { ShoppingBag } from "lucide-react";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { StatusPill } from "../../components/ui/StatusPill";
import { EmptyState } from "../../components/ui/EmptyState";
import { demoOrders } from "../../data/dashboard";

export function BuyerOrders() {
  return (
    <div>
      <DashboardPageHeader title="My Orders" description="Track orders placed with verified suppliers." />
      {demoOrders.length === 0 ? (
        <EmptyState icon={ShoppingBag} title="No orders yet" description="Orders will appear here once you accept a supplier quotation." />
      ) : (
        <DashboardCard>
          <Table head={["Order ID", "Product", "Supplier", "Quantity", "Amount", "Date", "Status"]}>
            {demoOrders.map((o) => (
              <tr key={o.id}>
                <Td className="font-semibold text-charcoal-800">{o.id}</Td>
                <Td>{o.product}</Td>
                <Td>{o.supplier}</Td>
                <Td>{o.quantity}</Td>
                <Td>{o.amount}</Td>
                <Td>{o.date}</Td>
                <Td><StatusPill status={o.status} /></Td>
              </tr>
            ))}
          </Table>
        </DashboardCard>
      )}
    </div>
  );
}
