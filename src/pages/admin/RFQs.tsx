import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { StatusPill } from "../../components/ui/StatusPill";
import { demoRFQs } from "../../data/dashboard";

export function AdminRFQs() {
  return (
    <div>
      <DashboardPageHeader title="Manage RFQs" description="Platform-wide view of all requests for quotation." />
      <DashboardCard>
        <Table head={["RFQ ID", "Product", "Quantity", "Location", "Quotes", "Status"]}>
          {demoRFQs.map((r) => (
            <tr key={r.id}>
              <Td className="font-semibold text-charcoal-800">{r.id}</Td>
              <Td className="max-w-[200px] truncate">{r.product}</Td>
              <Td>{r.quantity}</Td>
              <Td>{r.location}</Td>
              <Td>{r.quotesReceived}</Td>
              <Td><StatusPill status={r.status} /></Td>
            </tr>
          ))}
        </Table>
      </DashboardCard>
    </div>
  );
}
