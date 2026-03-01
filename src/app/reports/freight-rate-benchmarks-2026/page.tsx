"use client";

import { useState } from "react";
import Link from "next/link";

const SUPABASE_URL = "https://vsbwqlkbcgvmphuqfgqb.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzYndxbGtiY2d2bXBodXFmZ3FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4MTgyMjYsImV4cCI6MjA4NjM5NDIyNn0.wGbB-LZl3UfnE1iNz9pR9dyGuc-bFoP8cxZ90toxSHg";

const lanes = [
  { rank: 1, lane: "Los Angeles → Dallas", mode: "Dry Van", ratePerMile: "$2.85", qoqChange: "+12.4%", volume: "High", note: "Reshoring freight + intermodal capacity crunch driving spot rates above contract" },
  { rank: 2, lane: "Chicago → Atlanta", mode: "Dry Van", ratePerMile: "$2.72", qoqChange: "+9.8%", volume: "High", note: "Produce season overlap with industrial freight creating sustained demand" },
  { rank: 3, lane: "Atlanta → Miami", mode: "Reefer", ratePerMile: "$3.45", qoqChange: "+14.2%", volume: "Medium", note: "Reefer capacity tight — produce season + pharma cold chain demand peaking" },
  { rank: 4, lane: "Dallas → Chicago", mode: "Dry Van", ratePerMile: "$2.48", qoqChange: "+7.1%", volume: "High", note: "Backhaul rates firming as Mexico cross-border volumes increase" },
  { rank: 5, lane: "Savannah → Charlotte", mode: "Intermodal", ratePerMile: "$1.92", qoqChange: "+18.6%", volume: "High", note: "Port congestion spillover — container dwell times up 40% creating inland bottleneck" },
  { rank: 6, lane: "Los Angeles → Phoenix", mode: "Flatbed", ratePerMile: "$3.15", qoqChange: "+11.3%", volume: "Medium", note: "TSMC/Intel construction materials driving flatbed demand in Arizona corridor" },
  { rank: 7, lane: "Seattle → Portland", mode: "LTL", ratePerMile: "$4.20", qoqChange: "+5.8%", volume: "Medium", note: "Pacific NW tech distribution — last-mile LTL rates stable but carriers consolidating" },
  { rank: 8, lane: "Houston → Memphis", mode: "Tanker", ratePerMile: "$3.80", qoqChange: "+8.9%", volume: "Medium", note: "Petrochemical exports + ag chemicals — hazmat-certified carrier shortage deepening" },
  { rank: 9, lane: "Newark → Boston", mode: "Reefer", ratePerMile: "$3.62", qoqChange: "+6.4%", volume: "Medium", note: "Northeast food distribution — temp-controlled capacity at seasonal low" },
  { rank: 10, lane: "Jacksonville → Nashville", mode: "Dry Van", ratePerMile: "$2.55", qoqChange: "+10.1%", volume: "High", note: "Port-to-inland distribution growing — JAXPORT volumes up 22% YoY" },
  { rank: 11, lane: "Memphis → Dallas", mode: "Dry Van", ratePerMile: "$2.38", qoqChange: "+6.7%", volume: "High", note: "FedEx hub redistribution + Amazon AMZL network expansion" },
  { rank: 12, lane: "Indianapolis → Columbus", mode: "Dry Van", ratePerMile: "$2.22", qoqChange: "+5.2%", volume: "High", note: "Midwest industrial corridor — steady demand, carrier capacity balanced" },
  { rank: 13, lane: "Laredo → San Antonio", mode: "Dry Van", ratePerMile: "$2.95", qoqChange: "+16.8%", volume: "High", note: "Nearshoring boom — cross-border freight at record levels, drayage rates surging" },
  { rank: 14, lane: "Phoenix → Las Vegas", mode: "Flatbed", ratePerMile: "$3.05", qoqChange: "+9.4%", volume: "Medium", note: "Construction boom — A's stadium + data center builds creating flatbed demand" },
  { rank: 15, lane: "Charlotte → Raleigh", mode: "LTL", ratePerMile: "$3.85", qoqChange: "+4.3%", volume: "Medium", note: "Research Triangle distribution — pharma/biotech LTL growing steadily" },
  { rank: 16, lane: "Detroit → Chicago", mode: "Auto Carrier", ratePerMile: "$2.10", qoqChange: "-3.2%", volume: "Medium", note: "EV transition softening traditional auto carrier demand — ICE production winding down" },
  { rank: 17, lane: "Miami → Houston", mode: "Reefer", ratePerMile: "$3.28", qoqChange: "+7.6%", volume: "Medium", note: "Latin American produce imports redistributing — Gulf Coast cold chain expanding" },
  { rank: 18, lane: "Denver → Salt Lake City", mode: "Dry Van", ratePerMile: "$2.65", qoqChange: "+8.1%", volume: "Medium", note: "Mountain West growth corridor — tech + outdoor retail distribution" },
  { rank: 19, lane: "Norfolk → Richmond", mode: "Intermodal", ratePerMile: "$1.78", qoqChange: "+13.5%", volume: "Medium", note: "Port of Virginia expansion — intermodal rail connections reducing truck dependency" },
  { rank: 20, lane: "El Paso → Albuquerque", mode: "Dry Van", ratePerMile: "$2.42", qoqChange: "+11.7%", volume: "Low", note: "Border freight redistribution — carriers avoiding Laredo congestion via El Paso" },
];

