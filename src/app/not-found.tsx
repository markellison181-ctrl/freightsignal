import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-orange text-3xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-muted mb-8 leading-relaxed">
          This shipment seems to have gone off-route. Let&apos;s get you back to the freight intelligence that matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-orange text-darkblue px-6 py-3 rounded font-semibold hover:bg-orange-300 transition-all duration-200"
          >
            Back to Home
          </Link>
          <Link
            href="/#subscribe"
            className="border border-orange/40 text-orange px-6 py-3 rounded font-semibold hover:bg-orange/10 transition-all duration-200"
          >
            Subscribe Free
          </Link>
        </div>
        <div className="mt-10 flex justify-center gap-6 text-sm">
          <Link href="/blog" className="text-muted hover:text-orange transition-colors">Blog</Link>
          <Link href="/pricing" className="text-muted hover:text-orange transition-colors">Pricing</Link>
        </div>
      </div>
    </div>
  );
}
