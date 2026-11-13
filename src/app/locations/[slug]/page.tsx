import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { getLocation, locations } from "@/lib/locations";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  const title = `${loc.name} ${loc.state} SEO & Digital Marketing`;
  const description = `${loc.headline}. Ocean State Marketing provides SEO, website design, and Google Ads for businesses in ${loc.name}, ${loc.stateName}.`;
  return {
    title,
    description,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: { title, description },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${loc.name} SEO & Digital Marketing`,
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
    },
    areaServed: {
      "@type": "City",
      name: loc.name,
      containedInPlace: {
        "@type": "State",
        name: loc.stateName,
      },
    },
    description: loc.intro,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow={`${loc.name}, ${loc.state} · ${loc.region}`}
        title={loc.headline}
        description={loc.intro}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="prose-ocean">
            <h2>
              SEO & marketing services in {loc.name}, {loc.state}
            </h2>
            <p>
              Ocean State Marketing helps {loc.name} businesses earn visibility on Google through local SEO, conversion-focused websites, and disciplined paid search. We tailor keyword targets to {loc.region} demand—not generic statewide lists.
            </p>
            <h2>Industries we often support here</h2>
            <ul>
              {loc.industries.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
            <h2>What working together looks like</h2>
            <p>
              We start with a discovery call covering your service area, competitors, and lead goals. Then we deliver a prioritized plan—technical fixes, page builds, GBP work, and optional ads—so you know what ships in the first 30–90 days.
            </p>
          </div>
          <aside className="space-y-5">
            <div className="rounded-xl border border-line bg-panel p-6">
              <h3 className="font-display text-2xl text-ink">Serve {loc.name}?</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Get a free strategy call focused on {loc.name} search demand and competitor gaps.
              </p>
              <Button href="/contact" className="mt-6 w-full">
                Book Free Call
              </Button>
            </div>
            <div className="rounded-none border border-line bg-sand p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-tide">Nearby markets</h3>
              <ul className="mt-4 space-y-2">
                {loc.nearby.map((nearSlug) => {
                  const near = getLocation(nearSlug);
                  if (!near) return null;
                  return (
                    <li key={nearSlug}>
                      <Link href={`/locations/${near.slug}`} className="text-sm font-medium text-ink hover:text-tide">
                        {near.name}, {near.state}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link href="/locations" className="mt-4 inline-flex text-sm font-semibold text-tide">
                All locations →
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand
        title={`Ready to grow in ${loc.name}?`}
        description={`We'll map the keywords and pages that matter for ${loc.name}, ${loc.stateName}—then ship the work.`}
      />
    </>
  );
}
