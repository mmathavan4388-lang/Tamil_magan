import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { Pill } from "../../components/ui/Badge";

const users = [
  { name: "R. Karthikeyan", email: "karthik@example.com", role: "Buyer", joined: "2025-11-02", status: "Active" },
  { name: "KABERIAL Fireworks", email: "contact@kaberialfireworks.example", role: "Supplier", joined: "2024-06-14", status: "Active" },
  { name: "S. Priya", email: "priya@example.com", role: "Buyer", joined: "2026-01-20", status: "Active" },
  { name: "Sivakasi Sparkle Works", email: "info@sparkleworks.example", role: "Supplier", joined: "2026-08-30", status: "Pending" },
  { name: "M. Suresh", email: "suresh@example.com", role: "Buyer", joined: "2025-09-08", status: "Suspended" },
];

export function AdminUsers() {
  return (
    <div>
      <DashboardPageHeader title="Manage Users" description="View and manage buyer and supplier accounts." />
      <DashboardCard>
        <Table head={["Name", "Email", "Role", "Joined", "Status"]}>
          {users.map((u) => (
            <tr key={u.email}>
              <Td className="font-semibold text-charcoal-800">{u.name}</Td>
              <Td className="text-charcoal-500">{u.email}</Td>
              <Td><Pill tone="brand">{u.role}</Pill></Td>
              <Td>{u.joined}</Td>
              <Td>
                <Pill tone={u.status === "Active" ? "green" : u.status === "Pending" ? "gold" : "neutral"}>{u.status}</Pill>
              </Td>
            </tr>
          ))}
        </Table>
      </DashboardCard>
    </div>
  );
}
