import { DashboardPageHeader } from "../../components/ui/DashboardCard";
import { MessagesPanel } from "../../components/MessagesPanel";

export function SupplierMessages() {
  return (
    <div>
      <DashboardPageHeader title="Messages" description="Respond to buyer enquiries and RFQ discussions." />
      <MessagesPanel />
    </div>
  );
}
