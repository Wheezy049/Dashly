import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">Sorry, we couldn’t find the page you’re looking for.</p>
      <Link
        href="/"
        className="text-blue-600 font-medium hover:underline"
      >
        Go back home
      </Link>
    </div>
  );
}