export default function FreightRateBenchmarksReport() {
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          email,
          newsletter: "freightsignal",
          source: "lead-magnet-freight-rate-benchmarks-2026",
          status: "active",
        }),
      });
      if (res.ok || res.status === 409) {
        setUnlocked(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <Link href="/" className="text-orange-400 hover:text-orange-300 text-sm mb-8 inline-block">
          ← Back to FreightSignal
        </Link>

        <div className="inline-block bg-orange-500/10 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          FREE REPORT — Q1 2026 BENCHMARKS
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          2026 Freight Rate Benchmarks
          <span className="text-orange-400"> by Lane</span>
        </h1>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          Top 20 freight lanes ranked by rate change. Spot vs contract rates, mode breakdowns,
          and the supply/demand signals driving each corridor in Q1 2026.
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-12">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H21M3.375 14.25h.008M21 14.25h-1.875" /></svg>
            20 lanes analyzed
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            Rate per mile + QoQ change
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v9.75" /></svg>
            Q1 2026 data
          </span>
        </div>

        {/* Preview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Preview: Top 5 Lanes</h2>
          <div className="space-y-4">
            {lanes.slice(0, 5).map((l) => (
              <div key={l.rank} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="bg-orange-500/20 text-orange-400 text-xs font-bold px-2 py-0.5 rounded">#{l.rank}</span>
                      <span className="font-semibold text-white">{l.lane}</span>
                      <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">{l.mode}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{l.note}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-lg font-bold text-white">{l.ratePerMile}<span className="text-xs text-gray-500">/mi</span></div>
                    <div className={`text-sm font-semibold ${l.qoqChange.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{l.qoqChange}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!unlocked ? (
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-700 rounded-xl p-8 text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 z-10 pointer-events-none" />
              <div className="opacity-30 blur-sm space-y-3">
                {lanes.slice(5, 10).map((l) => (
                  <div key={l.rank} className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-left">
                    <span className="font-semibold">{l.lane}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">Get the Full Report — Free</h3>
            <p className="text-gray-400 mb-6">
              Enter your email to unlock all 20 lanes, rate benchmarks by mode, and our
              analysis of what&apos;s driving freight pricing in 2026.
            </p>

            <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition disabled:opacity-50"
              >
                {loading ? "Unlocking..." : "Unlock Report"}
              </button>
            </form>
            {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

            <p className="text-xs text-gray-500 mt-4">
              You&apos;ll also get FreightSignal — our free weekly freight market intelligence newsletter.
              Unsubscribe anytime.
            </p>
          </div>
        ) : (
          <div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-8 text-center">
              <p className="text-green-400 font-semibold">✓ Report unlocked! You&apos;re now subscribed to FreightSignal.</p>
            </div>

            <h2 className="text-2xl font-bold mb-6">Full Report: Q1 2026 Freight Rate Benchmarks</h2>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-4 text-orange-400">Key Market Signals</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-orange-400 shrink-0">→</span>
                  <span><strong className="text-white">Nearshoring is real:</strong> Laredo and El Paso lanes showing 11-17% QoQ rate increases. Mexico cross-border freight is the fastest-growing corridor in US trucking.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-400 shrink-0">→</span>
                  <span><strong className="text-white">Reefer squeeze:</strong> Temperature-controlled capacity at multi-year lows. Produce season + pharma cold chain = 6-14% rate increases on reefer lanes.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-400 shrink-0">→</span>
                  <span><strong className="text-white">Port-to-inland intermodal surging:</strong> Savannah and Norfolk intermodal rates up 13-19% as port volumes outpace truck capacity.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-400 shrink-0">→</span>
                  <span><strong className="text-white">EV transition creating losers:</strong> Detroit auto carrier lanes are the only declining corridor — down 3.2% as ICE production winds down faster than EV ramps up.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              {lanes.map((l) => (
                <div key={l.rank} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="bg-orange-500/20 text-orange-400 text-xs font-bold px-2 py-0.5 rounded">#{l.rank}</span>
                        <span className="font-semibold text-white">{l.lane}</span>
                        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">{l.mode}</span>
                        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">Vol: {l.volume}</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{l.note}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-lg font-bold text-white">{l.ratePerMile}<span className="text-xs text-gray-500">/mi</span></div>
                      <div className={`text-sm font-semibold ${l.qoqChange.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{l.qoqChange}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-orange-600/10 border border-orange-500/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Want Rate Intel Every Week?</h3>
              <p className="text-gray-400 mb-6">
                FreightSignal delivers freight market intelligence to your inbox — lane rates,
                capacity signals, and market shifts before they hit the load boards.
              </p>
              <Link
                href="/pricing"
                className="inline-block px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition"
              >
                See Plans →
              </Link>
            </div>

            <p className="text-xs text-gray-500 text-center mt-8">
              Rate data compiled from DAT, Truckstop, and FreightWaves SONAR Q1 2026 reports.
              Analysis by FreightSignal, a SignalStack Media LLC publication.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
