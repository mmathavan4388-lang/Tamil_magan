import {
  BarChart3,
  Bell,
  Building2,
  FileCheck,
  FileText,
  Flag,
  Gauge,
  Heart,
  Image,
  LayoutDashboard,
  LayoutList,
  ListChecks,
  Mail,
  MessageSquare,
  Package,
  PackagePlus,
  Receipt,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Tags,
  Users,
} from "lucide-react";
import type { DashboardNavItem } from "../layouts/DashboardLayout";

export const buyerNavItems: DashboardNavItem[] = [
  { to: "/buyer", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/buyer/rfqs", label: "My RFQs", icon: ListChecks },
  { to: "/buyer/orders", label: "My Orders", icon: ShoppingBag },
  { to: "/buyer/saved-suppliers", label: "Saved Suppliers", icon: Heart },
  { to: "/buyer/saved-products", label: "Saved Products", icon: Package },
  { to: "/buyer/messages", label: "Messages", icon: MessageSquare },
  { to: "/buyer/invoices", label: "Invoices", icon: Receipt },
  { to: "/buyer/settings", label: "Account Settings", icon: Settings },
];

export const supplierNavItems: DashboardNavItem[] = [
  { to: "/supplier", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/supplier/products", label: "My Products", icon: Package },
  { to: "/supplier/products/add", label: "Add Product", icon: PackagePlus },
  { to: "/supplier/orders", label: "Orders", icon: ShoppingBag },
  { to: "/supplier/rfqs", label: "RFQ Requests", icon: ListChecks },
  { to: "/supplier/messages", label: "Messages", icon: MessageSquare },
  { to: "/supplier/customers", label: "Customers", icon: Users },
  { to: "/supplier/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/supplier/verification", label: "Verification", icon: ShieldCheck },
  { to: "/supplier/business-profile", label: "Business Profile", icon: Building2 },
  { to: "/supplier/settings", label: "Settings", icon: Settings },
];

export const adminNavItems: DashboardNavItem[] = [
  { to: "/admin", label: "Dashboard", icon: Gauge, end: true },
  { to: "/admin/suppliers", label: "Approve Suppliers", icon: ShieldCheck },
  { to: "/admin/products", label: "Approve Products", icon: FileCheck },
  { to: "/admin/categories", label: "Manage Categories", icon: Tags },
  { to: "/admin/users", label: "Manage Users", icon: Users },
  { to: "/admin/rfqs", label: "Manage RFQs", icon: ListChecks },
  { to: "/admin/orders", label: "Manage Orders", icon: ShoppingBag },
  { to: "/admin/enquiries", label: "Manage Enquiries", icon: Mail },
  { to: "/admin/banners", label: "Manage Banners", icon: Image },
  { to: "/admin/homepage-content", label: "Homepage Content", icon: LayoutList },
  { to: "/admin/compliance-notices", label: "Compliance Notices", icon: FileText },
  { to: "/admin/reported-listings", label: "Reported Listings", icon: Flag },
  { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
];

export const notificationTypes = [
  { icon: Bell, label: "New RFQ" },
  { icon: Bell, label: "New quotation" },
  { icon: Bell, label: "New message" },
  { icon: Bell, label: "Order update" },
  { icon: Bell, label: "Supplier verification" },
  { icon: Bell, label: "Product approval" },
  { icon: Bell, label: "Account activity" },
];
