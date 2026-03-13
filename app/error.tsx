"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#0F2D5A] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-[#96C3E1]/60 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Something went wrong
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Unexpected Error
        </h1>
        <p className="text-[#96C3E1] text-lg mb-10 max-w-md mx-auto">
          We hit a snag loading this page. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="inline-block px-8 py-3.5 bg-[#2D69B4] text-white font-semibold rounded hover:bg-[#96C3E1] hover:text-[#0F2D5A] transition-all duration-300 cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
