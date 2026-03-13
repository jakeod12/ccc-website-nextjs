export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-[#96C3E1] border-t-[#2D69B4] rounded-full animate-spin" />
        <p className="text-sm text-[#0F2D5A]/60 tracking-wide">Loading…</p>
      </div>
    </div>
  );
}
