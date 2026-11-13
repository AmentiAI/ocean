import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: `Get a free quote from ${site.name} for SEO, web design, and Google Ads across Rhode Island, Connecticut, and Massachusetts.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a free quote"
        title="Tell us what you need. We’ll price the plan."
        description="Share your market and goals—SEO, website, ads, or a custom platform. We’ll follow up within one business day with next steps."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-bold text-white">Talk with us</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Prefer email or phone? Reach out directly—we’re a real team, not a ticket queue.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-white">Email</dt>
              <dd>
                <a className="text-cyan-400 hover:text-cyan-300" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Phone</dt>
              <dd>
                <a className="text-cyan-400 hover:text-cyan-300" href={site.phoneHref}>
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Region</dt>
              <dd className="text-zinc-400">{site.address.region}</dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
