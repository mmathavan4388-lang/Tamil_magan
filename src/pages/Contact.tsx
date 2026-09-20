import { ContactSection } from "../components/ContactSection";
import { SafetyNotice } from "../components/SafetyNotice";

export function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:py-10 flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-brand-950">Contact Us</h1>
        <p className="text-brand-600 mt-1">We're happy to help with your celebration needs.</p>
      </div>
      <ContactSection />
      <SafetyNotice />
    </div>
  );
}
