export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Supplier {
  id: string;
  name: string;
  slug: string;
  logo: string;
  location: string;
  state: string;
  verified: boolean;
  yearsInBusiness: number;
  productCount: number;
  minOrder: string;
  categories: string[];
  gstVerified: boolean;
  responseRate: string;
  description: string;
  rating: number;
  reviewCount: number;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  supplierId: string;
  images: string[];
  moq: string;
  priceLabel: string;
  priceRange?: string;
  availableQty: string;
  location: string;
  specs: ProductSpec[];
  packaging: string;
  description: string;
  isNew?: boolean;
  featured?: boolean;
  supplierName?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  demo: true;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  editable: true;
}

export interface RFQRecord {
  id: string;
  product: string;
  quantity: string;
  location: string;
  requiredDate: string;
  status: "Pending" | "Quoted" | "Accepted" | "Closed";
  quotesReceived: number;
  createdAt: string;
}

export interface QuoteRecord {
  id: string;
  supplier: string;
  product: string;
  quantity: string;
  price: string;
  taxes: string;
  shipping: string;
  estimatedDelivery: string;
  validity: string;
  terms: string;
}

export interface OrderRecord {
  id: string;
  product: string;
  supplier: string;
  quantity: string;
  amount: string;
  status: "Processing" | "Confirmed" | "Shipped" | "Delivered" | "Cancelled";
  date: string;
}
