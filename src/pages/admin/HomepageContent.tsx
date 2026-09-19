import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Button } from "../../components/ui/Button";
import { stats } from "../../data/site";

export function AdminHomepageContent() {
  return (
    <div>
      <DashboardPageHeader title="Homepage Content" description="Edit hero text, statistics and featured sections shown on the homepage." />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DashboardCard title="Hero Section">
          <div className="space-y-4">
            <Field label="Headline" defaultValue="India's Trusted B2B Fireworks Marketplace" />
            <Field label="Subheadline" defaultValue="Connect with verified fireworks manufacturers and wholesale buyers from Sivakasi and across India." />
            <Button size="sm">Save Hero Content</Button>
          </div>
        </DashboardCard>

        <DashboardCard title="Business Statistics">
          <div className="space-y-4">
            {stats.map((s) => (
              <div key={s.id} className="flex items-center gap-3">
                <div className="flex-1">
                  <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">{s.label}</label>
                  <input defaultValue={s.value} className="w-full rounded-xl border border-charcoal-200 px-3.5 py-2.5 text-sm outline-none focus:border-brand-500" />
                </div>
              </div>
            ))}
            <Button size="sm">Save Statistics</Button>
          </div>
        </DashboardCard>
      </div>

      <p className="mt-4 text-xs text-charcoal-400">
        Statistics shown on the homepage are placeholder values until updated here with verified figures.
      </p>
    </div>
  );
}

function Field({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">{label}</label>
      <textarea defaultValue={defaultValue} rows={2} className="w-full rounded-xl border border-charcoal-200 px-3.5 py-2.5 text-sm outline-none focus:border-brand-500" />
    </div>
  );
}
