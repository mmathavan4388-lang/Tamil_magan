import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, Printer, ShoppingCart } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/ui/Button";
import { priceList, priceListMeta } from "../data/priceList";

function formatINR(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export function PriceList() {
  const [qty, setQty] = useState<Record<number, number>>({});

  const grandTotal = useMemo(() => {
    return priceList.reduce((sum, cat) => {
      return (
        sum +
        cat.items.reduce((catSum, item) => catSum + (qty[item.sno] || 0) * item.offerPrice, 0)
      );
    }, 0);
  }, [qty]);

  const totalBoxes = useMemo(() => Object.values(qty).reduce((a, b) => a + (b || 0), 0), [qty]);

  function setItemQty(sno: number, value: string) {
    const n = Math.max(0, Number(value) || 0);
    setQty((prev) => ({ ...prev, [sno]: n }));
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div>
      <PageHero
        eyebrow="Retail Price List"
        title={priceListMeta.listTitle}
        description="Full item-wise price list with 90% offer pricing. Enter quantities to build your order, then send it as a bulk enquiry."
      >
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-charcoal-300">
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-gold-400" />
            Quick Respondent: {priceListMeta.phones.join(" · ")}
          </span>
          <span className="hidden sm:inline text-charcoal-500">|</span>
          <span>{priceListMeta.address}</span>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 print:px-0 print:py-4">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <p className="text-xs text-charcoal-400">
            Prices shown are indicative MRP with 90% offer (final) pricing. Enter box quantities below to
            calculate your order total.
          </p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" icon={<Printer className="h-3.5 w-3.5" />} onClick={handlePrint}>
              Print / Save PDF
            </Button>
            <Button size="sm" variant="outline" icon={<MessageCircle className="h-3.5 w-3.5 text-emerald-600" />}>
              WhatsApp Enquiry
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gold-300 shadow-card print:rounded-none print:border-charcoal-300">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-brand-600 text-xs font-bold uppercase tracking-wide text-white">
                <th className="px-3 py-3 text-center">S.No</th>
                <th className="px-3 py-3">Product Name</th>
                <th className="hidden px-3 py-3 sm:table-cell">பட்டாசுகளின் பெயர்</th>
                <th className="px-3 py-3 text-right">Price</th>
                <th className="px-3 py-3 text-center">Per</th>
                <th className="px-3 py-3 text-right">90% Offer</th>
                <th className="px-3 py-3 text-center">Requirement</th>
                <th className="px-3 py-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {priceList.map((category) => (
                <CategorySection key={category.title} category={category} qty={qty} setItemQty={setItemQty} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col items-stretch justify-between gap-4 rounded-2xl border border-charcoal-100 bg-charcoal-50 p-5 sm:flex-row sm:items-center print:hidden">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-400">Order Summary</p>
            <p className="mt-1 text-sm text-charcoal-600">
              {totalBoxes} box{totalBoxes === 1 ? "" : "es"} selected
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-400">Grand Total</p>
            <p className="text-2xl font-extrabold text-brand-700">{formatINR(grandTotal)}</p>
          </div>
          <Button to="/bulk-orders" size="lg" icon={<ShoppingCart className="h-4 w-4" />}>
            Send as Bulk Enquiry
          </Button>
        </div>

        <p className="mt-4 text-xs text-charcoal-400 print:mt-6">
          Prices may vary according to quantity, season, taxes and stock availability. This price list is for
          reference only; final pricing is confirmed by the supplier at the time of order. See our{" "}
          <Link to="/compliance" className="font-semibold text-brand-600">Compliance &amp; Safety</Link> page for
          applicable regulations.
        </p>
      </div>
    </div>
  );
}

function CategorySection({
  category,
  qty,
  setItemQty,
}: {
  category: (typeof priceList)[number];
  qty: Record<number, number>;
  setItemQty: (sno: number, value: string) => void;
}) {
  return (
    <>
      <tr>
        <td colSpan={8} className="bg-charcoal-900 px-3 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-gold-300">
          {category.title}
          {category.titleTamil && <span className="ml-2 font-normal text-charcoal-300">&mdash; {category.titleTamil}</span>}
        </td>
      </tr>
      {category.items.map((item, i) => {
        const amount = (qty[item.sno] || 0) * item.offerPrice;
        return (
          <tr key={item.sno} className={i % 2 === 0 ? "bg-white" : "bg-charcoal-50/60"}>
            <td className="px-3 py-2.5 text-center text-charcoal-500">{item.sno}</td>
            <td className="px-3 py-2.5 font-semibold text-charcoal-900">{item.name}</td>
            <td className="hidden px-3 py-2.5 text-charcoal-600 sm:table-cell">{item.nameTamil}</td>
            <td className="px-3 py-2.5 text-right text-charcoal-400 line-through">
              {item.priceOnRequest || category.simple ? "—" : formatINR(item.price)}
            </td>
            <td className="px-3 py-2.5 text-center text-charcoal-500">{item.per}</td>
            <td className="px-3 py-2.5 text-right font-bold text-brand-700">
              {item.priceOnRequest ? "On Request" : formatINR(item.offerPrice)}
            </td>
            <td className="px-3 py-2.5 text-center print:hidden">
              {!item.priceOnRequest && (
                <input
                  type="number"
                  min={0}
                  value={qty[item.sno] || ""}
                  onChange={(e) => setItemQty(item.sno, e.target.value)}
                  placeholder="0"
                  className="w-16 rounded-md border border-charcoal-200 px-2 py-1 text-center text-sm outline-none focus:border-brand-500"
                />
              )}
            </td>
            <td className="px-3 py-2.5 text-right font-semibold text-charcoal-800 print:hidden">
              {amount > 0 ? formatINR(amount) : "—"}
            </td>
          </tr>
        );
      })}
    </>
  );
}
