import { ListChecks } from "lucide-react";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { StatusPill } from "../../components/ui/StatusPill";
import { EmptyState } from "../../components/ui/EmptyState";
import { Button } from "../../components/ui/Button";
import { demoQuotes, demoRFQs } from "../../data/dashboard";

export function BuyerRFQs() {
  return (
    <div>
      <DashboardPageHeader title="My RFQs" description="Requests for quotation you've submitted to suppliers." action={<Button to="/bulk-orders" size="sm">+ New RFQ</Button>} />

      {demoRFQs.length === 0 ? (
        <EmptyState icon={ListChecks} title="No RFQs yet" description="Submit a bulk quote request to start receiving supplier quotations." action={<Button to="/bulk-orders" size="sm">Request Bulk Quote</Button>} />
      ) : (
        <DashboardCard>
          <Table head={["RFQ ID", "Product", "Quantity", "Location", "Required Date", "Quotes", "Status"]}>
            {demoRFQs.map((r) => (
              <tr key={r.id}>
                <Td className="font-semibold text-charcoal-800">{r.id}</Td>
                <Td>{r.product}</Td>
                <Td>{r.quantity}</Td>
                <Td>{r.location}</Td>
                <Td>{r.requiredDate}</Td>
                <Td>{r.quotesReceived}</Td>
                <Td><StatusPill status={r.status} /></Td>
              </tr>
            ))}
          </Table>
        </DashboardCard>
      )}

      <div className="mt-8">
        <h2 className="mb-3 text-base font-bold text-charcoal-900">Quotations Received &mdash; RFQ-1042</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {demoQuotes.map((q) => (
            <div key={q.id} className="flex flex-col gap-3 rounded-2xl border border-charcoal-100 bg-white p-5 shadow-card">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-charcoal-900">{q.supplier}</p>
                <span className="text-xs text-charcoal-400">{q.id}</span>
              </div>
              <p className="text-xs text-charcoal-500">{q.product}</p>
              <div className="grid grid-cols-2 gap-2 rounded-xl bg-charcoal-50 p-3 text-xs">
                <Info label="Quantity" value={q.quantity} />
                <Info label="Price" value={q.price} />
                <Info label="Taxes" value={q.taxes} />
                <Info label="Shipping" value={q.shipping} />
                <Info label="Delivery" value={q.estimatedDelivery} />
                <Info label="Validity" value={q.validity} />
              </div>
              <p className="text-xs text-charcoal-400">Terms: {q.terms}</p>
              <div className="mt-1 flex gap-2">
                <Button size="sm" className="flex-1">Accept Quote</Button>
                <Button size="sm" variant="outline" className="flex-1">Contact Supplier</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-charcoal-400">{label}</p>
      <p className="font-semibold text-charcoal-800">{value}</p>
    </div>
  );
}
