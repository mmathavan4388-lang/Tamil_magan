import type { FAQ, StatItem, Testimonial } from "../types";

// Placeholder values — editable from the Admin Panel homepage-content section.
// Do not treat as real production statistics.
export const stats: StatItem[] = [
  { id: "stat-1", label: "Verified Suppliers", value: "120+", editable: true },
  { id: "stat-2", label: "Products Listed", value: "1,400+", editable: true },
  { id: "stat-3", label: "Cities Served", value: "85+", editable: true },
  { id: "stat-4", label: "Business Enquiries", value: "6,200+", editable: true },
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "R. Karthikeyan",
    company: "Karthik Traders",
    role: "Retail Distributor, Madurai",
    quote: "Demo testimonial — placeholder content for preview purposes only. Real buyer reviews will appear here once collected.",
    demo: true,
  },
  {
    id: "t-2",
    name: "S. Priya",
    company: "Priya Enterprises",
    role: "Wholesale Buyer, Coimbatore",
    quote: "Demo testimonial — placeholder content for preview purposes only. Real buyer reviews will appear here once collected.",
    demo: true,
  },
  {
    id: "t-3",
    name: "M. Suresh",
    company: "Suresh & Sons",
    role: "Regional Distributor, Trichy",
    quote: "Demo testimonial — placeholder content for preview purposes only. Real buyer reviews will appear here once collected.",
    demo: true,
  },
];

export const faqs: FAQ[] = [
  {
    question: "Is KABERIAL PATTASU KADAI a manufacturer or a marketplace?",
    answer: "We are a B2B marketplace platform. We connect verified fireworks manufacturers and suppliers with wholesale buyers — we do not hold physical inventory ourselves.",
  },
  {
    question: "How are suppliers verified?",
    answer: "Suppliers submit business and GST documentation for admin review. Verified suppliers display a “Verified” badge, but buyers should still conduct their own due diligence before transacting.",
  },
  {
    question: "How does the RFQ (Request for Quotation) process work?",
    answer: "Buyers submit product, quantity, delivery location and business details through an RFQ. Verified suppliers respond with quotations covering price, taxes, shipping and delivery estimates, which buyers can compare and accept.",
  },
  {
    question: "Who is responsible for licences and transport compliance?",
    answer: "Buyers and suppliers are independently responsible for complying with all applicable fireworks licences, permits, storage rules, transport regulations and local authority requirements. See our Compliance & Safety page for details.",
  },
  {
    question: "Is there a minimum order quantity (MOQ)?",
    answer: "Yes, MOQ varies by product and supplier and is listed on each product page. Most listings are structured for wholesale/bulk purchase rather than individual retail quantities.",
  },
  {
    question: "How do I become a verified supplier?",
    answer: "Register for a Supplier account, complete your business profile, and submit your GST and business verification documents from the Supplier Dashboard for admin approval.",
  },
];

export const howItWorksBuyer = [
  { step: "1", title: "Search & Browse", description: "Explore verified suppliers and wholesale fireworks products by category, location or price." },
  { step: "2", title: "Send RFQ", description: "Submit quantity, delivery location and business details to receive quotations from suppliers." },
  { step: "3", title: "Compare Quotes", description: "Review pricing, taxes, shipping and delivery timelines from multiple verified suppliers." },
  { step: "4", title: "Confirm & Order", description: "Accept a quotation, coordinate directly with the supplier, and track your order to delivery." },
];

export const howItWorksSupplier = [
  { step: "1", title: "Register Your Business", description: "Create a Supplier account and complete your business profile with GST and licence details." },
  { step: "2", title: "Get Verified", description: "Submit documents for admin review to earn a Verified Supplier badge." },
  { step: "3", title: "List Products", description: "Add your product catalogue with images, MOQ, specifications and wholesale pricing." },
  { step: "4", title: "Receive & Respond to RFQs", description: "Get enquiries from bulk buyers, send quotations, and grow your business nationwide." },
];

export const trustFeatures = [
  "Verified Business Profiles",
  "Supplier Verification",
  "GST / Business Details",
  "Secure Enquiry System",
  "Transparent Quotations",
  "Order Documentation",
  "Compliance Information",
];
