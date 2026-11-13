import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="By using this website, you agree to these terms."
      />
      <section className="prose-ocean mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p>
          Content on {site.name} is for general informational purposes. Engagements for SEO, web design, or advertising are governed by a separate proposal or agreement.
        </p>
        <p>
          Ranking and advertising results vary by market competition, website history, and industry. We do not guarantee specific rankings except where expressly written in a signed agreement.
        </p>
      </section>
    </>
  );
}
