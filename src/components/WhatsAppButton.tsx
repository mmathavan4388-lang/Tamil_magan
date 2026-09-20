import { WHATSAPP_NUMBERS, BUSINESS_NAME } from "../lib/constants";

export function WhatsAppButton({
  className = "",
  label = "Order on WhatsApp",
  number = WHATSAPP_NUMBERS.primary,
}: {
  className?: string;
  label?: string;
  number?: string;
}) {
  const message = encodeURIComponent(`Hi ${BUSINESS_NAME}, I would like to place an order.`);
  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white shadow-card transition-all hover:shadow-card-hover hover:brightness-105 active:scale-95 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.96 9.96 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.15a8.1 8.1 0 0 1-4.15-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.13 8.13 0 0 1-1.26-4.35c0-4.49 3.66-8.15 8.2-8.15 4.5 0 8.16 3.66 8.16 8.15 0 4.5-3.66 8.2-8.16 8.2Zm4.48-6.13c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42-.14 0-.3-.02-.46-.02s-.42.06-.64.3c-.22.24-.85.83-.85 2.02 0 1.19.87 2.34 1 2.5.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      {label}
    </a>
  );
}
