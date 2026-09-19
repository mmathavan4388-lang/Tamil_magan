import { DashboardPageHeader } from "../../components/ui/DashboardCard";
import { MessagesPanel } from "../../components/MessagesPanel";

export function BuyerMessages() {
  return (
    <div>
      <DashboardPageHeader title="Messages" description="Chat directly with suppliers about your enquiries and orders." />
      <MessagesPanel />
    </div>
  );
}
