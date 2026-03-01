import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreightSignal — Freight & Supply Chain Intelligence",
  description:
    "Daily intelligence on freight rates, capacity, and supply chain trends across US transportation markets. Built for freight brokers, shippers, and logistics companies.",
  metadataBase: new URL("https://freightsignal.io"),
  alternates: { canonical: "https://freightsignal.io" },
  authors: [{ name: "SignalStack Media" }],
  creator: "SignalStack Media",
  publisher: "SignalStack Media",
  openGraph: {
    title: "FreightSignal — Freight & Supply Chain Intelligence",
    description:
      "Daily intelligence on freight rates, capacity, and supply chain trends across US transportation markets.",
    type: "website",
    url: "https://freightsignal.io",
    siteName: "FreightSignal",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FreightSignal - Freight & Supply Chain Intelligence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FreightSignal — Freight & Supply Chain Intelligence", 
    description:
      "Daily intelligence on freight rates, capacity, and supply chain trends across US transportation markets.",
    images: ["/og-image.png"],
  },
};

function Header() {
  return (
    <header className="border-b border-darkblue-50/20 bg-darkblue/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-orange rounded-sm flex items-center justify-center">
            <span className="text-darkblue font-bold text-sm">FS</span>
          </div>
          <span className="text-white font-semibold text-xl tracking-tight">
            Freight<span className="text-orange">Signal</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/archive" className="text-gray-300 hover:text-orange transition-colors text-sm">
            Archive
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-orange transition-colors text-sm">
            Pricing
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-orange transition-colors text-sm">
            Blog
          </Link>
          <Link
            href="/#subscribe"
            className="bg-orange text-darkblue px-5 py-2 rounded text-sm font-semibold hover:bg-orange-300 transition-all duration-200 hover:shadow-lg hover:shadow-orange/20"
          >
            Subscribe Free
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-darkblue-50/20 bg-darkblue-500">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-orange rounded-sm flex items-center justify-center">
                <span className="text-darkblue font-bold text-xs">FS</span>
              </div>
              <span className="text-white font-semibold">
                Freight<span className="text-orange">Signal</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Freight and supply chain intelligence, delivered daily.
            </p>
            <p className="text-muted-dim text-xs mt-4">
              A <a href="https://signalstackmedia.com" className="text-orange hover:text-orange-300 transition-colors">SignalStack</a> newsletter.
            </p>
          </div>
          <div>
            <h4 className="text-orange/80 font-semibold mb-4 label-uppercase">Content</h4>
            <ul className="space-y-2">
              <li><Link href="/archive" className="text-muted hover:text-orange transition-colors text-sm">Newsletter Archive</Link></li>
              <li><Link href="/archive/sample" className="text-muted hover:text-orange transition-colors text-sm">Sample Issue</Link></li>
              <li><Link href="/blog" className="text-muted hover:text-orange transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-orange/80 font-semibold mb-4 label-uppercase">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="text-muted hover:text-orange transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/#subscribe" className="text-muted hover:text-orange transition-colors text-sm">Subscribe</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-orange/80 font-semibold mb-4 label-uppercase">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-muted hover:text-orange transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-muted hover:text-orange transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-darkblue-50/20 text-center">
          <p className="text-muted-dim text-sm">
            © {new Date().getFullYear()} SignalStack Media Inc. All rights reserved.
            <br />
            181 Bay Street, Suite 1400, Toronto ON M5J 2T3, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://freightsignal.io/#organization",
      name: "SignalStack Media LLC",
      url: "https://signalstackmedia.com",
      logo: "https://freightsignal.io/og-image.png",
      sameAs: ["https://x.com/SignalStackHQ"],
    },
    {
      "@type": "WebSite",
      "@id": "https://freightsignal.io/#website",
      url: "https://freightsignal.io",
      name: "FreightSignal",
      publisher: { "@id": "https://freightsignal.io/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://freightsignal.io/blog?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Periodical",
      name: "FreightSignal Newsletter",
      url: "https://freightsignal.io",
      publisher: { "@id": "https://freightsignal.io/#organization" },
      description: "Daily intelligence on freight rates, capacity, and supply chain trends across US transportation markets.",
      isAccessibleForFree: true,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-darkblue text-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}