import { Flag } from "lucide-react";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { Button } from "../../components/ui/Button";
import { EmptyState } from "../../components/ui/EmptyState";

const reported = [
  { item: "Unverified bulk rocket listing", type: "Product", reason: "Suspected unlicensed seller", reportedBy: "Buyer" },
  { item: "Sivakasi Sparkle Works", type: "Supplier", reason: "Incomplete business documentation", reportedBy: "System" },
];

export function AdminReportedListings() {
  return (
    <div>
      <DashboardPageHeader title="Reported Listings" description="Review listings and profiles flagged by buyers or the system." />
      {reported.length === 0 ? (
        <EmptyState icon={Flag} title="No reported listings" description="Flagged products or suppliers will appear here for review." />
      ) : (
        <DashboardCard>
          <Table head={["Item", "Type", "Reason", "Reported By", "Actions"]}>
            {reported.map((r) => (
              <tr key={r.item}>
                <Td className="max-w-[220px] truncate font-semibold text-charcoal-800">{r.item}</Td>
                <Td>{r.type}</Td>
                <Td className="max-w-[220px] truncate">{r.reason}</Td>
                <Td>{r.reportedBy}</Td>
                <Td>
                  <div className="flex gap-1.5">
                    <Button size="sm" variant="outline">Dismiss</Button>
                    <Button size="sm" variant="primary">Take Action</Button>
                  </div>
                </Td>
              </tr>
            ))}
          </Table>
        </DashboardCard>
      )}
    </div>
  );
}
