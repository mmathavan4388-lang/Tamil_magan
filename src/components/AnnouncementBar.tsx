import { BUSINESS_NAME, DISPLAY_PHONE } from "../lib/constants";

export function AnnouncementBar() {
  return (
    <div className="bg-brand-900 text-brand-50 text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between gap-2">
        <p className="truncate font-medium">
          Welcome to <span className="text-gold-400 font-semibold">{BUSINESS_NAME}</span>
        </p>
        <a
          href={`tel:${DISPLAY_PHONE.primary.replace(/\s/g, "")}`}
          className="hidden sm:inline-flex items-center gap-1 font-medium hover:text-gold-400 transition-colors"
        >
          📞 {DISPLAY_PHONE.primary}
        </a>
      </div>
    </div>
  );
}
