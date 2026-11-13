import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { locationsByState, states } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Locations | SEO & Marketing Across RI, CT & MA",
  description:
    "Ocean State Marketing location pages for Rhode Island, Connecticut, and Massachusetts cities—local SEO and digital marketing by market.",
  alternates: { canonical: "/locations" },
};

export default function LocationsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Local SEO pages for the towns you serve"
        description="Every city page is built to rank for local intent and to help customers understand how we work in their market."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {states.map((state) => (
          <div key={state.code} id={state.slug} className="mb-14 scroll-mt-28">
            <h2 className="font-display text-3xl text-ink">{state.name}</h2>
            <p className="mt-2 max-w-2xl text-muted">{state.blurb}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {locationsByState(state.code).map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="border border-line bg-panel p-4 transition hover:border-tide/40 hover:bg-sand"
                >
                  <p className="font-semibold text-ink">
                    {loc.name}, {loc.state}
                  </p>
                  <p className="mt-1 text-sm text-muted">{loc.region}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
