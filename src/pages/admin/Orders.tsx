import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { StatusPill } from "../../components/ui/StatusPill";
import { demoOrders } from "../../data/dashboard";

export function AdminOrders() {
  return (
    <div>
      <DashboardPageHeader title="Manage Orders" description="Platform-wide view of confirmed and in-progress orders." />
      <DashboardCard>
        <Table head={["Order ID", "Product", "Supplier", "Quantity", "Amount", "Status"]}>
          {demoOrders.map((o) => (
            <tr key={o.id}>
              <Td className="font-semibold text-charcoal-800">{o.id}</Td>
              <Td className="max-w-[200px] truncate">{o.product}</Td>
              <Td>{o.supplier}</Td>
              <Td>{o.quantity}</Td>
              <Td>{o.amount}</Td>
              <Td><StatusPill status={o.status} /></Td>
            </tr>
          ))}
        </Table>
      </DashboardCard>
    </div>
  );
}
