import Link from "next/link";
import { Button } from "./Button";
import { CtaBand } from "./CtaBand";
import { KeywordVisual } from "./keywords/KeywordVisual";
import { Reveal } from "./Reveal";
import { getKeywordPage, type KeywordPage } from "@/lib/keywords";
import { pricing } from "@/lib/services";

const stateLabel: Record<KeywordPage["state"], string> = {
  RI: "Rhode Island",
  CT: "Connecticut",
  MA: "Massachusetts",
  NE: "New England",
};

export function KeywordLanding({ page }: { page: KeywordPage }) {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">{page.primaryKeyword}</p>
            <h1 className="mt-4 max-w-xl text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">{page.lead}</p>
            <p className="mt-4 text-sm text-zinc-500">{page.market}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact" variant="primary" className="w-full sm:w-auto">
                Book a strategy call
              </Button>
              <Button href="/pricing" variant="secondary" className="w-full sm:w-auto">
                View pricing
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <KeywordVisual id={page.visual} />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Why {page.primaryKeyword} matters in {stateLabel[page.state]}
            </h2>
            <div className="mt-5 space-y-4">
              {page.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-zinc-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white">Outcomes you should expect</h3>
              <ul className="mt-5 space-y-4">
                {page.outcomes.map((item) => (
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
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">Focus areas</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What we execute for {page.primaryKeyword}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.focus.map((item, index) => (
            <Reveal key={item} delay={index * 50}>
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
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">How the engagement runs</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {page.process.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <article className="h-full rounded-2xl border border-white/10 bg-black p-6">
                  <p className="text-sm font-semibold text-cyan-400">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-black p-6 sm:flex sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="text-2xl font-bold text-white">SEO retainers that match the market</h3>
              <ul className="mt-4 space-y-2">
                {pricing.seo.map((plan) => (
                  <li key={plan.name} className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-300">
                    <span className="w-24 font-semibold text-white">{plan.name}</span>
                    <span className="text-cyan-400">
                      {plan.price}
                      {plan.cadence}
                    </span>
                    {plan.setup ? <span className="text-zinc-500">{plan.setup}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-0 sm:flex-col">
              <Button href="/contact" variant="cyan">
                Get a 90-day plan
              </Button>
              <Link href="/pricing" className="inline-flex items-center text-sm text-zinc-400 hover:text-white">
                Full pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-white">Frequently asked questions</h2>
            </Reveal>
            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {page.faqs.map((faq) => (
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
          </div>
          <aside className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6">
              <h3 className="text-xl font-bold text-white">Talk through {page.primaryKeyword}</h3>
              <p className="mt-3 text-sm text-zinc-400">
                Tell us your market. We&apos;ll outline the highest-leverage SEO and website moves for the next 90 days.
              </p>
              <Button href="/contact" variant="cyan" className="mt-6 w-full">
                Book free strategy call
              </Button>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <h3 className="text-xs font-semibold tracking-[0.14em] text-cyan-400 uppercase">Related pages</h3>
              <ul className="mt-4 space-y-2">
                {page.related.map((relatedSlug) => {
                  const related = getKeywordPage(relatedSlug);
                  if (!related) return null;
                  return (
                    <li key={relatedSlug}>
                      <Link href={`/${related.slug}`} className="text-sm text-zinc-300 hover:text-white">
                        {related.primaryKeyword}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link href="/seo" className="text-sm text-zinc-300 hover:text-white">
                    SEO services overview
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="text-sm text-zinc-300 hover:text-white">
                    All location pages
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand title={`Ready to win “${page.primaryKeyword}”?`} />
    </>
  );
}
