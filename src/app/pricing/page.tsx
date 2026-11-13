import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PricingCards } from "@/components/PricingCards";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent website and SEO pricing from Ocean State Marketing. Same packages as published—no hidden fees.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparent Pricing"
        title="Choose Your Package"
        description="Same plans and prices across the site — no hidden fees, no long-term contracts. Custom platforms are quoted after a build call."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-white">Website Design Package</h2>
        <p className="mt-2 text-zinc-400">One-time marketing sites. On-site SEO included.</p>
        <div className="mt-8">
          <PricingCards kind="websites" />
        </div>
        <h2 className="mt-16 text-3xl font-bold text-white">SEO Services</h2>
        <p className="mt-2 text-zinc-400">Monthly retainers. Setup fees listed on Starter and Growth.</p>
        <div className="mt-8">
          <PricingCards kind="seo" />
        </div>
        <div className="mt-16 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Custom Platforms</h2>
            <p className="mt-2 max-w-xl text-zinc-400">
              Client portals, booking products, dashboards, and multi-location systems. Priced from a scoped build.
            </p>
          </div>
          <Button href="/contact" variant="cyan">
            Request a Quote
          </Button>
        </div>
      </section>
      <CtaBand title="Not sure which plan fits?" />
    </>
  );
}
