import { SearchX } from "lucide-react";
import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-20 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
        <SearchX className="h-7 w-7" />
      </span>
      <h1 className="mt-5 text-2xl font-extrabold text-charcoal-900">Page not found</h1>
      <p className="mt-2 text-sm text-charcoal-500">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved.
      </p>
      <Button to="/" className="mt-6">Back to Homepage</Button>
    </div>
  );
}
