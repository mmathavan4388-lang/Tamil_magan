import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { useProducts } from "../context/ProductsContext";
import { categories } from "../data/categories";
import { ProductImage } from "../components/ProductImage";
import { formatINR } from "../lib/format";
import type { Product } from "../types";

const ADMIN_PASSWORD = "kaberial2024";
const SESSION_KEY = "kpk_admin_authed";

const emptyForm = {
  nameEn: "",
  nameTa: "",
  category: categories[0].slug,
  price: "",
  unit: "1 BOX",
  rate: "",
};

function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "1");
      onSuccess();
    } else {
      setError("Incorrect password.");
    }
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-card">
        <h1 className="text-xl font-bold text-brand-950 mb-1">Admin Login</h1>
        <p className="text-sm text-brand-500 mb-4">Staff access only.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin password"
          className="w-full rounded-lg border border-brand-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
        />
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          className="mt-4 w-full rounded-full bg-brand-700 py-2.5 font-semibold text-white hover:bg-brand-800"
        >
          Login
        </button>
        <p className="mt-3 text-xs text-brand-400">Demo password: kaberial2024</p>
      </form>
    </div>
  );
}

function ImageUploadCell({ product }: { product: Product }) {
  const { updateProduct } = useProducts();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      updateProduct(product.id, { image: String(reader.result) });
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="flex items-center gap-2">
      <div className="h-12 w-12 overflow-hidden rounded-lg shrink-0">
        <ProductImage category={product.category} image={product.image} alt={product.nameEn} className="h-full w-full object-cover" />
      </div>
      <button
        onClick={() => inputRef.current?.click()}
        className="text-xs font-semibold text-brand-700 hover:underline"
      >
        Upload
      </button>
      {product.image && (
        <button
          onClick={() => updateProduct(product.id, { image: undefined })}
          className="text-xs font-semibold text-red-500 hover:underline"
        >
          Remove
        </button>
      )}
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
    </div>
  );
}

