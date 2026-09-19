import { Pencil, Plus, Trash2 } from "lucide-react";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Button } from "../../components/ui/Button";
import { placeholderImage } from "../../lib/placeholder";

const banners = [
  { id: "b1", title: "Wholesale Season Launch", placement: "Homepage Hero", active: true },
  { id: "b2", title: "Bulk RFQ Promotion", placement: "Products Page Top", active: true },
  { id: "b3", title: "New Supplier Onboarding Drive", placement: "Supplier Dashboard", active: false },
];

export function AdminBanners() {
  return (
    <div>
      <DashboardPageHeader title="Manage Banners" description="Control promotional banners shown across the marketplace." action={<Button size="sm" icon={<Plus className="h-3.5 w-3.5" />}>Add Banner</Button>} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {banners.map((b) => (
          <DashboardCard key={b.id} className="overflow-hidden">
            <img src={placeholderImage(b.id, b.title)} alt="" className="-m-5 mb-4 aspect-[16/9] w-[calc(100%+2.5rem)] object-cover" />
            <p className="text-sm font-bold text-charcoal-900">{b.title}</p>
            <p className="mt-1 text-xs text-charcoal-500">{b.placement}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${b.active ? "bg-emerald-50 text-emerald-700" : "bg-charcoal-100 text-charcoal-500"}`}>
                {b.active ? "Active" : "Inactive"}
              </span>
              <div className="flex gap-1.5">
                <button className="rounded-lg p-1.5 text-charcoal-500 hover:bg-charcoal-50"><Pencil className="h-3.5 w-3.5" /></button>
                <button className="rounded-lg p-1.5 text-rose-500 hover:bg-rose-50"><Trash2 className="h-3.5 w-3.5" /></button>
              </div>
            </div>
          </DashboardCard>
        ))}
      </div>
    </div>
  );
}
