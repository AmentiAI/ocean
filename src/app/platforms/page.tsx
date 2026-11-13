import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PortalPreview } from "@/components/services/PortalPreview";
import { ServicePage } from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("platforms")!;

export const metadata: Metadata = {
  title: "Custom Platform Builds",
  description: service.description,
  alternates: { canonical: "/platforms" },
};

export default function PlatformsPage() {
  return (
    <ServicePage
      service={service}
      visual={<PortalPreview />}
      process={[
        {
          title: "Workflow discovery",
          body: "We map the one process that burns the most time—status emails, booking chaos, or spreadsheet ops—and design the product around it.",
        },
        {
          title: "Build the first version",
          body: "Accounts, the primary screen, permissions, and the integration to your CRM or payments. Ship something your team can run.",
        },
        {
          title: "Iterate with marketing",
          body: "The platform connects to the same SEO and ads that bring demand in, so the product and the pipeline reinforce each other.",
        },
      ]}
      faqs={[
        {
          q: "Is this a flat package?",
          a: "No. Platforms are quoted after a build call. Website and SEO stay on the published prices.",
        },
        {
          q: "What do you usually build first?",
          a: "Client portals, booking/membership systems, internal dashboards, and multi-location tools. We start with one workflow, not a decade roadmap.",
        },
        {
          q: "Can you integrate with what we already use?",
          a: "Yes—CRM, payments, calendars, and the systems your staff already trusts. The goal is fewer tools, not another login nobody opens.",
        },
      ]}
      pricingNote={
        <div className="rounded-2xl border border-cyan-400/30 bg-black p-6 sm:flex sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="text-2xl font-bold text-white">Custom quote</h3>
            <p className="mt-2 max-w-xl text-sm text-zinc-400">
              Scoped to the product. A typical first version covers logins, the main operational screen, and one critical integration.
            </p>
          </div>
          <Button href="/contact" variant="cyan" className="mt-6 sm:mt-0">
            Scope a build
          </Button>
        </div>
      }
    />
  );
}
