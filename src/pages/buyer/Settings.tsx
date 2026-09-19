import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Button } from "../../components/ui/Button";

export function BuyerSettings() {
  return (
    <div>
      <DashboardPageHeader title="Account Settings" description="Manage your buyer account details and preferences." />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DashboardCard title="Business Profile">
          <div className="space-y-4">
            <LabeledInput label="Business Name" defaultValue="Karthik Traders" />
            <LabeledInput label="Contact Person" defaultValue="R. Karthikeyan" />
            <LabeledInput label="Phone" defaultValue="+91 90000 00000" />
            <LabeledInput label="Email" defaultValue="karthik@example.com" />
            <LabeledInput label="GST Number" defaultValue="33AAAAA0000A1Z5" />
            <Button size="sm">Save Changes</Button>
          </div>
        </DashboardCard>

        <DashboardCard title="Notification Preferences">
          <div className="space-y-3">
            {["New quotations", "RFQ status updates", "Order updates", "Supplier messages", "Promotional updates"].map((n) => (
              <label key={n} className="flex items-center justify-between rounded-lg border border-charcoal-100 px-3.5 py-2.5 text-sm text-charcoal-700">
                {n}
                <input type="checkbox" defaultChecked={n !== "Promotional updates"} className="h-4 w-4 rounded border-charcoal-300 text-brand-600" />
              </label>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}

function LabeledInput({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">{label}</label>
      <input defaultValue={defaultValue} className="w-full rounded-xl border border-charcoal-200 px-3.5 py-2.5 text-sm outline-none focus:border-brand-500" />
    </div>
  );
}
