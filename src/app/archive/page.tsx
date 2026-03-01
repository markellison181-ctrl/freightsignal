import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Archive — FreightSignal",
  description: "Browse past issues of FreightSignal, weekly freight market intelligence for shippers, brokers, and logistics professionals.",
};

const issues = [
  {
    slug: "sample",
    date: "February 28, 2026",
    title: "Issue #1 — Truckload Spot Rates Surge 12% YoY; Diesel Climbs Past $4; Carrier Rejections Hit 8-Month High",
    signal: "Truckload Spot Rates Surge 12% Year-over-Year",
    isNew: true,
  },
];

const blogPosts = [
  {
    slug: "freight-rate-trends-2026",
    date: "February 28, 2026",
    title: "Freight Rate Trends 2026: What Shippers Need to Know",
    description: "Comprehensive analysis of 2026 freight rate forecasts across truckload, LTL, and intermodal. Data-driven insights on capacity, demand, and pricing dynamics.",
  },
  {
    slug: "how-to-reduce-freight-costs",
    date: "February 28, 2026",
    title: "How to Reduce Freight Costs Without Sacrificing Service",
    description: "Proven strategies to cut 10-25% from your freight spend. Mode optimization, lane consolidation, carrier negotiation tactics, and technology tools.",
  },
  {
    slug: "spot-vs-contract-rates-trucking",
    date: "February 28, 2026",
    title: "Understanding Spot vs Contract Rates in Trucking",
    description: "Master the two pricing mechanisms that define freight transportation. Learn when to use each and strategies to optimize your mix.",
  },
];

export default function ArchivePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold mb-4">
        Newsletter <span className="text-orange">Archive</span>
      </h1>
      <p className="text-gray-400 mb-12">
        Browse past issues of FreightSignal. Each issue delivers the week&apos;s most important
        freight market intelligence — rates, capacity, regulations, and supply chain developments.
      </p>

      {/* Issues */}
      <section className="mb-16">
        <h2 className="text-orange uppercase tracking-wider text-sm font-semibold mb-6">Issues</h2>
        <div className="space-y-4">
          {issues.map((issue) => (
            <Link
              key={issue.slug}
              href={`/archive/${issue.slug}`}
              className="block bg-darkblue-500/50 border border-darkblue-50/20 rounded-lg p-6 hover:border-orange/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gray-400 text-sm">{issue.date}</span>
                    {issue.isNew && (
                      <span className="bg-orange/10 text-orange text-xs font-semibold px-2 py-0.5 rounded-full">NEW</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{issue.title}</h3>
                  <p className="text-gray-400 text-sm">Top Signal: {issue.signal}</p>
                </div>
                <span className="text-orange text-sm shrink-0">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section>
        <h2 className="text-orange uppercase tracking-wider text-sm font-semibold mb-6">Blog & Guides</h2>
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-darkblue-500/50 border border-darkblue-50/20 rounded-lg p-6 hover:border-orange/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <h3 className="text-lg font-semibold mb-1 mt-1">{post.title}</h3>
                  <p className="text-gray-400 text-sm">{post.description}</p>
                </div>
                <span className="text-orange text-sm shrink-0">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
