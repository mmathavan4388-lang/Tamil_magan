import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <span className="text-6xl">🎆</span>
      <h1 className="mt-4 text-3xl font-bold text-brand-950">Page Not Found</h1>
      <p className="mt-2 text-brand-600">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 inline-block rounded-full bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-800">
        Back to Home
      </Link>
    </div>
  );
}
