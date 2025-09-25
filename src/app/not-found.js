import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Big 404 */}
      <h1 className="text-7xl font-extrabold text-gray-800">404</h1>

      {/* Title */}
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">Page Not Found</h2>

      {/* Description */}
      <p className="mt-2 text-gray-500 max-w-md">Sorry, the page you are looking for doesn’t exist or has been moved. Please check the URL or return to the homepage.</p>

      {/* Back to Home button */}
      <Link href="/" className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        ⬅ Back to Home
      </Link>
    </section>
  );
}
