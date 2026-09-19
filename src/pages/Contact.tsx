import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";

export function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact KABERIAL PATTASU KADAI"
        description="Have a bulk requirement, supplier question, or partnership enquiry? Reach out and our team will get back to you."
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            <ContactInfoCard icon={MapPin} title="Office" body="Sivakasi, Virudhunagar District, Tamil Nadu, India" />
            <ContactInfoCard icon={Phone} title="Phone (Demo)" body="+91 90000 00000" />
            <ContactInfoCard icon={Mail} title="Email" body="hello@kaberialpattasukadai.example" />
            <ContactInfoCard icon={MessageCircle} title="WhatsApp Enquiry" body="Available via the enquiry form for quick business questions." />
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

function ContactInfoCard({ icon: Icon, title, body }: { icon: typeof Mail; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3.5 rounded-2xl border border-charcoal-100 bg-white p-5 shadow-card">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div>
        <p className="text-sm font-bold text-charcoal-900">{title}</p>
        <p className="mt-0.5 text-sm text-charcoal-500">{body}</p>
      </div>
    </div>
  );
}
