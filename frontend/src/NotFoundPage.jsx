import { useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const error = useRouteError();
  console.error(error); // optional for debugging

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50 text-gray-800">
      <h1 className="text-9xl font-extrabold text-gray-900">404</h1>
      <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      {error && (
        <p className="mt-4 text-gray-500 italic">
          {error.statusText || error.message}
        </p>
      )}
      <a
        href="/"
        className="mt-6 inline-block px-6 py-3 text-white bg-gray-900 hover:bg-gray-700 rounded-lg shadow transition-all"
      >
        Go Back Home
      </a>
    </div>
  );
}
