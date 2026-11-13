import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { SerpRank } from "@/components/services/SerpRank";
import { ServicePage } from "@/components/ServicePage";
import { getService, pricing } from "@/lib/services";

const service = getService("seo")!;

export const metadata: Metadata = {
  title: "SEO Services for Rhode Island, Connecticut & Massachusetts",
  description: service.description,
  alternates: { canonical: "/seo" },
};

export default function SeoPage() {
  return (
    <ServicePage
      service={service}
      visual={<SerpRank />}
      process={[
        {
          title: "Audit & keyword map",
          body: "We map competitors, search demand, and technical blockers across your service area—then prioritize the keywords that can produce calls.",
        },
        {
          title: "Build & optimize",
          body: "Technical fixes, on-page work, content, and internal linking ship weekly so rankings and page quality improve together.",
        },
        {
          title: "Report & expand",
          body: "You see rankings, traffic, and lead influence. We expand into new towns and clusters only after the core map is producing.",
        },
      ]}
      faqs={[
        {
          q: "How long until SEO produces leads?",
          a: "Local keywords can move in weeks. Competitive metro terms usually take a sustained program. We set expectations from the keyword map, not a generic timeline.",
        },
        {
          q: "Do you guarantee first-page rankings?",
          a: "On the Dominate plan we offer a 90-day ranking commitment on qualifying local keywords—or the next month is free. Details are confirmed in the proposal.",
        },
        {
          q: "Is content included?",
          a: "Yes. Growth and Dominate include ongoing content. Starter focuses on optimizing what you already have and establishing local foundations.",
        },
      ]}
      pricingNote={
        <div className="rounded-2xl border border-white/10 bg-black p-6 sm:flex sm:items-end sm:justify-between sm:p-8">
          <div>
            <h3 className="text-2xl font-bold text-white">SEO packages</h3>
            <ul className="mt-4 space-y-2">
              {pricing.seo.map((plan) => (
                <li key={plan.name} className="flex gap-4 text-sm text-zinc-300">
                  <span className="w-28 font-semibold text-white">{plan.name}</span>
                  <span className="text-cyan-400">
                    {plan.price}
                    {plan.cadence}
                  </span>
                  {plan.setup ? <span className="text-zinc-500">{plan.setup}</span> : null}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-0">
            <Button href="/contact" variant="cyan">
              Get an SEO plan
            </Button>
            <Link href="/pricing" className="inline-flex items-center text-sm text-zinc-400 hover:text-white">
              Full pricing →
            </Link>
          </div>
        </div>
      }
    />
  );
}
