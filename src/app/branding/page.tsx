import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { BrandLockup } from "@/components/services/BrandLockup";
import { ServicePage } from "@/components/ServicePage";
import { getService, pricing } from "@/lib/services";

const service = getService("branding")!;

export const metadata: Metadata = {
  title: "Branding for Rhode Island Businesses",
  description: service.description,
  alternates: { canonical: "/branding" },
};

export default function BrandingPage() {
  return (
    <ServicePage
      service={service}
      visual={<BrandLockup />}
      process={[
        {
          title: "Position & mark",
          body: "We define how the brand should read in search, ads, and the first viewport—then design a mark that survives those surfaces.",
        },
        {
          title: "System",
          body: "Type, color, and lockups for web, social, and paid creative so every channel looks like the same company.",
        },
        {
          title: "Apply on the site",
          body: "The identity ships with the website. Files are delivered in formats your team can actually use.",
        },
      ]}
      faqs={[
        {
          q: "Is a logo included with websites?",
          a: `Yes. Every website package includes a logo, starting at ${pricing.websites[0].price}. Larger identity systems are scoped separately when needed.`,
        },
        {
          q: "Do you only design logos?",
          a: "No. Branding covers wordmark, type, color, and application on the site and ads—not a slide deck that never gets used.",
        },
        {
          q: "Can you refresh an existing brand?",
          a: "Yes. Many engagements refine an existing mark so it works on mobile, Maps, and paid creative without a full rebrand.",
        },
      ]}
      pricingNote={
        <div className="rounded-2xl border border-white/10 bg-black p-6 sm:flex sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="text-2xl font-bold text-white">Included with website packages</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Logo starts with Business at {pricing.websites[0].price}. Full identity systems quoted with the build.
            </p>
          </div>
          <div className="mt-6 flex gap-3 sm:mt-0">
            <Button href="/contact" variant="cyan">
              Start with the mark
            </Button>
            <Link href="/website-design" className="inline-flex items-center text-sm text-zinc-400">
              Websites →
            </Link>
          </div>
        </div>
      }
    />
  );
}
