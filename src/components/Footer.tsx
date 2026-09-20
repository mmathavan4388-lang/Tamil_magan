import { Link } from "react-router-dom";
import { ADDRESS, BUSINESS_NAME, DISPLAY_PHONE } from "../lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100 pb-20 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-xl">
              🎆
            </span>
            <span className="font-extrabold text-white text-lg">{BUSINESS_NAME}</span>
          </div>
          <p className="text-sm text-brand-200/80 leading-relaxed">
            Quality fireworks from Sivakasi — the fireworks capital of India. Bringing colour and joy to
            every celebration.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-brand-200/80">
            <li><Link to="/" className="hover:text-gold-400">Home</Link></li>
            <li><Link to="/products" className="hover:text-gold-400">Products</Link></li>
            <li><Link to="/categories" className="hover:text-gold-400">Categories</Link></li>
            <li><Link to="/gift-boxes" className="hover:text-gold-400">Gift Boxes</Link></li>
            <li><Link to="/contact" className="hover:text-gold-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-brand-200/80">
            <li>{ADDRESS.line1}</li>
            <li>{ADDRESS.line2}</li>
            <li>{ADDRESS.line3}</li>
            <li>{ADDRESS.line4}</li>
            <li className="pt-1">
              <a href={`tel:${DISPLAY_PHONE.primary.replace(/\s/g, "")}`} className="hover:text-gold-400">
                📞 {DISPLAY_PHONE.primary}
              </a>
            </li>
            <li>
              <a href={`tel:${DISPLAY_PHONE.secondary.replace(/\s/g, "")}`} className="hover:text-gold-400">
                📞 {DISPLAY_PHONE.secondary}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Safety & Legal</h4>
          <p className="text-sm text-brand-200/80 leading-relaxed">
            Fireworks are sold subject to applicable state and local regulations. Only legally permitted
            products are listed. Buyers are responsible for complying with age restrictions and local
            laws. Please use fireworks safely and under adult supervision.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-brand-300/70 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <p>Handcrafted with care in Sivakasi, Tamil Nadu.</p>
        </div>
      </div>
    </footer>
  );
}
