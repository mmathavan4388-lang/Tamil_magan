import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Button } from "../../components/ui/Button";
import { getSupplierById } from "../../data/suppliers";

export function SupplierBusinessProfile() {
  const supplier = getSupplierById("sup-1")!;
  return (
    <div>
      <DashboardPageHeader title="Business Profile" description="This information is shown on your public supplier profile." />
      <DashboardCard>
        <div className="flex items-center gap-4">
          <img src={supplier.logo} alt="" className="h-16 w-16 rounded-xl" />
          <Button size="sm" variant="outline">Change Logo</Button>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Company Name" defaultValue={supplier.name} />
          <Field label="Location" defaultValue={supplier.location} />
          <Field label="Years in Business" defaultValue={String(supplier.yearsInBusiness)} />
          <Field label="Minimum Order" defaultValue={supplier.minOrder} />
        </div>
        <div className="mt-4">
          <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">Business Description</label>
          <textarea defaultValue={supplier.description} rows={4} className="w-full rounded-xl border border-charcoal-200 px-3.5 py-2.5 text-sm outline-none focus:border-brand-500" />
        </div>
        <Button size="sm" className="mt-5">Save Profile</Button>
      </DashboardCard>
    </div>
  );
}

function Field({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">{label}</label>
      <input defaultValue={defaultValue} className="w-full rounded-xl border border-charcoal-200 px-3.5 py-2.5 text-sm outline-none focus:border-brand-500" />
    </div>
  );
}
