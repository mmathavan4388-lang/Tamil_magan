import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Button } from "../../components/ui/Button";

const notices = [
  { title: "Marketplace Disclaimer", location: "Footer, Compliance Page" },
  { title: "Age Restriction Notice", location: "Compliance Page" },
  { title: "Transport & Storage Guidance", location: "Compliance Page, Product Detail" },
  { title: "Restricted Destinations Notice", location: "Compliance Page, Bulk Orders" },
];

export function AdminCompliance() {
  return (
    <div>
      <DashboardPageHeader title="Compliance Notices" description="Manage the legal and safety notices shown across the marketplace." />
      <DashboardCard>
        <div className="divide-y divide-charcoal-50">
          {notices.map((n) => (
            <div key={n.title} className="flex items-center justify-between py-3.5">
              <div>
                <p className="text-sm font-bold text-charcoal-900">{n.title}</p>
                <p className="text-xs text-charcoal-500">Displayed on: {n.location}</p>
              </div>
              <Button size="sm" variant="outline">Edit</Button>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  );
}
