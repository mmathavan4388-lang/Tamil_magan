import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Button } from "../../components/ui/Button";

export function SupplierSettings() {
  return (
    <div>
      <DashboardPageHeader title="Settings" description="Manage account, security and notification preferences." />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DashboardCard title="Account">
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">Email</label>
              <input defaultValue="contact@kaberialfireworks.example" className="w-full rounded-xl border border-charcoal-200 px-3.5 py-2.5 text-sm outline-none focus:border-brand-500" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">Password</label>
              <input type="password" defaultValue="********" className="w-full rounded-xl border border-charcoal-200 px-3.5 py-2.5 text-sm outline-none focus:border-brand-500" />
            </div>
            <Button size="sm">Update Account</Button>
          </div>
        </DashboardCard>
        <DashboardCard title="Notification Preferences">
          <div className="space-y-3">
            {["New RFQ requests", "New messages", "Order status changes", "Product approval updates", "Marketing tips"].map((n) => (
              <label key={n} className="flex items-center justify-between rounded-lg border border-charcoal-100 px-3.5 py-2.5 text-sm text-charcoal-700">
                {n}
                <input type="checkbox" defaultChecked={n !== "Marketing tips"} className="h-4 w-4 rounded border-charcoal-300 text-brand-600" />
              </label>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}
