import { Button } from "./Button";
import { pricing } from "@/lib/services";

export function PricingCards({ kind }: { kind: "websites" | "seo" }) {
  const plans = pricing[kind];
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {plans.map((plan) => (
        <article
          key={plan.name}
          className={`service-card relative flex flex-col rounded-2xl border bg-[#0a0a0a] p-6 sm:p-8 ${
            plan.popular ? "border-cyan-400/70 shadow-[0_0_40px_rgba(34,211,238,0.12)]" : "border-white/10"
          }`}
        >
          {plan.popular ? (
            <span className="absolute -top-3 right-6 rounded-full bg-cyan-400 px-3 py-1 text-[10px] font-bold tracking-wide text-black uppercase">
              Most Popular
            </span>
          ) : null}
          <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
          {plan.description ? <p className="mt-2 text-sm text-zinc-400">{plan.description}</p> : null}
          <p className="mt-6">
            <span className="text-5xl font-bold text-white">{plan.price}</span>
            <span className="ml-2 text-sm text-zinc-400">{plan.cadence}</span>
          </p>
          {"setup" in plan && plan.setup ? <p className="mt-2 text-sm text-cyan-400">{plan.setup}</p> : null}
          <p className="mt-8 text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">Everything Included</p>
          <ul className="mt-4 flex-1 space-y-3 text-sm text-zinc-300">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="text-cyan-400">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/contact" variant={plan.popular ? "cyan" : "secondary"} className="w-full">
              {plan.name === "Growth" ? "Get More Leads" : "Get Started"}
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}
