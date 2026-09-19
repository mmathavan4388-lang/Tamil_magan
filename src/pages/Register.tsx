import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, UserPlus } from "lucide-react";
import { Button } from "../components/ui/Button";

export function Register() {
  const [role, setRole] = useState<"buyer" | "supplier">("buyer");

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-charcoal-50 px-4 py-14">
      <div className="w-full max-w-lg rounded-3xl border border-charcoal-100 bg-white p-8 shadow-card">
        <div className="flex flex-col items-center text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white">
            <Sparkles className="h-5 w-5" />
          </span>
          <h1 className="mt-4 text-xl font-extrabold text-charcoal-900">Create Your Account</h1>
          <p className="mt-1 text-sm text-charcoal-500">Join KABERIAL PATTASU KADAI as a buyer or supplier</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 rounded-xl bg-charcoal-100 p-1">
          <button onClick={() => setRole("buyer")} className={`rounded-lg py-2 text-sm font-semibold ${role === "buyer" ? "bg-white text-charcoal-900 shadow" : "text-charcoal-500"}`}>
            Register as Buyer
          </button>
          <button onClick={() => setRole("supplier")} className={`rounded-lg py-2 text-sm font-semibold ${role === "supplier" ? "bg-white text-charcoal-900 shadow" : "text-charcoal-500"}`}>
            Register as Supplier
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Full Name" placeholder="Your name" />
          <Field label="Business Name" placeholder="Company name" />
          <Field label="Phone" placeholder="+91 90000 00000" />
          <Field label="Email" placeholder="you@company.com" type="email" />
          {role === "supplier" && (
            <>
              <Field label="GST Number" placeholder="22AAAAA0000A1Z5" />
              <Field label="City" placeholder="e.g. Sivakasi" />
            </>
          )}
          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">Password</label>
            <input type="password" placeholder="Create a password" className="w-full rounded-xl border border-charcoal-200 px-3.5 py-2.5 text-sm outline-none focus:border-brand-500" />
          </div>

          <div className="sm:col-span-2">
            <Button to={role === "buyer" ? "/buyer" : "/supplier"} size="lg" className="w-full" icon={<UserPlus className="h-4 w-4" />}>
              Create {role === "buyer" ? "Buyer" : "Supplier"} Account
            </Button>
          </div>
        </form>

        <p className="mt-5 text-center text-xs text-charcoal-400">
          Demo registration &mdash; no real account is created. Supplier accounts require document verification
          before receiving a Verified badge.
        </p>
        <p className="mt-4 text-center text-sm text-charcoal-500">
          Already have an account? <Link to="/login" className="font-semibold text-brand-600">Login</Link>
        </p>
      </div>
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full rounded-xl border border-charcoal-200 px-3.5 py-2.5 text-sm outline-none focus:border-brand-500" />
    </div>
  );
}
