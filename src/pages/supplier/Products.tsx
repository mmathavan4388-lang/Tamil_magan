import { Pencil, Trash2 } from "lucide-react";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { Pill } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { getProductsBySupplier } from "../../data/products";

export function SupplierProducts() {
  const myProducts = getProductsBySupplier("sup-1");
  return (
    <div>
      <DashboardPageHeader title="My Products" description="Manage your product listings and wholesale pricing." action={<Button to="/supplier/products/add" size="sm">+ Add Product</Button>} />
      <DashboardCard>
        <Table head={["Product", "Category", "MOQ", "Availability", "Status", ""]}>
          {myProducts.map((p) => (
            <tr key={p.id}>
              <Td>
                <div className="flex items-center gap-2.5">
                  <img src={p.images[0]} alt="" className="h-9 w-9 rounded-lg object-cover" />
                  <span className="max-w-[180px] truncate font-semibold text-charcoal-800">{p.name}</span>
                </div>
              </Td>
              <Td>{p.category}</Td>
              <Td>{p.moq}</Td>
              <Td className="max-w-[140px] truncate">{p.availableQty}</Td>
              <Td><Pill tone="green">Approved</Pill></Td>
              <Td>
                <div className="flex gap-1.5">
                  <button className="rounded-lg p-1.5 text-charcoal-500 hover:bg-charcoal-50"><Pencil className="h-3.5 w-3.5" /></button>
                  <button className="rounded-lg p-1.5 text-rose-500 hover:bg-rose-50"><Trash2 className="h-3.5 w-3.5" /></button>
                </div>
              </Td>
            </tr>
          ))}
        </Table>
      </DashboardCard>
    </div>
  );
}
