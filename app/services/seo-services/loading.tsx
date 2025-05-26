export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-slate-900">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      <span className="ml-4 text-lg">Loading SEO Services...</span>
    </div>
  );
}
