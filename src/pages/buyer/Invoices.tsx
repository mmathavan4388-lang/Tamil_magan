import { Download, Receipt } from "lucide-react";
import { DashboardCard, DashboardPageHeader } from "../../components/ui/DashboardCard";
import { Table, Td } from "../../components/ui/Table";
import { EmptyState } from "../../components/ui/EmptyState";
import { demoOrders } from "../../data/dashboard";

export function BuyerInvoices() {
  const invoices = demoOrders.map((o, i) => ({
    id: `INV-${8000 + i}`,
    order: o.id,
    amount: o.amount,
    date: o.date,
    status: o.status === "Delivered" ? "Paid" : "Due",
  }));

  return (
    <div>
      <DashboardPageHeader title="Invoices" description="Download invoices for your confirmed orders." />
      {invoices.length === 0 ? (
        <EmptyState icon={Receipt} title="No invoices yet" description="Invoices will appear here once an order is confirmed." />
      ) : (
        <DashboardCard>
          <Table head={["Invoice", "Order", "Amount", "Date", "Status", ""]}>
            {invoices.map((inv) => (
              <tr key={inv.id}>
                <Td className="font-semibold text-charcoal-800">{inv.id}</Td>
                <Td>{inv.order}</Td>
                <Td>{inv.amount}</Td>
                <Td>{inv.date}</Td>
                <Td>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${inv.status === "Paid" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                    {inv.status}
                  </span>
                </Td>
                <Td>
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700">
                    <Download className="h-3.5 w-3.5" /> Download
                  </button>
                </Td>
              </tr>
            ))}
          </Table>
        </DashboardCard>
      )}
    </div>
  );
}
