import type { ReactNode } from "react";

export function Table({ head, children }: { head: ReactNode[]; children: ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-charcoal-100 text-xs font-semibold uppercase tracking-wide text-charcoal-400">
            {head.map((h, i) => (
              <th key={i} className="px-3 py-2.5 first:pl-1">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-charcoal-50">{children}</tbody>
      </table>
    </div>
  );
}

export function Td({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <td className={`px-3 py-3.5 first:pl-1 ${className}`}>{children}</td>;
}
