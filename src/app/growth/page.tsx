import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { GrowthChart } from "@/components/services/GrowthChart";
import { ServicePage } from "@/components/ServicePage";
import { getService, pricing } from "@/lib/services";

const service = getService("growth")!;

export const metadata: Metadata = {
  title: "Growth Program | SEO, Websites & Ads",
  description: service.description,
  alternates: { canonical: "/growth" },
};

export default function GrowthPage() {
  return (
    <ServicePage
      service={service}
      visual={<GrowthChart />}
      process={[
        {
          title: "Find the leak",
          body: "We diagnose whether leads die at the listing, the page, the offer, or the follow-up—then pick the channel that fixes it first.",
        },
        {
          title: "Ship the fix",
          body: "SEO, website updates, and paid search run on one plan with shared tracking and a written 90-day roadmap.",
        },
        {
          title: "Add a town",
          body: "We expand into new markets only after the first geography is producing predictable lead volume.",
        },
      ]}
      faqs={[
        {
          q: "How is Growth different from buying SEO alone?",
          a: "Growth keeps SEO, the website, and ads on one funnel definition. You are not managing three vendors optimizing different goals.",
        },
        {
          q: "What does it cost?",
          a: "Most growth engagements sit on SEO retainers from $500–$2,500/month, with website and ads layered when they improve cost per lead.",
        },
        {
          q: "Who is this for?",
          a: "Companies with revenue that need a coordinated system—not a single blog post or a splashy redesign with no distribution.",
        },
      ]}
      pricingNote={
        <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white">Typical SEO retainers</h3>
          <ul className="mt-4 space-y-2">
            {pricing.seo.map((plan) => (
              <li key={plan.name} className="flex gap-4 text-sm text-zinc-300">
                <span className="w-28 font-semibold text-white">{plan.name}</span>
                <span className="text-cyan-400">
                  {plan.price}
                  {plan.cadence}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact" variant="cyan">
              Plan the first 90 days
            </Button>
            <Link href="/pricing" className="inline-flex items-center text-sm text-zinc-400">
              Full pricing →
            </Link>
          </div>
        </div>
      }
    />
  );
}
