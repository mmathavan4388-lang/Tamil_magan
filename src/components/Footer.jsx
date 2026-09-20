import { SHOP } from '../data/shop'

export default function Footer() {
  const mapsQuery = encodeURIComponent(SHOP.address.join(' '))

  return (
    <footer className="bg-brand-panel border-t border-white/5 mt-12 pb-20 lg:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-white font-extrabold text-lg mb-2" style={{ fontFamily: "'Baloo Bhai 2', sans-serif" }}>
            {SHOP.name}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed">
            {SHOP.address.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Quick Respondent</h4>
          <div className="flex flex-col gap-1">
            {SHOP.phones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="text-brand-pink text-sm font-semibold hover:underline">
                {phone}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <a
            href={`tel:${SHOP.phones[0].replace(/\s/g, '')}`}
            className="w-full sm:w-auto text-center rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            Call Now
          </a>
          <a
            href={`https://wa.me/${SHOP.whatsappNumbers[0]}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center rounded-lg bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            View Location
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-6">
        <p className="text-white/30 text-[11px] leading-relaxed border-t border-white/5 pt-4">
          Fireworks should be purchased and used only in accordance with applicable laws, safety rules
          and local regulations. Use only as directed and keep away from children and flammable materials.
        </p>
        <p className="text-white/20 text-[11px] mt-2">
          &copy; {new Date().getFullYear()} {SHOP.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
