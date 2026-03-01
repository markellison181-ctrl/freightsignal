import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freight & Logistics Intelligence | FreightSignal Blog",
  description: "Expert analysis on freight rates, capacity trends, and supply chain strategies. Actionable intelligence for shippers, brokers, and logistics professionals.",
  keywords: "freight rate blog, trucking industry analysis, supply chain intelligence, freight market trends, logistics guides, shipping cost optimization",
  openGraph: {
    title: "Freight & Logistics Intelligence | FreightSignal Blog",
    description: "Expert freight market analysis and supply chain intelligence",
    type: "website",
  },
  alternates: {
    canonical: "https://freightsignal.io/blog"
  }
};

const blogPosts = [
  {
    id: 1,
    title: "Freight Rate Trends 2026: What Shippers Need to Know",
    slug: "freight-rate-trends-2026",
    description: "Comprehensive analysis of 2026 freight rate forecasts across truckload, LTL, and intermodal. Data-driven insights on capacity, demand, and pricing dynamics shaping the market.",
    category: "Analysis",
    readTime: "14 min read",
    publishDate: "Feb 28, 2026",
    featured: true,
    tags: ["Freight Rates", "Market Trends", "2026 Forecast"],
    stats: { value: "$940B", metric: "U.S. Trucking Revenue" }
  },
  {
    id: 2,
    title: "How to Reduce Freight Costs Without Sacrificing Service",
    slug: "how-to-reduce-freight-costs",
    description: "Proven strategies to cut 10-25% from your freight spend. Mode optimization, lane consolidation, carrier negotiation tactics, and technology tools that deliver real savings.",
    category: "Guide",
    readTime: "12 min read",
    publishDate: "Feb 28, 2026",
    featured: true,
    tags: ["Cost Reduction", "Shipping Strategy", "Optimization"],
    stats: { value: "10-25%", metric: "Typical Savings" }
  },
  {
    id: 3,
    title: "Understanding Spot vs Contract Rates in Trucking",
    slug: "spot-vs-contract-rates-trucking",
    description: "Master the two pricing mechanisms that define freight transportation. Learn when to use each, how they interact, and strategies to optimize your mix for maximum value.",
    category: "Guide",
    readTime: "11 min read",
    publishDate: "Feb 28, 2026",
    featured: true,
    tags: ["Spot Rates", "Contract Rates", "Trucking"],
    stats: { value: "80/20", metric: "Contract/Spot Split" }
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-darkblue via-darkblue-300 to-darkblue-500">
      <section className="relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-orange/10 border border-orange/20 rounded-full px-6 py-2 mb-8">
              <span className="text-orange text-sm font-semibold">🚛 Expert Freight Market Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Freight & Logistics
              <span className="text-orange block">Intelligence & Guides</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              Navigate the freight market with expert analysis, rate forecasts, and cost optimization strategies.
              We decode the <span className="text-orange font-semibold">$940 billion U.S. trucking industry</span> for you.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-darkblue-500/50 border border-darkblue-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-orange mb-1">$940B</div>
                <div className="text-sm text-gray-400">Industry Revenue</div>
              </div>
              <div className="bg-darkblue-500/50 border border-darkblue-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-orange mb-1">3.5M</div>
                <div className="text-sm text-gray-400">Truck Drivers</div>
              </div>
              <div className="bg-darkblue-500/50 border border-darkblue-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-orange mb-1">11.8B</div>
                <div className="text-sm text-gray-400">Tons Shipped</div>
              </div>
              <div className="bg-darkblue-500/50 border border-darkblue-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-orange mb-1">72%</div>
                <div className="text-sm text-gray-400">Freight by Truck</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Intelligence & Guides</h2>
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-gradient-to-r from-darkblue-500/50 to-darkblue-500/20 border border-darkblue-50/30 rounded-xl overflow-hidden hover:border-orange/40 transition-all duration-300 card-hover">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-orange/10 text-orange px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
                      <div className="text-gray-400 text-sm">{post.readTime}</div>
                      <div className="text-gray-400 text-sm">{post.publishDate}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-orange transition-colors leading-tight">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, j) => (
                          <span key={j} className="bg-darkblue/50 text-gray-400 px-2 py-1 rounded text-xs">{tag}</span>
                        ))}
                      </div>
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-orange hover:text-orange-300 font-medium text-sm">
                        Read Full Guide →
                      </Link>
                    </div>
                  </div>
                  <div className="bg-darkblue/50 p-8 flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange mb-2">{post.stats.value}</div>
                      <div className="text-gray-400 text-sm">{post.stats.metric}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-orange/10 via-orange/5 to-transparent border border-orange/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Get Weekly Freight Intelligence</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join <span className="text-orange font-semibold">logistics professionals</span> who get our latest rate analysis, market forecasts, and optimization strategies delivered weekly.
            </p>
            <Link href="/#subscribe" className="inline-flex items-center gap-2 bg-orange text-darkblue px-8 py-4 rounded-lg font-semibold hover:bg-orange-300 transition-all duration-200 hover:shadow-lg hover:shadow-orange/20">
              Subscribe Free →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
