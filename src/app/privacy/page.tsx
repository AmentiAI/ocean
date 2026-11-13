import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Ocean State Marketing handles information submitted through this website."
      />
      <section className="prose-ocean mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p>
          When you submit a form on this site, we collect the information you provide—such as name, email, phone, and message content—to respond to your inquiry and deliver services.
        </p>
        <p>
          We do not sell personal information. We may use trusted processors for hosting, analytics, and email. Contact us at {site.email} with privacy questions.
        </p>
      </section>
    </>
  );
}
