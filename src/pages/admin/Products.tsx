import { Check, X } from "lucide-react";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { Pill } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { products } from "../../data/products";
import { getSupplierById } from "../../data/suppliers";

export function AdminProducts() {
  return (
    <div>
      <DashboardPageHeader title="Approve Products" description="Review new product listings before they appear on the marketplace." />
      <DashboardCard>
        <Table head={["Product", "Supplier", "Category", "Status", "Actions"]}>
          {products.map((p) => (
            <tr key={p.id}>
              <Td>
                <div className="flex items-center gap-2.5">
                  <img src={p.images[0]} alt="" className="h-9 w-9 rounded-lg object-cover" />
                  <span className="max-w-[180px] truncate font-semibold text-charcoal-800">{p.name}</span>
                </div>
              </Td>
              <Td className="max-w-[160px] truncate">{getSupplierById(p.supplierId)?.name}</Td>
              <Td>{p.category}</Td>
              <Td><Pill tone={p.isNew ? "gold" : "green"}>{p.isNew ? "Pending Review" : "Approved"}</Pill></Td>
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
