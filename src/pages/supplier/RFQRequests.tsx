import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { Button } from "../../components/ui/Button";
import { supplierRFQRequests } from "../../data/dashboard";

export function SupplierRFQRequests() {
  return (
    <div>
      <DashboardPageHeader title="RFQ Requests" description="Requests for quotation from buyers — respond to win new business." />
      <DashboardCard>
        <Table head={["RFQ ID", "Buyer", "Product", "Quantity", "Location", "Required Date", "Status", ""]}>
          {supplierRFQRequests.map((r) => (
            <tr key={r.id}>
              <Td className="font-semibold text-charcoal-800">{r.id}</Td>
              <Td>{r.buyer}</Td>
              <Td className="max-w-[160px] truncate">{r.product}</Td>
              <Td>{r.quantity}</Td>
              <Td>{r.location}</Td>
              <Td>{r.requiredDate}</Td>
              <Td>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${r.status === "Quoted" ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700"}`}>
                  {r.status}
                </span>
              </Td>
              <Td>
                <Button size="sm" variant={r.status === "Quoted" ? "outline" : "primary"}>
                  {r.status === "Quoted" ? "View Quote" : "Send Quote"}
                </Button>
              </Td>
            </tr>
          ))}
        </Table>
      </DashboardCard>
    </div>
  );
}
