import { ShoppingBag } from "lucide-react";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { StatusPill } from "../../components/ui/StatusPill";
import { EmptyState } from "../../components/ui/EmptyState";

const supplierOrders = [
  { id: "ORD-9081", buyer: "Tamilnadu Pyro Industries", product: "Festival Family Pack — 100 pc", quantity: "300 Boxes", amount: "₹4,35,000", status: "Shipped" },
  { id: "ORD-9012", buyer: "Priya Enterprises", product: "Premium Flower Pot — Wholesale Pack", quantity: "150 Boxes", amount: "₹31,500", status: "Confirmed" },
  { id: "ORD-8996", buyer: "Suresh & Sons", product: "10-inch Electric Sparklers", quantity: "400 Boxes", amount: "₹22,000", status: "Delivered" },
];

export function SupplierOrders() {
  return (
    <div>
      <DashboardPageHeader title="Orders" description="Orders placed by buyers against your product listings." />
      {supplierOrders.length === 0 ? (
        <EmptyState icon={ShoppingBag} title="No orders yet" description="Orders from buyers will appear here once quotations are accepted." />
      ) : (
        <DashboardCard>
          <Table head={["Order ID", "Buyer", "Product", "Quantity", "Amount", "Status"]}>
            {supplierOrders.map((o) => (
              <tr key={o.id}>
                <Td className="font-semibold text-charcoal-800">{o.id}</Td>
                <Td>{o.buyer}</Td>
                <Td className="max-w-[180px] truncate">{o.product}</Td>
                <Td>{o.quantity}</Td>
                <Td>{o.amount}</Td>
                <Td><StatusPill status={o.status} /></Td>
              </tr>
            ))}
          </Table>
        </DashboardCard>
      )}
    </div>
  );
}
