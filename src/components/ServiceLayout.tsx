import type { ReactNode } from "react";
import { Button } from "./Button";
import { CtaBand } from "./CtaBand";

export function ServiceLayout({
  eyebrow,
  title,
  description,
  points,
  cta,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  points: readonly string[];
  cta: { href: string; label: string };
  children?: ReactNode;
}) {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <p className="text-sm text-[#2eb6ff]">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-ink sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
          <div className="mt-8">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {points.map((point) => (
            <li key={point} className="py-4 text-base text-ink">
              {point}
            </li>
          ))}
        </ul>
        <div className="border border-white/10 bg-[#0c0d10] p-6">{children}</div>
      </section>
      <CtaBand />
    </>
  );
}