export function AdminDashboard() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(SESSION_KEY) === "1");
  const [form, setForm] = useState(emptyForm);
  const [filterCategory, setFilterCategory] = useState("");

  if (!authed) return <AdminLogin onSuccess={() => setAuthed(true)} />;

  const visibleProducts = filterCategory ? products.filter((p) => p.category === filterCategory) : products;

  function handleAdd(e: FormEvent) {
    e.preventDefault();
    if (!form.nameEn || !form.price) return;
    addProduct({
      nameEn: form.nameEn,
      nameTa: form.nameTa,
      category: form.category,
      price: Number(form.price),
      unit: form.unit,
      rate: Number(form.rate || form.price),
      slug: `${Date.now()}-${form.nameEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      enabled: true,
    });
    setForm(emptyForm);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-brand-950">Admin Dashboard</h1>
          <p className="text-sm text-brand-500">Manage products, prices, images, categories and gift boxes.</p>
        </div>
        <button
          onClick={() => {
            sessionStorage.removeItem(SESSION_KEY);
            setAuthed(false);
          }}
          className="rounded-full border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50"
        >
          Log Out
        </button>
      </div>

      <form onSubmit={handleAdd} className="rounded-2xl bg-white p-5 shadow-card">
        <h2 className="font-bold text-brand-950 mb-3">Add New Product</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <input
            required
            placeholder="English Name"
            value={form.nameEn}
            onChange={(e) => setForm((f) => ({ ...f, nameEn: e.target.value }))}
            className="col-span-2 rounded-lg border border-brand-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
          />
          <input
            placeholder="Tamil Name"
            value={form.nameTa}
            onChange={(e) => setForm((f) => ({ ...f, nameTa: e.target.value }))}
            className="tamil col-span-2 rounded-lg border border-brand-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
          />
          <select
            value={form.category}
            onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
            className="rounded-lg border border-brand-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
          >
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>{c.nameEn}</option>
            ))}
          </select>
          <input
            placeholder="Unit (e.g. 1 BOX)"
            value={form.unit}
            onChange={(e) => setForm((f) => ({ ...f, unit: e.target.value }))}
            className="rounded-lg border border-brand-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
          />
          <input
            required
            type="number"
            placeholder="Price ₹"
            value={form.price}
            onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
            className="rounded-lg border border-brand-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
          />
          <input
            type="number"
            placeholder="Net Rate ₹"
            value={form.rate}
            onChange={(e) => setForm((f) => ({ ...f, rate: e.target.value }))}
            className="rounded-lg border border-brand-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
          />
        </div>
        <button type="submit" className="mt-3 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800">
          + Add Product
        </button>
      </form>

      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-brand-700">Filter by category:</label>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="rounded-lg border border-brand-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
        >
          <option value="">All ({products.length})</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>{c.nameEn}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-2xl bg-white shadow-card">
        <table className="w-full min-w-[900px] text-sm">
          <thead>
            <tr className="border-b border-brand-100 text-left text-xs uppercase text-brand-500">
              <th className="p-3">Image</th>
              <th className="p-3">English Name</th>
              <th className="p-3">Tamil Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Net Rate</th>
              <th className="p-3">Unit</th>
              <th className="p-3">Flags</th>
              <th className="p-3">Enabled</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {visibleProducts.map((product) => (
              <tr key={product.id} className="border-b border-brand-50 align-middle">
                <td className="p-3"><ImageUploadCell product={product} /></td>
                <td className="p-3">
                  <input
                    value={product.nameEn}
                    onChange={(e) => updateProduct(product.id, { nameEn: e.target.value })}
                    className="w-40 rounded border border-transparent bg-transparent px-1.5 py-1 hover:border-brand-200 focus:border-brand-500 focus:outline-none"
                  />
                </td>
                <td className="p-3">
                  <input
                    value={product.nameTa}
                    onChange={(e) => updateProduct(product.id, { nameTa: e.target.value })}
                    className="tamil w-36 rounded border border-transparent bg-transparent px-1.5 py-1 hover:border-brand-200 focus:border-brand-500 focus:outline-none"
                  />
                </td>
                <td className="p-3">
                  <select
                    value={product.category}
                    onChange={(e) => updateProduct(product.id, { category: e.target.value })}
                    className="rounded border border-transparent bg-transparent px-1.5 py-1 hover:border-brand-200 focus:border-brand-500 focus:outline-none"
                  >
                    {categories.map((c) => (
                      <option key={c.slug} value={c.slug}>{c.nameEn}</option>
                    ))}
                  </select>
                </td>
                <td className="p-3">
                  <input
                    type="number"
                    value={product.price}
                    onChange={(e) => updateProduct(product.id, { price: Number(e.target.value) })}
                    className="w-20 rounded border border-transparent bg-transparent px-1.5 py-1 hover:border-brand-200 focus:border-brand-500 focus:outline-none"
                  />
                </td>
                <td className="p-3">
                  <input
                    type="number"
                    value={product.rate}
                    onChange={(e) => updateProduct(product.id, { rate: Number(e.target.value) })}
                    className="w-20 rounded border border-transparent bg-transparent px-1.5 py-1 hover:border-brand-200 focus:border-brand-500 focus:outline-none"
                  />
                </td>
                <td className="p-3">
                  <input
                    value={product.unit}
                    onChange={(e) => updateProduct(product.id, { unit: e.target.value })}
                    className="w-16 rounded border border-transparent bg-transparent px-1.5 py-1 hover:border-brand-200 focus:border-brand-500 focus:outline-none"
                  />
                </td>
                <td className="p-3">
                  <div className="flex flex-col gap-1 text-xs">
                    <label className="flex items-center gap-1.5">
                      <input
                        type="checkbox"
                        checked={!!product.isNew}
                        onChange={(e) => updateProduct(product.id, { isNew: e.target.checked })}
                      />
                      New
                    </label>
                    <label className="flex items-center gap-1.5">
                      <input
                        type="checkbox"
                        checked={!!product.isBestSeller}
                        onChange={(e) => updateProduct(product.id, { isBestSeller: e.target.checked })}
                      />
                      Best Seller
                    </label>
                  </div>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => updateProduct(product.id, { enabled: product.enabled === false })}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      product.enabled === false ? "bg-red-100 text-red-600" : "bg-brand-100 text-brand-700"
                    }`}
                  >
                    {product.enabled === false ? "Disabled" : "Enabled"}
                  </button>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => {
                      if (confirm(`Delete "${product.nameEn}"?`)) deleteProduct(product.id);
                    }}
                    className="text-xs font-semibold text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {visibleProducts.length === 0 && (
          <p className="p-8 text-center text-brand-500">No products in this category yet.</p>
        )}
      </div>

      <p className="text-xs text-brand-400">
        Price: {formatINR(0)} format used across storefront. Changes are saved automatically to this browser.
      </p>
    </div>
  );
}
