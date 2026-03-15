export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white" role="status" aria-live="polite" aria-label="Loading page content">
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <div className="w-8 h-8 border-3 border-[#96C3E1] border-t-[#2D69B4] rounded-full animate-spin" />
        <p className="text-sm text-[#0F2D5A]/60 tracking-wide sr-only">Loading…</p>
      </div>
    </div>
  );
}
