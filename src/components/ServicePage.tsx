import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { CtaBand } from "./CtaBand";
import { Reveal } from "./Reveal";
import type { Service } from "@/lib/services";

type ProcessStep = { title: string; body: string };
type Faq = { q: string; a: string };

export function ServicePage({
  service,
  visual,
  process,
  faqs,
  pricingNote,
}: {
  service: Service;
  visual: ReactNode;
  process: ProcessStep[];
  faqs: Faq[];
  pricingNote?: ReactNode;
}) {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">{service.name}</p>
            <h1 className="mt-4 max-w-xl text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">{service.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact" variant="primary" className="w-full sm:w-auto">
                Book a strategy call
              </Button>
              <Button href="/pricing" variant="secondary" className="w-full sm:w-auto">
                View pricing
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>{visual}</Reveal>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white">The problem we solve</h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">{service.description}</p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">{service.approach}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white">Outcomes you should expect</h3>
              <ul className="mt-5 space-y-4">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">Deliverables</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">What ships in the engagement</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.bullets.map((item, index) => (
            <Reveal key={item} delay={index * 60}>
              <article className="h-full rounded-2xl border border-white/10 bg-[#0a0a0a] p-5">
                <p className="text-xs font-semibold text-cyan-400">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">Process</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">How an engagement runs</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {process.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <article className="h-full rounded-2xl border border-white/10 bg-black p-6">
                  <p className="text-sm font-semibold text-cyan-400">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          {pricingNote ? <div className="mt-10">{pricingNote}</div> : null}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white">Frequently asked questions</h2>
        </Reveal>
        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="cursor-pointer list-none text-lg font-semibold text-white marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-cyan-400 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">{faq.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-sm text-zinc-500">
          Prefer a direct answer?{" "}
          <Link href="/contact" className="text-cyan-400 hover:text-cyan-300">
            Book a strategy call
          </Link>
          .
        </p>
      </section>

      <CtaBand title={`Ready to start ${service.name}?`} />
    </>
  );
}
