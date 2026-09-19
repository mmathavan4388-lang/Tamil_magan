import { CheckCircle2, Clock, FileUp, ShieldCheck } from "lucide-react";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Button } from "../../components/ui/Button";

const documents = [
  { label: "GST Registration Certificate", status: "Verified" },
  { label: "Business Licence / Udyam Registration", status: "Verified" },
  { label: "Explosives Licence (as applicable)", status: "Pending Review" },
  { label: "PAN Card (Business)", status: "Verified" },
];

export function SupplierVerification() {
  return (
    <div>
      <DashboardPageHeader title="Verification" description="Submit business documents to earn a Verified Supplier badge." />

      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <ShieldCheck className="h-8 w-8 text-emerald-600" />
        <div>
          <p className="text-sm font-bold text-charcoal-900">Your business is Verified</p>
          <p className="text-xs text-charcoal-600">Verified Supplier badge is now visible on your listings.</p>
        </div>
      </div>

      <DashboardCard title="Submitted Documents" action={<Button size="sm" variant="outline" icon={<FileUp className="h-3.5 w-3.5" />}>Upload New Document</Button>}>
        <div className="divide-y divide-charcoal-50">
          {documents.map((d) => (
            <div key={d.label} className="flex items-center justify-between py-3.5">
              <span className="text-sm text-charcoal-700">{d.label}</span>
              {d.status === "Verified" ? (
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Verified
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                  <Clock className="h-3.5 w-3.5" /> Pending Review
                </span>
              )}
            </div>
          ))}
        </div>
      </DashboardCard>

      <p className="mt-4 text-xs text-charcoal-400">
        Verification is reviewed by the KABERIAL PATTASU KADAI admin team and does not constitute government
        certification or endorsement.
      </p>
    </div>
  );
}
