import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "../types";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="overflow-hidden rounded-xl border border-charcoal-100 bg-white shadow-card">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-bold text-charcoal-900">{item.question}</span>
              <ChevronDown className={`h-4 w-4 shrink-0 text-charcoal-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-sm leading-relaxed text-charcoal-600">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
