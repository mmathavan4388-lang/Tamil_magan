import { ADDRESS, BUSINESS_NAME, DISPLAY_PHONE, MAP_QUERY, WHATSAPP_NUMBERS } from "../lib/constants";
import { WhatsAppButton } from "./WhatsAppButton";

export function ContactSection() {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-brand-800 to-brand-950 p-6 sm:p-10 text-white">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">{BUSINESS_NAME}</h2>
          <p className="mt-3 text-brand-100/90 leading-relaxed">
            {ADDRESS.line1}
            <br />
            {ADDRESS.line2}
            <br />
            {ADDRESS.line3}
            <br />
            {ADDRESS.line4}
          </p>

          <div className="mt-4 space-y-1 text-brand-100/90">
            <p className="font-semibold text-gold-400">Quick Response:</p>
            <p>📞 {DISPLAY_PHONE.primary}</p>
            <p>📞 {DISPLAY_PHONE.secondary}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${DISPLAY_PHONE.primary.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-brand-900 shadow hover:bg-brand-50 active:scale-95"
            >
              📞 Call Now
            </a>
            <WhatsAppButton />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-semibold text-white hover:bg-white/10 active:scale-95"
            >
              📍 Get Directions
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="KABERIAL PATTASU KADAI Location"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            className="h-64 w-full lg:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <p className="mt-6 text-xs text-brand-200/60">
        Secondary WhatsApp: +91 76049 65753 · Both numbers listed above ({WHATSAPP_NUMBERS.primary},{" "}
        {WHATSAPP_NUMBERS.secondary}) are available for quick response.
      </p>
    </section>
  );
}
