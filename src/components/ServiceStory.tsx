import type { ReactNode } from "react";
import { Button } from "./Button";
import { CtaBand } from "./CtaBand";
import { Reveal } from "./Reveal";
import type { Service } from "@/lib/services";

export function ServiceStory({
  service,
  visual,
  aside,
}: {
  service: Service;
  visual: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <>
      <section className="overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.18em] text-cyan-400 uppercase">{service.name}</p>
            <h1 className="mt-4 max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
              {service.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">{service.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">
                Book a strategy call
              </Button>
              <Button href="/pricing" variant="secondary">
                View pricing
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>{visual}</Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How we approach it</h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400">{service.approach}</p>
          <h3 className="mt-10 text-2xl font-bold text-white">What ships</h3>
          <ul className="mt-4 divide-y divide-white/10 border-y border-white/10">
            {service.bullets.map((item, index) => (
              <li key={item} className="flex gap-4 py-3.5 text-zinc-200">
                <span className="w-8 shrink-0 text-xs tracking-[0.14em] text-cyan-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 sm:p-7">
            <h3 className="text-2xl font-bold text-white">Outcomes</h3>
            <ul className="mt-5 space-y-4">
              {service.outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {aside}
          </div>
        </Reveal>
      </section>

      <CtaBand title={`Ready to talk ${service.name.toLowerCase()}?`} />
    </>
  );
}
