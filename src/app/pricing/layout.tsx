import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — FreightSignal",
  description: "FreightSignal pricing: Free weekly freight digest, $29/mo Pro with daily rate alerts and lane data, $99/mo Enterprise for teams and API access.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
