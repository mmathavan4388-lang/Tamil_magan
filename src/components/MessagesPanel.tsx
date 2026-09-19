import { useState } from "react";
import { Send } from "lucide-react";
import { placeholderLogo } from "../lib/placeholder";

interface Thread {
  id: string;
  name: string;
  subtitle: string;
  lastMessage: string;
  time: string;
  unread?: boolean;
}

const demoThreads: Thread[] = [
  { id: "1", name: "KABERIAL Fireworks", subtitle: "Sivakasi, Tamil Nadu", lastMessage: "Sure, we can process 500 boxes within 10 days.", time: "10:42 AM", unread: true },
  { id: "2", name: "ABC Fireworks Pvt. Ltd.", subtitle: "Sivakasi, Tamil Nadu", lastMessage: "Please share your GST details to proceed.", time: "Yesterday" },
  { id: "3", name: "Meenatchi Pyro Exports", subtitle: "Sattur, Tamil Nadu", lastMessage: "Quotation sent for RFQ-1042.", time: "Mon" },
];

export function MessagesPanel() {
  const [active, setActive] = useState(demoThreads[0].id);
  const [draft, setDraft] = useState("");
  const thread = demoThreads.find((t) => t.id === active)!;

  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-card md:grid-cols-[280px_1fr]">
      <div className="border-b border-charcoal-100 md:border-b-0 md:border-r">
        {demoThreads.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`flex w-full items-center gap-3 border-b border-charcoal-50 px-4 py-3.5 text-left ${active === t.id ? "bg-brand-50" : "hover:bg-charcoal-50"}`}
          >
            <img src={placeholderLogo(t.id, t.name)} alt="" className="h-10 w-10 rounded-lg" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="truncate text-sm font-bold text-charcoal-900">{t.name}</p>
                <span className="text-[10px] text-charcoal-400">{t.time}</span>
              </div>
              <p className="truncate text-xs text-charcoal-500">{t.lastMessage}</p>
            </div>
            {t.unread && <span className="h-2 w-2 shrink-0 rounded-full bg-brand-600" />}
          </button>
        ))}
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-3 border-b border-charcoal-100 px-5 py-4">
          <img src={placeholderLogo(thread.id, thread.name)} alt="" className="h-9 w-9 rounded-lg" />
          <div>
            <p className="text-sm font-bold text-charcoal-900">{thread.name}</p>
            <p className="text-xs text-charcoal-400">{thread.subtitle}</p>
          </div>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-5">
          <div className="max-w-xs rounded-2xl rounded-tl-sm bg-charcoal-50 px-4 py-2.5 text-sm text-charcoal-700">
            {thread.lastMessage}
          </div>
          <div className="ml-auto max-w-xs rounded-2xl rounded-tr-sm bg-brand-600 px-4 py-2.5 text-sm text-white">
            Thanks, please confirm the wholesale price per box for 500 units.
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDraft("");
          }}
          className="flex items-center gap-2 border-t border-charcoal-100 p-3.5"
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-xl border border-charcoal-200 px-3.5 py-2.5 text-sm outline-none focus:border-brand-500"
          />
          <button type="submit" className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white hover:bg-brand-700">
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
