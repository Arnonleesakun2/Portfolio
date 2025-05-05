import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-highlight">404</h1>
          <h2 className="text-3xl font-semibold">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="btn btn-neutral gap-2 rounded-4xl"
          >
            <Home size={18} />
            Go to Homepage
          </Link>
        </div>
      </div>
      
      <div className="mt-16">
        <div className="bg-highlight h-1 w-32 mx-auto rounded-full"></div>
      </div>
    </div>
  );
}
