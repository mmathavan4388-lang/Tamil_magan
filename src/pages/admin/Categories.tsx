import { Pencil, Plus, Trash2 } from "lucide-react";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { Button } from "../../components/ui/Button";
import { categories } from "../../data/categories";

export function AdminCategories() {
  return (
    <div>
      <DashboardPageHeader title="Manage Categories" description="Add, edit or remove marketplace product categories." action={<Button size="sm" icon={<Plus className="h-3.5 w-3.5" />}>Add Category</Button>} />
      <DashboardCard>
        <Table head={["Category", "Slug", "Products", "Description", "Actions"]}>
          {categories.map((c) => (
            <tr key={c.id}>
              <Td>
                <div className="flex items-center gap-2.5">
                  <img src={c.image} alt="" className="h-9 w-9 rounded-lg object-cover" />
                  <span className="font-semibold text-charcoal-800">{c.name}</span>
                </div>
              </Td>
              <Td className="font-mono text-xs text-charcoal-500">{c.slug}</Td>
              <Td>{c.productCount}</Td>
              <Td className="max-w-[220px] truncate">{c.description}</Td>
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
