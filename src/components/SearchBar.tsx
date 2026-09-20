import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar({
  className = "",
  autoFocus = false,
  initialValue = "",
  onSubmit,
}: {
  className?: string;
  autoFocus?: boolean;
  initialValue?: string;
  onSubmit?: () => void;
}) {
  const [value, setValue] = useState(initialValue);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    navigate(`/products?q=${encodeURIComponent(value.trim())}`);
    onSubmit?.();
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        type="search"
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search products... (English / தமிழ்)"
        className="w-full rounded-full border border-brand-200 bg-white py-2.5 pl-11 pr-4 text-sm text-brand-900 placeholder:text-brand-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
      />
      <button
        type="submit"
        aria-label="Search"
        className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-500"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" strokeLinecap="round" />
        </svg>
      </button>
    </form>
  );
}
