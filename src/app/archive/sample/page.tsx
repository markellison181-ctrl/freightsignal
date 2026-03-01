import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Issue #1 — FreightSignal Weekly | Feb 24-28, 2026",
  description:
    "Truckload spot rates surge 12% YoY, diesel climbs past $4, carrier rejection rates hit 8-month high — FreightSignal Issue #1.",
  openGraph: {
    title: "FreightSignal Issue #1 — Spot Rates Surge 12%; Diesel Past $4; Rejections Spike",
    description:
      "Weekly freight market intelligence: spot and contract rates, capacity trends, diesel prices, and supply chain developments for shippers and brokers.",
    type: "article",
    publishedTime: "2026-02-28T12:00:00Z",
  },
};

export default function SampleIssuePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-orange rounded-sm flex items-center justify-center">
            <span className="text-darkblue font-bold text-sm">FS</span>
          </div>
          <div>
            <div className="text-white font-semibold">FreightSignal Weekly</div>
            <div className="text-gray-300 text-sm">Issue #1 — February 28, 2026</div>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
          Truckload Spot Rates Surge 12% YoY — Diesel Climbs Past $4; Carrier Rejections Hit 8-Month High
        </h1>
        <p className="text-gray-300 leading-relaxed">
          Welcome to the first edition of FreightSignal. Each week, we analyze freight rate data,
          capacity indicators, and supply chain developments to deliver actionable intelligence
          for shippers, brokers, and logistics professionals. This week: a tightening truckload market,
          rising fuel costs, and regulatory shifts that could reshape carrier capacity in Q2.
        </p>
      </div>

      {/* Top Signal */}
      <section className="mb-12">
        <div className="bg-orange/5 border border-orange/20 rounded-lg p-8">
          <div className="text-orange text-xs font-bold uppercase tracking-widest mb-3">
            🚛 Top Signal
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Truckload Spot Rates Surge 12% Year-over-Year — Tightest Market Since Mid-2024
          </h2>
          <div className="text-gray-200 leading-relaxed space-y-4">
            <p>
              National dry van spot rates averaged <strong className="text-white">$2.18 per mile</strong> this
              week, up 12.3% from the same period last year and 4.1% above the January average. The
              increase marks the fifth consecutive week of gains and pushes spot rates to their highest
              level since June 2024.
            </p>
            <p>
              The rally is being driven by a combination of factors: seasonal produce demand ramping
              early in the Southeast, continued carrier attrition (net revocations outpaced new
              authority grants by 2,100 in February), and a diesel price spike that&apos;s compressing
              margins for owner-operators. The Outbound Tender Rejection Index (OTRI) climbed to{" "}
              <strong className="text-white">7.2%</strong>, its highest reading since June 2025.
            </p>
            <p>
              <strong className="text-orange">Why it matters:</strong> After nearly two years of
              oversupply, the truckload market is showing real signs of rebalancing. Shippers who
              locked in favorable contract rates in late 2025 are well-positioned, but those relying
              heavily on spot capacity should expect higher costs through Q2. Brokers are seeing
              margins compress as carrier rate expectations rise faster than customer pricing.
            </p>
            <p>
              <strong className="text-orange">What to watch:</strong> March produce season in Florida
              and South Texas will be the next test. If rejection rates push above 8%, expect contract
              rate negotiations to shift firmly in carriers&apos; favor for the first time since 2022.
            </p>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="mb-12">
        <div className="text-orange text-xs font-bold uppercase tracking-widest mb-4">
          📰 This Week in Freight
        </div>

        <div className="space-y-4">
          <div className="bg-darkblue-500/30 border border-darkblue-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              Diesel Prices Climb Past $4.00 Nationally for First Time Since October
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The national average diesel price hit <strong className="text-white">$4.07/gallon</strong> this
              week, according to EIA data — up $0.23 from a month ago and $0.41 above the year-ago
              level. Refinery maintenance season and tighter global crude supplies are the primary
              drivers. The fuel surcharge impact is significant: at current rates, fuel adds roughly
              $0.58/mile to a 6 MPG truck, up from $0.51 in January. Owner-operators running older
              equipment are particularly squeezed, which is accelerating capacity exit and contributing
              to the spot rate rally above.
            </p>
          </div>

          <div className="bg-darkblue-500/30 border border-darkblue-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              FMCSA Proposes Stricter Speed Limiter Rule — 68 MPH Cap for Heavy Trucks
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The Federal Motor Carrier Safety Administration published a Notice of Proposed Rulemaking
              that would require electronic speed limiters set at <strong className="text-white">68 MPH</strong> on
              all commercial vehicles over 26,000 lbs. The rule, if finalized, would take effect in
              late 2027. Industry groups are divided: safety advocates and large fleets (many of which
              already govern at 65 MPH) support the measure, while owner-operators argue it will reduce
              productivity by 3-5% on long-haul lanes. The comment period runs through May 15.
              Shippers should factor potential transit time impacts into 2027 routing guides.
            </p>
          </div>

          <div className="bg-darkblue-500/30 border border-darkblue-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              LTL Carriers Post Strong Q4 Earnings — Pricing Power Holds Despite Volume Softness
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Major LTL carriers reported Q4 2025 results this week, and the theme was consistent:
              revenue per hundredweight continues to climb even as tonnage remains flat. Old Dominion
              posted a <strong className="text-white">93.2 operating ratio</strong> — best-in-class —
              while Saia expanded terminals for the 8th consecutive quarter. XPO reported yield
              improvement of 6.8% excluding fuel. The LTL sector&apos;s disciplined pricing following
              Yellow&apos;s 2023 closure continues to benefit incumbents. For shippers, LTL rate
              increases of 5-8% in 2026 contracts appear locked in.
            </p>
          </div>

          <div className="bg-darkblue-500/30 border border-darkblue-50/15 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">
              Intermodal Volume Up 4.2% — Rail Service Metrics Improving
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Intermodal container volume rose <strong className="text-white">4.2% year-over-year</strong> in
              the week ending February 22, per AAR data. Class I railroads have invested heavily in
              service reliability, and it&apos;s showing: average intermodal transit times on the
              LA–Chicago corridor improved to 4.8 days, down from 5.3 days a year ago. The truckload
              spot rate rally is making intermodal increasingly competitive on lanes over 750 miles,
              where the cost spread has widened to roughly $0.35/mile in intermodal&apos;s favor.
              Shippers should revisit mode conversion opportunities as rail service reaches
              multi-year highs.
            </p>
          </div>
        </div>
      </section>

      {/* Market Data Snapshot */}
      <section className="mb-12">
        <div className="text-orange text-xs font-bold uppercase tracking-widest mb-4">
          📊 Market Data Snapshot
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-darkblue-500/30 border border-darkblue-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange mb-1">$2.18</div>
            <div className="text-white font-semibold text-sm mb-2">Dry Van Spot Rate</div>
            <p className="text-gray-300 text-xs">
              National average per mile, up 12.3% YoY and 4.1% MoM.
              Fifth consecutive week of gains.
            </p>
          </div>

          <div className="bg-darkblue-500/30 border border-darkblue-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange mb-1">$4.07</div>
            <div className="text-white font-semibold text-sm mb-2">Diesel Price / Gallon</div>
            <p className="text-gray-300 text-xs">
              National average, up $0.41 YoY. Highest level since
              October 2025. Refinery maintenance driving the spike.
            </p>
          </div>

          <div className="bg-darkblue-500/30 border border-darkblue-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange mb-1">7.2%</div>
            <div className="text-white font-semibold text-sm mb-2">Tender Rejection Rate</div>
            <p className="text-gray-300 text-xs">
              Outbound Tender Rejection Index at 8-month high.
              Carriers increasingly selective on loads as rates improve.
            </p>
          </div>

          <div className="bg-darkblue-500/30 border border-darkblue-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange mb-1">$2.84</div>
            <div className="text-white font-semibold text-sm mb-2">Reefer Spot Rate</div>
            <p className="text-gray-300 text-xs">
              National average per mile, up 9.7% YoY. Early produce
              season in FL and South TX driving seasonal demand.
            </p>
          </div>

          <div className="bg-darkblue-500/30 border border-darkblue-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange mb-1">$1.92</div>
            <div className="text-white font-semibold text-sm mb-2">Flatbed Spot Rate</div>
            <p className="text-gray-300 text-xs">
              Per mile average, relatively stable at +3.2% YoY.
              Construction and infrastructure spending provide steady floor.
            </p>
          </div>

          <div className="bg-darkblue-500/30 border border-darkblue-50/15 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange mb-1">-2,100</div>
            <div className="text-white font-semibold text-sm mb-2">Net Carrier Authority</div>
            <p className="text-gray-300 text-xs">
              Net revocations exceeded new grants in February.
              Capacity attrition continues to tighten the market.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-darkblue-50/20 pt-12">
        <div className="bg-orange/5 border border-orange/20 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Get this every Monday</h3>
          <p className="text-gray-300 text-sm mb-6">
            FreightSignal delivers weekly freight market intelligence — rates, capacity,
            regulations, and supply chain analysis — straight to your inbox. Free to subscribe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#subscribe"
              className="bg-orange text-darkblue px-8 py-3 rounded font-semibold text-sm hover:bg-orange-300 transition-colors"
            >
              Subscribe Free
            </Link>
            <Link
              href="/pricing"
              className="border border-orange text-orange px-8 py-3 rounded font-semibold text-sm hover:bg-orange hover:text-darkblue transition-colors"
            >
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
