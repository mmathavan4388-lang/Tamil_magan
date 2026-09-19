import { Check, X } from "lucide-react";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { VerifiedBadge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { suppliers } from "../../data/suppliers";

export function AdminSuppliers() {
  return (
    <div>
      <DashboardPageHeader title="Approve Suppliers" description="Review business/GST documentation and approve or reject supplier accounts." />
      <DashboardCard>
        <Table head={["Supplier", "Location", "GST Doc", "Status", "Actions"]}>
          {suppliers.map((s) => (
            <tr key={s.id}>
              <Td>
                <div className="flex items-center gap-2.5">
                  <img src={s.logo} alt="" className="h-9 w-9 rounded-lg" />
                  <span className="font-semibold text-charcoal-800">{s.name}</span>
                </div>
              </Td>
              <Td>{s.location}</Td>
              <Td>{s.gstVerified ? "Submitted" : "Missing"}</Td>
              <Td><VerifiedBadge verified={s.verified} /></Td>
              <Td>
                <div className="flex gap-1.5">
                  <Button size="sm" variant="primary" icon={<Check className="h-3.5 w-3.5" />}>Approve</Button>
                  <Button size="sm" variant="outline" icon={<X className="h-3.5 w-3.5" />}>Reject</Button>
                </div>
              </Td>
            </tr>
          ))}
        </Table>
      </DashboardCard>
    </div>
  );
}
