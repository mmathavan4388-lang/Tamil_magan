import { AlertOctagon, FileCheck, Flag, ShieldCheck, Users } from "lucide-react";
import { StatCard } from "../../components/ui/StatCard";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { Pill } from "../../components/ui/Badge";
import { stats } from "../../data/site";

const pendingActions = [
  { type: "Supplier Verification", name: "Sivakasi Sparkle Works", submitted: "2026-09-17" },
  { type: "Product Approval", name: "New Season Sparkle Fountain", submitted: "2026-09-16" },
  { type: "Reported Listing", name: "Unverified bulk rocket listing", submitted: "2026-09-15" },
];

export function AdminOverview() {
  return (
    <div>
      <DashboardPageHeader title="Admin Dashboard" description="Platform-wide oversight of suppliers, products, orders and compliance." />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Verified Suppliers" value={stats[0].value} icon={ShieldCheck} />
        <StatCard label="Products Listed" value={stats[1].value} icon={FileCheck} />
        <StatCard label="Registered Users" value="2,340" icon={Users} />
        <StatCard label="Reported Listings" value="3" icon={Flag} />
      </div>

      <div className="mt-6">
        <DashboardCard title="Pending Admin Actions" action={<span className="flex items-center gap-1.5 text-xs font-semibold text-amber-600"><AlertOctagon className="h-3.5 w-3.5" /> 3 items need review</span>}>
          <Table head={["Type", "Item", "Submitted", "Status"]}>
            {pendingActions.map((a) => (
              <tr key={a.name}>
                <Td className="font-semibold text-charcoal-800">{a.type}</Td>
                <Td className="max-w-[220px] truncate">{a.name}</Td>
                <Td>{a.submitted}</Td>
                <Td><Pill tone="gold">Needs Review</Pill></Td>
              </tr>
            ))}
          </Table>
        </DashboardCard>
      </div>
    </div>
  );
}
