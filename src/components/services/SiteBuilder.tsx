"use client";

import { useEffect, useState } from "react";

const stages = [
  { label: "Structure", blocks: ["Hero", "Services", "Locations", "Contact"] },
  { label: "Content", blocks: ["Offer", "Proof", "Pricing", "CTA"] },
  { label: "SEO", blocks: ["Titles", "Schema", "Sitemap", "Speed"] },
];

export function SiteBuilder() {
  const [stage, setStage] = useState(0);
  const [built, setBuilt] = useState(0);
  const current = stages[stage]!;

  useEffect(() => {
    setBuilt(0);
    let n = 0;
    const tick = window.setInterval(() => {
      n += 1;
      setBuilt(n);
      if (n >= current.blocks.length) {
        window.clearInterval(tick);
        window.setTimeout(() => setStage((s) => (s + 1) % stages.length), 900);
      }
    }, 450);
    return () => window.clearInterval(tick);
  }, [stage, current.blocks.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-xs text-zinc-500">oceanstatemarketing.com — {current.label}</span>
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-2">
          {stages.map((item, i) => (
            <div
              key={item.label}
              className={`rounded-lg border px-3 py-2 text-sm transition ${
                i === stage ? "border-cyan-400/50 bg-cyan-400/10 text-white" : "border-white/10 text-zinc-500"
              }`}
            >
              {String(i + 1).padStart(2, "0")} · {item.label}
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-black p-4">
          <div className="mb-4 h-16 rounded-lg bg-gradient-to-r from-cyan-400/30 via-fuchsia-400/20 to-transparent" />
          <div className="space-y-2">
            {current.blocks.map((block, i) => (
              <div
                key={block}
                className={`flex items-center justify-between rounded-md border px-3 py-2 text-sm transition-all duration-500 ${
                  i < built
                    ? "border-cyan-400/40 bg-cyan-400/5 text-white translate-x-0 opacity-100"
                    : "border-white/5 text-zinc-700 translate-x-2 opacity-40"
                }`}
              >
                <span>{block}</span>
                {i < built ? <span className="text-cyan-400">✓</span> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
