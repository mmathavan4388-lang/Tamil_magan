import type { OrderRecord, QuoteRecord, RFQRecord } from "../types";

// Demo dataset for dashboard previews. All records are illustrative only.
export const demoRFQs: RFQRecord[] = [
  { id: "RFQ-1042", product: "Premium Flower Pot — Wholesale Pack", quantity: "500 Boxes", location: "Chennai, Tamil Nadu", requiredDate: "2026-10-15", status: "Quoted", quotesReceived: 3, createdAt: "2026-09-10" },
  { id: "RFQ-1041", product: "10-inch Electric Sparklers", quantity: "1,000 Boxes", location: "Bengaluru, Karnataka", requiredDate: "2026-10-20", status: "Pending", quotesReceived: 0, createdAt: "2026-09-12" },
  { id: "RFQ-1038", product: "Festival Family Pack — 100 pc", quantity: "300 Boxes", location: "Hyderabad, Telangana", requiredDate: "2026-10-08", status: "Accepted", quotesReceived: 5, createdAt: "2026-09-02" },
  { id: "RFQ-1030", product: "Distributor Wholesale Carton", quantity: "800 Boxes", location: "Coimbatore, Tamil Nadu", requiredDate: "2026-09-28", status: "Closed", quotesReceived: 2, createdAt: "2026-08-24" },
];

export const demoQuotes: QuoteRecord[] = [
  { id: "Q-5521", supplier: "KABERIAL Fireworks", product: "Premium Flower Pot — Wholesale Pack", quantity: "500 Boxes", price: "₹210 / box", taxes: "GST 18% extra", shipping: "₹12,000 (estimated)", estimatedDelivery: "7 – 10 business days", validity: "10 days", terms: "50% advance, balance before dispatch" },
  { id: "Q-5522", supplier: "ABC Fireworks Pvt. Ltd.", product: "Premium Flower Pot — Wholesale Pack", quantity: "500 Boxes", price: "₹198 / box", taxes: "GST 18% extra", shipping: "₹10,500 (estimated)", estimatedDelivery: "10 – 14 business days", validity: "7 days", terms: "Full advance payment" },
  { id: "Q-5523", supplier: "Meenatchi Pyro Exports", product: "Premium Flower Pot — Wholesale Pack", quantity: "500 Boxes", price: "₹225 / box", taxes: "GST 18% extra", shipping: "Included", estimatedDelivery: "5 – 8 business days", validity: "15 days", terms: "30% advance, balance on delivery" },
];

export const demoOrders: OrderRecord[] = [
  { id: "ORD-9081", product: "Festival Family Pack — 100 pc", supplier: "Tamilnadu Pyro Industries", quantity: "300 Boxes", amount: "₹4,35,000", status: "Shipped", date: "2026-09-14" },
  { id: "ORD-9065", product: "Distributor Wholesale Carton", supplier: "Meenatchi Pyro Exports", quantity: "800 Boxes", amount: "₹8,90,000", status: "Delivered", date: "2026-08-28" },
  { id: "ORD-9050", product: "Multi-Colour Ground Spinner Set", supplier: "Meenatchi Pyro Exports", quantity: "200 Boxes", amount: "₹24,600", status: "Processing", date: "2026-09-16" },
];

export const supplierRFQRequests = [
  { id: "RFQ-2201", buyer: "Karthik Traders", product: "Premium Flower Pot — Wholesale Pack", quantity: "500 Boxes", location: "Chennai, Tamil Nadu", requiredDate: "2026-10-15", status: "Awaiting Quote" as const },
  { id: "RFQ-2198", buyer: "Priya Enterprises", product: "10-inch Electric Sparklers", quantity: "1,200 Boxes", location: "Coimbatore, Tamil Nadu", requiredDate: "2026-10-22", status: "Quoted" as const },
  { id: "RFQ-2190", buyer: "Suresh & Sons", product: "Corporate Gift Box — Assorted 24 pc", quantity: "150 Boxes", location: "Trichy, Tamil Nadu", requiredDate: "2026-10-05", status: "Awaiting Quote" as const },
];

export const supplierAnalytics = {
  totalEnquiries: 428,
  rfqsReceived: 96,
  orders: 54,
  revenue: "₹32.6L",
  productViews: "18,240",
  conversionRate: "12.6%",
};
