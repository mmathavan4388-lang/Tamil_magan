import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { Pill } from "../../components/ui/Badge";

const customers = [
  { name: "Karthik Traders", location: "Chennai, Tamil Nadu", orders: 5, spend: "₹1,45,000", tier: "Gold" },
  { name: "Priya Enterprises", location: "Coimbatore, Tamil Nadu", orders: 3, spend: "₹72,000", tier: "Silver" },
  { name: "Suresh & Sons", location: "Trichy, Tamil Nadu", orders: 8, spend: "₹2,10,000", tier: "Gold" },
  { name: "Anand Distributors", location: "Madurai, Tamil Nadu", orders: 1, spend: "₹18,500", tier: "New" },
];

export function SupplierCustomers() {
  return (
    <div>
      <DashboardPageHeader title="Customers" description="Buyers who have enquired or ordered from your business." />
      <DashboardCard>
        <Table head={["Buyer", "Location", "Orders", "Total Spend", "Tier"]}>
          {customers.map((c) => (
            <tr key={c.name}>
              <Td className="font-semibold text-charcoal-800">{c.name}</Td>
              <Td>{c.location}</Td>
              <Td>{c.orders}</Td>
              <Td>{c.spend}</Td>
              <Td><Pill tone={c.tier === "Gold" ? "gold" : c.tier === "Silver" ? "neutral" : "brand"}>{c.tier}</Pill></Td>
            </tr>
          ))}
        </Table>
      </DashboardCard>
    </div>
  );
}
