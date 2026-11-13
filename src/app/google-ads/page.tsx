import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { AdsDashboard } from "@/components/services/AdsDashboard";
import { ServicePage } from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("google-ads")!;

export const metadata: Metadata = {
  title: "Google Ads Management for RI, CT & MA",
  description: service.description,
  alternates: { canonical: "/google-ads" },
};

export default function GoogleAdsPage() {
  return (
    <ServicePage
      service={service}
      visual={<AdsDashboard />}
      process={[
        {
          title: "Tracking first",
          body: "Calls, forms, and conversions are verified before budget scales. If we can’t measure leads cleanly, we don’t buy traffic.",
        },
        {
          title: "Campaign architecture",
          body: "Search, call, and remarketing campaigns are split by geography and intent—Warwick is not Fairfield County.",
        },
        {
          title: "Weekly optimization",
          body: "Negatives, bids, creative, and landing-page alignment run against a cost-per-lead target, not vanity impressions.",
        },
      ]}
      faqs={[
        {
          q: "What’s a typical budget?",
          a: "Budgets are set from your market and margins. We recommend a floor that can produce statistically useful lead volume before we optimize.",
        },
        {
          q: "Do you manage Meta ads too?",
          a: "Primary focus is Google Ads for high-intent search. Remarketing and complementary channels are added when they improve CPL.",
        },
        {
          q: "Should ads run with SEO?",
          a: "Usually yes. Ads validate offers quickly while organic compounds. We keep both tied to the same landing pages and lead definition.",
        },
      ]}
      pricingNote={
        <div className="rounded-2xl border border-white/10 bg-black p-6 sm:flex sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="text-2xl font-bold text-white">Management scoped to spend</h3>
            <p className="mt-2 max-w-xl text-sm text-zinc-400">
              Ad management is quoted from your monthly media budget and tracking complexity. Media spend is separate.
            </p>
          </div>
          <Button href="/contact" variant="cyan" className="mt-6 sm:mt-0">
            Audit my ads
          </Button>
        </div>
      }
    />
  );
}
