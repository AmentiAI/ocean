import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { KeywordLanding } from "@/components/KeywordLanding";
import { getKeywordPage, keywordPages } from "@/lib/keywords";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

const RESERVED = new Set([
  "about",
  "gallery",
  "contact",
  "pricing",
  "blog",
  "seo",
  "website-design",
  "platforms",
  "google-ads",
  "local-seo",
  "branding",
  "growth",
  "locations",
  "privacy",
  "terms",
  "api",
  "favicon.ico",
  "robots.txt",
  "sitemap.xml",
]);

export function generateStaticParams() {
  return keywordPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (RESERVED.has(slug)) return {};
  const page = getKeywordPage(slug);
  if (!page) return {};
  return {
    title: { absolute: page.title },
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
    },
  };
}

export default async function KeywordLandingPage({ params }: Props) {
  const { slug } = await params;
  if (RESERVED.has(slug)) notFound();
  const page = getKeywordPage(slug);
  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.h1,
    description: page.metaDescription,
    url: `${site.url}/${page.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
    about: page.primaryKeyword,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <KeywordLanding page={page} />
    </>
  );
}
