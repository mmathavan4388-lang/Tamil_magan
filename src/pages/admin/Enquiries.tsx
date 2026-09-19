import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { Pill } from "../../components/ui/Badge";

const enquiries = [
  { name: "Anand Distributors", city: "Madurai", requirement: "Wholesale sparklers, 800 boxes", status: "New" },
  { name: "Vignesh Traders", city: "Salem", requirement: "Celebration combo, 50 boxes", status: "Responded" },
  { name: "Lakshmi Stores", city: "Erode", requirement: "Gift boxes, 200 boxes", status: "New" },
];

export function AdminEnquiries() {
  return (
    <div>
      <DashboardPageHeader title="Manage Enquiries" description="Contact form and RFQ enquiries submitted through the platform." />
      <DashboardCard>
        <Table head={["Name", "City", "Requirement", "Status"]}>
          {enquiries.map((e) => (
            <tr key={e.name}>
              <Td className="font-semibold text-charcoal-800">{e.name}</Td>
              <Td>{e.city}</Td>
              <Td className="max-w-[260px] truncate">{e.requirement}</Td>
              <Td><Pill tone={e.status === "New" ? "gold" : "green"}>{e.status}</Pill></Td>
            </tr>
          ))}
        </Table>
      </DashboardCard>
    </div>
  );
}
