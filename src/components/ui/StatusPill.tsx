const toneMap: Record<string, string> = {
  Pending: "bg-amber-50 text-amber-700",
  "Awaiting Quote": "bg-amber-50 text-amber-700",
  Quoted: "bg-blue-50 text-blue-700",
  Accepted: "bg-emerald-50 text-emerald-700",
  Confirmed: "bg-emerald-50 text-emerald-700",
  Processing: "bg-blue-50 text-blue-700",
  Shipped: "bg-violet-50 text-violet-700",
  Delivered: "bg-emerald-50 text-emerald-700",
  Closed: "bg-charcoal-100 text-charcoal-500",
  Cancelled: "bg-rose-50 text-rose-700",
};

export function StatusPill({ status }: { status: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${toneMap[status] ?? "bg-charcoal-100 text-charcoal-600"}`}>
      {status}
    </span>
  );
}
