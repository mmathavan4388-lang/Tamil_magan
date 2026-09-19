import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MainLayout } from "./layouts/MainLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { buyerNavItems, supplierNavItems, adminNavItems } from "./config/dashboardNav";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Categories } from "./pages/Categories";
import { Suppliers } from "./pages/Suppliers";
import { SupplierDetail } from "./pages/SupplierDetail";
import { BulkOrders } from "./pages/BulkOrders";
import { HowItWorks } from "./pages/HowItWorks";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Compliance } from "./pages/Compliance";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { LegalPage } from "./pages/LegalPage";
import { NotFound } from "./pages/NotFound";

import { BuyerOverview } from "./pages/buyer/Overview";
import { BuyerRFQs } from "./pages/buyer/RFQs";
import { BuyerOrders } from "./pages/buyer/Orders";
import { BuyerSavedSuppliers } from "./pages/buyer/SavedSuppliers";
import { BuyerSavedProducts } from "./pages/buyer/SavedProducts";
import { BuyerMessages } from "./pages/buyer/Messages";
import { BuyerInvoices } from "./pages/buyer/Invoices";
import { BuyerSettings } from "./pages/buyer/Settings";

import { SupplierOverview } from "./pages/supplier/Overview";
import { SupplierProducts } from "./pages/supplier/Products";
import { SupplierAddProduct } from "./pages/supplier/AddProduct";
import { SupplierOrders } from "./pages/supplier/Orders";
import { SupplierRFQRequests } from "./pages/supplier/RFQRequests";
import { SupplierMessages } from "./pages/supplier/Messages";
import { SupplierCustomers } from "./pages/supplier/Customers";
import { SupplierAnalytics } from "./pages/supplier/Analytics";
import { SupplierVerification } from "./pages/supplier/Verification";
import { SupplierBusinessProfile } from "./pages/supplier/BusinessProfile";
import { SupplierSettings } from "./pages/supplier/Settings";

import { AdminOverview } from "./pages/admin/Overview";
import { AdminSuppliers } from "./pages/admin/Suppliers";
import { AdminProducts } from "./pages/admin/Products";
import { AdminCategories } from "./pages/admin/Categories";
import { AdminUsers } from "./pages/admin/Users";
import { AdminRFQs } from "./pages/admin/RFQs";
import { AdminOrders } from "./pages/admin/Orders";
import { AdminEnquiries } from "./pages/admin/Enquiries";
import { AdminBanners } from "./pages/admin/Banners";
import { AdminHomepageContent } from "./pages/admin/HomepageContent";
import { AdminCompliance } from "./pages/admin/ComplianceNotices";
import { AdminReportedListings } from "./pages/admin/ReportedListings";
import { AdminAnalytics } from "./pages/admin/Analytics";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/suppliers/:slug" element={<SupplierDetail />} />
          <Route path="/bulk-orders" element={<BulkOrders />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/legal/:page" element={<LegalPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<DashboardLayout navItems={buyerNavItems} roleLabel="Buyer Dashboard" userName="Karthik Traders" />}>
          <Route path="/buyer" element={<BuyerOverview />} />
          <Route path="/buyer/rfqs" element={<BuyerRFQs />} />
          <Route path="/buyer/orders" element={<BuyerOrders />} />
          <Route path="/buyer/saved-suppliers" element={<BuyerSavedSuppliers />} />
          <Route path="/buyer/saved-products" element={<BuyerSavedProducts />} />
          <Route path="/buyer/messages" element={<BuyerMessages />} />
          <Route path="/buyer/invoices" element={<BuyerInvoices />} />
          <Route path="/buyer/settings" element={<BuyerSettings />} />
        </Route>

        <Route element={<DashboardLayout navItems={supplierNavItems} roleLabel="Supplier Dashboard" userName="KABERIAL Fireworks" />}>
          <Route path="/supplier" element={<SupplierOverview />} />
          <Route path="/supplier/products" element={<SupplierProducts />} />
          <Route path="/supplier/products/add" element={<SupplierAddProduct />} />
          <Route path="/supplier/orders" element={<SupplierOrders />} />
          <Route path="/supplier/rfqs" element={<SupplierRFQRequests />} />
          <Route path="/supplier/messages" element={<SupplierMessages />} />
          <Route path="/supplier/customers" element={<SupplierCustomers />} />
          <Route path="/supplier/analytics" element={<SupplierAnalytics />} />
          <Route path="/supplier/verification" element={<SupplierVerification />} />
          <Route path="/supplier/business-profile" element={<SupplierBusinessProfile />} />
          <Route path="/supplier/settings" element={<SupplierSettings />} />
        </Route>

        <Route element={<DashboardLayout navItems={adminNavItems} roleLabel="Admin Panel" userName="Admin" />}>
          <Route path="/admin" element={<AdminOverview />} />
          <Route path="/admin/suppliers" element={<AdminSuppliers />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/categories" element={<AdminCategories />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/rfqs" element={<AdminRFQs />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/enquiries" element={<AdminEnquiries />} />
          <Route path="/admin/banners" element={<AdminBanners />} />
          <Route path="/admin/homepage-content" element={<AdminHomepageContent />} />
          <Route path="/admin/compliance-notices" element={<AdminCompliance />} />
          <Route path="/admin/reported-listings" element={<AdminReportedListings />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
