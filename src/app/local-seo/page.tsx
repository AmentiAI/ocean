import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { MapPackLive } from "@/components/services/MapPackLive";
import { ServicePage } from "@/components/ServicePage";
import { locationsByState, states } from "@/lib/locations";
import { getService } from "@/lib/services";

const service = getService("local-seo")!;

export const metadata: Metadata = {
  title: "Local SEO Services | Google Maps Rankings for New England",
  description: service.description,
  alternates: { canonical: "/local-seo" },
};

export default function LocalSeoPage() {
  return (
    <ServicePage
      service={service}
      visual={<MapPackLive />}
      process={[
        {
          title: "Profile & citation cleanup",
          body: "Google Business Profile categories, services, photos, and NAP consistency across directories get fixed first.",
        },
        {
          title: "Reviews & local pages",
          body: "Review systems and city/service-area pages reinforce the listing so Maps and organic search support each other.",
        },
        {
          title: "Monitor the pack",
          body: "We watch map rankings for the towns you serve and correct decay before competitors quietly take the slot.",
        },
      ]}
      faqs={[
        {
          q: "Is Local SEO different from regular SEO?",
          a: "Yes. Local SEO prioritizes Google Business Profile, reviews, citations, and geo pages for near-me and city-qualified searches.",
        },
        {
          q: "Which towns do you cover?",
          a: "Rhode Island, Connecticut, and Massachusetts. We publish city pages for the markets we actively serve.",
        },
        {
          q: "Can you help multi-location businesses?",
          a: "Yes. Each location needs clean NAP data, unique pages, and listings that don’t cannibalize each other.",
        },
      ]}
      pricingNote={
        <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white">City coverage</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {states.map((state) => (
              <li key={state.code} className="rounded-xl border border-white/10 px-4 py-3">
                <p className="font-semibold text-white">{state.name}</p>
                <p className="mt-1 text-sm text-zinc-500">{locationsByState(state.code).length} city pages</p>
                <Link href={`/locations#${state.slug}`} className="mt-2 inline-block text-sm text-cyan-400">
                  View cities →
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" variant="cyan" className="mt-6">
            Fix the map listing
          </Button>
        </div>
      }
    />
  );
}
