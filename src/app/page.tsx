"use client";

import Link from "next/link";
import { useState } from "react";

/* ── Freight/Logistics SVG Icons ── */
const IconTruck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 1-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m6.75 4.5v-3a1.125 1.125 0 0 1 1.125-1.125h3.375a1.125 1.125 0 0 1 1.125 1.125v3M6 10.5a7.5 7.5 0 1 1 15 0v-3.75a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 0 1 1.125 1.125V21a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V3.75a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 0 1 1.125 1.125v3.75Z" />
  </svg>
);
const IconGlobeAlt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.38 9.38 0 0 1-4.121-.952A4.125 4.125 0 0 0 15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
);
const IconCurrencyDollar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.467-.22-2.121-.659-1.172-.879-1.172-2.303 0-3.182C10.464 7.69 11.232 7.47 12 7.47c.768 0 1.536.22 2.121.659L15 9" />
  </svg>
);
const IconChartBar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);
const IconNewspaper = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
  </svg>
);
const IconBolt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);
const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-orange mt-0.5 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("You're in. Check your inbox for confirmation.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm transition-all duration-200"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-orange text-darkblue px-6 py-3 rounded font-semibold text-sm hover:bg-orange-300 transition-all duration-200 hover:shadow-lg hover:shadow-orange/20 disabled:opacity-50 whitespace-nowrap"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe Free"}
        </button>
      </form>
      {message && (
        <p className={`text-sm mt-3 ${status === "success" ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-darkblue via-darkblue-300 to-darkblue" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(232,124,62,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              <span className="text-orange text-sm font-medium">Free weekly edition every Wednesday</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Know which{" "}
              <span className="text-orange">freight rates</span>{" "}
              are moving before your competitors do.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              FreightSignal delivers daily intelligence on freight rates, capacity,
              regulatory changes, and supply chain disruptions across US transportation
              markets. The edge you need to optimize your freight spend.
            </p>
            <div id="subscribe">
              <SubscribeForm />
              <p className="text-gray-500 text-xs mt-4">
                Free weekly digest. No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signal */}
      <section className="py-10 bg-darkblue-500 border-y border-darkblue-50/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm leading-relaxed">
            Built for freight brokers, shippers, logistics companies, and fleet operators who need rate intelligence first.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Every issue delivers <span className="text-orange">five critical signals</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              No fluff, no filler. Each edition of FreightSignal is structured to give you
              the freight intelligence that matters in 5 minutes or less.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <IconTruck />,
                title: "Rate Alert of the Week",
                description: "The one freight lane or capacity shift that signals where rates are heading. Full analysis with carrier dynamics and market drivers.",
              },
              {
                icon: <IconChartBar />,
                title: "Spot Rate Movements",
                description: "5-7 key lane rate changes with carrier capacity analysis and market context. The rates that moved this week.",
              },
              {
                icon: <IconGlobeAlt />,
                title: "Supply Chain Intel",
                description: "Port congestion updates, rail service alerts, and weather impacts. Know what's disrupting your lanes before it hits rates.",
              },
              {
                icon: <IconNewspaper />,
                title: "Regulatory Watch",
                description: "ELD updates, emissions mandates, and Hours of Service changes. New rules that impact capacity and rates.",
              },
              {
                icon: <IconCurrencyDollar />,
                title: "Fuel & Cost Drivers",
                description: "Diesel price trends, maintenance costs, and driver wage inflation. The cost factors that drive rate negotiations.",
              },
              {
                icon: <IconBolt />,
                title: "Pro: Daily Alerts",
                description: "Pro subscribers get instant rate alerts filtered to their lanes and modes. Plus full rate database and contract benchmarks.",
              },
            ].map((item, i) => (
              <div key={i} className="card-hover bg-darkblue-500/50 border border-darkblue-50/20 rounded-lg p-6 hover:border-orange/30">
                <div className="text-orange mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 tracking-tight">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Preview */}
      <section className="py-20 bg-darkblue-500">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">See what you'll get</h2>
            <p className="text-gray-400">Read a real issue of FreightSignal</p>
          </div>
          <div className="max-w-3xl mx-auto sample-glow">
            <div className="bg-darkblue border border-darkblue-50/30 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-darkblue-50/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-orange rounded-sm flex items-center justify-center">
                    <span className="text-darkblue font-bold text-xs">FS</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">FreightSignal Weekly</div>
                    <div className="text-gray-500 text-xs">Issue #1 — February 28, 2026</div>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-orange label-uppercase mb-1">Rate Alert of the Week</div>
                  <h3 className="text-lg font-bold tracking-tight">Outbound LA Rates Spike 18% as Port Congestion Worsens</h3>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Los Angeles to Chicago dry van rates hit $2.85/mile (+18% WoW) as port congestion and chassis shortages 
                    create capacity constraints. Import surge from Chinese New Year backlog driving exceptional demand...
                  </p>
                </div>
                <div className="border-t border-darkblue-50/20 pt-4">
                  <div className="text-orange label-uppercase mb-2">Top Rate Movements This Week</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">LA to Chicago (Dry Van)</span>
                      <span className="text-orange font-semibold">$2.85/mi (+18%)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Miami to Atlanta (Reefer)</span>
                      <span className="text-orange font-semibold">$2.12/mi (+8%)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Dallas to Denver (Flatbed)</span>
                      <span className="text-red-400 font-semibold">$2.45/mi (-12%)</span>
                    </div>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <Link
                    href="/archive/sample"
                    className="inline-flex items-center gap-2 bg-orange text-darkblue px-6 py-3 rounded font-semibold text-sm hover:bg-orange-300 transition-all duration-200 hover:shadow-lg hover:shadow-orange/20"
                  >
                    Read the Full Issue
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Start free. Upgrade when you need more.
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            The free weekly edition gives you the essential signals. Pro and Enterprise unlock
            daily alerts, full rate access, and team features.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-hover bg-gradient-to-b from-darkblue-500/80 to-darkblue-500/40 border border-darkblue-50/30 rounded-xl p-8">
              <div className="text-gray-400 label-uppercase mb-2">Free</div>
              <div className="text-4xl font-bold mb-1">$0</div>
              <div className="text-gray-500 text-sm mb-6">forever</div>
              <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
                <li className="flex items-start gap-2"><IconCheck /> Weekly digest every Wednesday</li>
                <li className="flex items-start gap-2"><IconCheck /> Rate Alert of the Week</li>
                <li className="flex items-start gap-2"><IconCheck /> Top rate movements summary</li>
                <li className="flex items-start gap-2"><IconCheck /> Supply chain updates</li>
              </ul>
              <Link href="/#subscribe" className="block w-full text-center border border-orange text-orange px-6 py-3 rounded font-semibold text-sm hover:bg-orange hover:text-darkblue transition-all duration-200">
                Subscribe Free
              </Link>
            </div>
            <div className="card-hover bg-gradient-to-b from-darkblue-500/80 to-darkblue-500/40 border-2 border-orange rounded-xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-darkblue text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-orange label-uppercase mb-2">Pro</div>
              <div className="text-4xl font-bold mb-1">$29</div>
              <div className="text-gray-500 text-sm mb-6">per month</div>
              <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
                <li className="flex items-start gap-2"><IconCheck /> Everything in Free</li>
                <li className="flex items-start gap-2"><IconCheck /> Daily rate alerts</li>
                <li className="flex items-start gap-2"><IconCheck /> Full rate database access</li>
                <li className="flex items-start gap-2"><IconCheck /> Lane & mode filters</li>
                <li className="flex items-start gap-2"><IconCheck /> Excel/CSV data export</li>
              </ul>
              <Link href="/pricing" className="block w-full text-center bg-orange text-darkblue px-6 py-3 rounded font-semibold text-sm hover:bg-orange-300 transition-all duration-200 hover:shadow-lg hover:shadow-orange/20">
                Start Pro Trial
              </Link>
            </div>
            <div className="card-hover bg-gradient-to-b from-darkblue-500/80 to-darkblue-500/40 border border-darkblue-50/30 rounded-xl p-8">
              <div className="text-gray-400 label-uppercase mb-2">Enterprise</div>
              <div className="text-4xl font-bold mb-1">$99</div>
              <div className="text-gray-500 text-sm mb-6">per month</div>
              <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
                <li className="flex items-start gap-2"><IconCheck /> Everything in Pro</li>
                <li className="flex items-start gap-2"><IconCheck /> Up to 10 team seats</li>
                <li className="flex items-start gap-2"><IconCheck /> API access</li>
                <li className="flex items-start gap-2"><IconCheck /> Custom lane alerts</li>
                <li className="flex items-start gap-2"><IconCheck /> Priority support</li>
              </ul>
              <Link href="/pricing" className="block w-full text-center border border-orange text-orange px-6 py-3 rounded font-semibold text-sm hover:bg-orange hover:text-darkblue transition-all duration-200">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-darkblue-500">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Freight rates change fast.
          </h2>
          <p className="text-gray-400 mb-8">
            Join the brokers, shippers, and logistics pros who start every week
            with FreightSignal intelligence.
          </p>
          <div className="flex justify-center">
            <SubscribeForm />
          </div>
        </div>
      </section>
    </>
  );
}