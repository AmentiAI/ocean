import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { SiteBuilder } from "@/components/services/SiteBuilder";
import { ServicePage } from "@/components/ServicePage";
import { getService, pricing } from "@/lib/services";

const service = getService("website-design")!;

export const metadata: Metadata = {
  title: "Website Design for Rhode Island & New England Businesses",
  description: service.description,
  alternates: { canonical: "/website-design" },
};

export default function WebsiteDesignPage() {
  return (
    <ServicePage
      service={service}
      visual={<SiteBuilder />}
      process={[
        {
          title: "Offer & information architecture",
          body: "We define the pages, offers, and conversion path before design—so the site sells, not just looks finished.",
        },
        {
          title: "Design & build",
          body: "Custom responsive layouts, service and company pages, on-site SEO, schema, and analytics ship in one launch.",
        },
        {
          title: "Launch & iterate",
          body: "After go-live we watch conversion and search coverage, then tune CTAs, pages, and content based on real use.",
        },
      ]}
      faqs={[
        {
          q: "What’s included in the $500 site?",
          a: "Business includes a logo, five service pages, four company pages, and on-site SEO. Premium and Enterprise add more pages, dynamic content, and widgets.",
        },
        {
          q: "Do you rebuild WordPress sites?",
          a: "Yes. Many RI and CT businesses come from slow themes. We rebuild into a fast, maintainable site with SEO structure from day one.",
        },
        {
          q: "Is hosting included?",
          a: "Hosting and domain are scoped separately. The package covers design, build, and on-site SEO for the published page counts.",
        },
      ]}
      pricingNote={
        <div className="rounded-2xl border border-white/10 bg-black p-6 sm:flex sm:items-end sm:justify-between sm:p-8">
          <div>
            <h3 className="text-2xl font-bold text-white">Website packages</h3>
            <ul className="mt-4 space-y-2">
              {pricing.websites.map((plan) => (
                <li key={plan.name} className="flex gap-4 text-sm text-zinc-300">
                  <span className="w-40 font-semibold text-white">{plan.name}</span>
                  <span className="text-cyan-400">{plan.price}</span>
                  <span className="text-zinc-500">{plan.cadence}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-0">
            <Button href="/contact" variant="cyan">
              Start a website
            </Button>
            <Link href="/pricing" className="inline-flex items-center text-sm text-zinc-400 hover:text-white">
              Compare packages →
            </Link>
          </div>
        </div>
      }
    />
  );
}
