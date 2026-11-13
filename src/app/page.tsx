import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/Button";
import { CountUp } from "@/components/CountUp";
import { CtaBand } from "@/components/CtaBand";
import { Marquee } from "@/components/Marquee";
import { PricingCards } from "@/components/PricingCards";
import { Reveal } from "@/components/Reveal";
import { AdsDashboard } from "@/components/services/AdsDashboard";
import { BrandLockup } from "@/components/services/BrandLockup";
import { GrowthChart } from "@/components/services/GrowthChart";
import { MapPackLive } from "@/components/services/MapPackLive";
import { PortalPreview } from "@/components/services/PortalPreview";
import { SerpRank } from "@/components/services/SerpRank";
import { SiteBuilder } from "@/components/services/SiteBuilder";
import { processSteps } from "@/lib/services";
import { site } from "@/lib/site";

const homeServices: {
  n: string;
  title: string;
  body: string;
  href: string;
  points: string[];
  visual: ReactNode;
}[] = [
  {
    n: "01",
    title: "SEO",
    body: "Search programs built around how Rhode Island, Connecticut, and Massachusetts customers actually look for a business.",
    href: "/seo",
    points: ["Keyword map tied to calls", "Technical SEO", "Content that ranks", "Weekly reporting"],
    visual: <SerpRank />,
  },
  {
    n: "02",
    title: "Website Design",
    body: "Mobile-first sites with the offer, the service pages, and on-site SEO shipped in the first launch.",
    href: "/website-design",
    points: ["Conversion structure", "Service pages", "On-site SEO", "Analytics at launch"],
    visual: <SiteBuilder />,
  },
  {
    n: "03",
    title: "Custom Platforms",
    body: "Client portals, booking, and internal dashboards built around the workflow your team already runs.",
    href: "/platforms",
    points: ["Client portals", "Booking systems", "Ops dashboards", "CRM integrations"],
    visual: <PortalPreview />,
  },
  {
    n: "04",
    title: "Ad Campaign Management",
    body: "Paid search managed against cost per lead, split by the towns you can actually serve.",
    href: "/google-ads",
    points: ["Call tracking first", "Geo campaigns", "Landing pages", "Weekly optimization"],
    visual: <AdsDashboard />,
  },
  {
    n: "05",
    title: "Local SEO",
    body: "Google Business Profile, reviews, and city pages that put you in the map pack.",
    href: "/local-seo",
    points: ["Map pack", "Citations", "Reviews", "Service-area pages"],
    visual: <MapPackLive />,
  },
  {
    n: "06",
    title: "Branding",
    body: "A mark, type, and color system that holds up on the site, the ads, and the listing.",
    href: "/branding",
    points: ["Wordmark", "Type and color", "Ad lockups", "Applied on the site"],
    visual: <BrandLockup />,
  },
  {
    n: "07",
    title: "Growth Program",
    body: "SEO, the website, and paid search on one plan, measured by qualified leads.",
    href: "/growth",
    points: ["One funnel", "Lead tracking", "90-day plan", "Expand after it works"],
    visual: <GrowthChart />,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-white uppercase">
              <span className="pulse-dot" />
              #1 Rhode Island Agency
            </span>
            <span className="text-sm text-zinc-500">Providence, RI → Nationwide</span>
          </div>

          <Reveal>
            <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
              We Make Brands
              <span className="mt-2 block">Dominate Google</span>
            </h1>
            <div className="hero-lines max-w-xl" aria-hidden>
              <span />
              <span />
              <span />
              <span />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                {site.name} is a Providence, Rhode Island digital marketing agency providing SEO, custom website
                design, Google Ads management, and custom platforms to 150+ local and regional businesses across Rhode
                Island, Connecticut, Massachusetts, and New England. Across reviewed local-business engagements,
                clients average roughly 4× organic traffic growth within 90 days.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="primary">
                  Start Growing Today
                </Button>
                <Button href="/contact" variant="secondary">
                  Book Free Call
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 lg:border-t-0 lg:pt-0">
              <div>
                <p className="text-3xl font-bold text-white sm:text-4xl">
                  <CountUp value={150} suffix="+" />
                </p>
                <p className="mt-1 text-[10px] font-semibold tracking-[0.14em] text-zinc-500 uppercase">Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400 sm:text-4xl">
                  <CountUp value={400} suffix="%" />
                </p>
                <p className="mt-1 text-[10px] font-semibold tracking-[0.14em] text-zinc-500 uppercase">
                  Avg Lift (90-day)
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white sm:text-4xl">
                  <CountUp value={90} suffix="d" />
                </p>
                <p className="mt-1 text-[10px] font-semibold tracking-[0.14em] text-zinc-500 uppercase">
                  First-Page Commitment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">What we do</p>
        <h2 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Digital <span className="outline-text">Dominance</span>
        </h2>
        <div className="mt-16 space-y-16">
          {homeServices.map((service, index) => (
            <article
              key={service.title}
              className="grid items-center gap-8 border-t border-white/10 pt-16 lg:grid-cols-2 lg:gap-14"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-sm font-semibold tracking-[0.18em] text-cyan-400">{service.n}</p>
                <h3 className="mt-3 text-4xl font-bold tracking-tight text-white">{service.title}</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">{service.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="mt-7 inline-flex text-sm font-semibold text-white hover:text-cyan-400"
                >
                  View {service.title} →
                </Link>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>{service.visual}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Results That Speak Louder Than Promises
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
            We don&apos;t just talk about results—we commit to them. Our strategies have helped businesses across
            Southern New England generate more organic traffic, leads, and revenue.
          </p>
          <div className="mt-10 rounded-2xl border border-cyan-400/30 bg-black/60 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white">90-Day Ranking Commitment</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
              First-page rankings on qualifying local keywords within 90 days, or your next month is free. Available on
              the Dominate plan.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              ["400%", "Avg Revenue Influence"],
              ["150+", "Businesses Served"],
              ["90d", "Ranking Commitment"],
            ].map(([value, label]) => (
              <div key={label} className="border border-white/10 bg-black p-6">
                <p className="text-4xl font-bold text-cyan-400">{value}</p>
                <p className="mt-2 text-sm text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">How we work</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Our <span className="outline-text">Process</span>
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.step} className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-7">
              <p className="text-5xl font-bold text-white/10">{step.step}</p>
              <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">
                <div className="h-full bg-cyan-400" style={{ width: `${((index + 1) / processSteps.length) * 100}%` }} />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">Transparent Pricing</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">Choose Your Package</h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Same plans and prices as our full pricing page — no hidden fees, no long-term contracts.
          </p>

          <h3 className="mt-14 text-2xl font-bold text-white">Website Design Package</h3>
          <div className="mt-6">
            <PricingCards kind="websites" />
          </div>

          <h3 className="mt-16 text-2xl font-bold text-white">SEO Services</h3>
          <div className="mt-6">
            <PricingCards kind="seo" />
          </div>

          <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-white/10 bg-black p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Need a Custom Solution?</h3>
              <p className="mt-2 max-w-xl text-sm text-zinc-400">
                Custom platforms, portals, and multi-location systems are scoped after a build call—not forced into a
                flat package.
              </p>
            </div>
            <Button href="/contact" variant="cyan">
              Get Custom Quote
            </Button>
          </div>
          <div className="mt-6 text-center">
            <Link href="/pricing" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">
              View Full Pricing →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
