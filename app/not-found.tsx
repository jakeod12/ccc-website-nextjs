import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F2D5A] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-[#96C3E1]/60 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Error 404
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-[#96C3E1] text-lg mb-10 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-[#2D69B4] text-white font-semibold rounded hover:bg-[#96C3E1] hover:text-[#0F2D5A] active:opacity-80 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
