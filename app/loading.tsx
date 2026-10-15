export default function Loading() {
  return (
    <div className="min-h-screen bg-logistack-navy flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-logistack-periwinkle border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="text-white text-base font-bold">Loading</div>
      </div>
    </div>
  );
}
