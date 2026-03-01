"use client";

import Link from "next/link";
import { useState } from "react";

const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-orange mt-0.5 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const plans = [
  {
    name: "Free",
    price: "$0",
    interval: "forever",
    features: [
      "Weekly digest every Wednesday",
      "Rate Alert of the Week",
      "Top rate movements summary",
      "Supply chain updates",
    ],
    cta: "Subscribe Free",
    href: "/#subscribe",
    popular: false,
    priceId: null,
  },
  {
    name: "Pro",
    price: "$29",
    interval: "per month",
    features: [
      "Everything in Free",
      "Daily rate alerts",
      "Full rate database access",
      "Lane & mode filters",
      "Excel/CSV data export",
    ],
    cta: "Start Pro Trial",
    href: null,
    popular: true,
    priceId: "price_1T5xsPPs7Nw0EhG05BQaXRi2",
  },
  {
    name: "Enterprise",
    price: "$99",
    interval: "per month",
    features: [
      "Everything in Pro",
      "Up to 10 team seats",
      "API access",
      "Custom lane alerts",
      "Priority support",
    ],
    cta: "Start Enterprise",
    href: null,
    popular: false,
    priceId: "price_1T5xsQPs7Nw0EhG0wK8KIDwa",
  },
];

function PricingCard({ plan }: { plan: (typeof plans)[number] }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!plan.priceId) return;
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: plan.priceId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isPrimary = plan.popular;

  return (
    <div className={`card-hover bg-gradient-to-b from-darkblue-500/80 to-darkblue-500/40 rounded-xl p-8 relative ${plan.popular ? "border-2 border-orange" : "border border-darkblue-50/30"}`}>
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-darkblue text-xs font-bold px-3 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}
      <div className={`label-uppercase mb-2 ${plan.popular ? "text-orange" : "text-muted"}`}>{plan.name}</div>
      <div className="text-4xl font-bold mb-1">{plan.price}</div>
      <div className="text-muted-dim text-sm mb-6">{plan.interval}</div>
      <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2"><IconCheck /> {f}</li>
        ))}
      </ul>
      {plan.href ? (
        <Link href={plan.href} className={`block w-full text-center px-6 py-3 rounded font-semibold text-sm transition-all duration-200 ${isPrimary ? "bg-orange text-darkblue hover:bg-orange-300 hover:shadow-lg hover:shadow-orange/20" : "border border-orange text-orange hover:bg-orange hover:text-darkblue"}`}>
          {plan.cta}
        </Link>
      ) : (
        <button
          onClick={handleCheckout}
          disabled={loading}
          className={`block w-full text-center px-6 py-3 rounded font-semibold text-sm transition-all duration-200 disabled:opacity-50 ${isPrimary ? "bg-orange text-darkblue hover:bg-orange-300 hover:shadow-lg hover:shadow-orange/20" : "border border-orange text-orange hover:bg-orange hover:text-darkblue"}`}
        >
          {loading ? "Redirecting..." : plan.cta}
        </button>
      )}
    </div>
  );
}

export default function PricingPage() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Simple, transparent pricing
        </h1>
        <p className="text-muted mb-12 max-w-2xl mx-auto text-lg">
          Start free with our weekly digest. Upgrade to Pro or Enterprise for daily alerts,
          full rate data, and team features.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
        <p className="text-muted-dim text-sm mt-8">
          All paid plans include a 14-day free trial. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
