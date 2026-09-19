import { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, Sparkles } from "lucide-react";
import { Button } from "../components/ui/Button";

export function Login() {
  const [role, setRole] = useState<"buyer" | "supplier">("buyer");

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-charcoal-50 px-4 py-14">
      <div className="w-full max-w-md rounded-3xl border border-charcoal-100 bg-white p-8 shadow-card">
        <div className="flex flex-col items-center text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white">
            <Sparkles className="h-5 w-5" />
          </span>
          <h1 className="mt-4 text-xl font-extrabold text-charcoal-900">Login to KABERIAL PATTASU KADAI</h1>
          <p className="mt-1 text-sm text-charcoal-500">Access your buyer or supplier dashboard</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 rounded-xl bg-charcoal-100 p-1">
          <button onClick={() => setRole("buyer")} className={`rounded-lg py-2 text-sm font-semibold ${role === "buyer" ? "bg-white text-charcoal-900 shadow" : "text-charcoal-500"}`}>
            I&rsquo;m a Buyer
          </button>
          <button onClick={() => setRole("supplier")} className={`rounded-lg py-2 text-sm font-semibold ${role === "supplier" ? "bg-white text-charcoal-900 shadow" : "text-charcoal-500"}`}>
            I&rsquo;m a Supplier
          </button>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-6 space-y-4"
        >
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">Email</label>
            <input type="email" placeholder="you@company.com" className="w-full rounded-xl border border-charcoal-200 px-3.5 py-2.5 text-sm outline-none focus:border-brand-500" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-charcoal-600">Password</label>
            <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-charcoal-200 px-3.5 py-2.5 text-sm outline-none focus:border-brand-500" />
          </div>
          <Button to={role === "buyer" ? "/buyer" : "/supplier"} size="lg" className="w-full" icon={<LogIn className="h-4 w-4" />}>
            Login to {role === "buyer" ? "Buyer" : "Supplier"} Dashboard
          </Button>
        </form>

        <p className="mt-5 text-center text-xs text-charcoal-400">
          Demo authentication &mdash; no real account is created or verified.
        </p>
        <p className="mt-4 text-center text-sm text-charcoal-500">
          Don&rsquo;t have an account? <Link to="/register" className="font-semibold text-brand-600">Register</Link>
        </p>
      </div>
    </div>
  );
}
