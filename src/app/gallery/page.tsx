import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A gallery of websites and platforms built by Ocean State Marketing — ecommerce, local brands, marketplaces, and custom products.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Sites and products we’ve shipped."
        description="Ecommerce, local service brands, marketplaces, and custom platforms. Click any piece to see the full screen."
      />
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16">
        <GalleryGrid />
      </section>
      <CtaBand title="Want a site in this gallery?" />
    </>
  );
}
