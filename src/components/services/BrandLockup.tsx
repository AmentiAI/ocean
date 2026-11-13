"use client";

import { useEffect, useState } from "react";

const stages = [
  {
    label: "Mark",
    title: "Ocean",
    sub: "State",
    note: "Primary wordmark · high contrast",
  },
  {
    label: "Type",
    title: "OSM",
    sub: "Sans display",
    note: "Tight tracking for web + ads",
  },
  {
    label: "Color",
    title: "Cyan",
    sub: "#22D3EE",
    note: "Signal color on black fields",
  },
  {
    label: "Apply",
    title: "Site",
    sub: "Hero lockup",
    note: "Ships with the website build",
  },
];

export function BrandLockup() {
  const [stage, setStage] = useState(0);
  const current = stages[stage]!;

  useEffect(() => {
    const timer = window.setInterval(() => setStage((n) => (n + 1) % stages.length), 1800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-white">Identity system</p>
          <p className="text-xs text-zinc-500">Mark · type · color · application</p>
        </div>
        <span className="text-[10px] font-semibold tracking-wide text-cyan-400 uppercase">{current.label}</span>
      </div>
      <div className="relative px-6 py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_45%)]" />
        <p
          key={current.title}
          className="relative text-6xl font-bold leading-[0.9] tracking-tight text-white sm:text-7xl"
          style={{ animation: "brand-rise 0.5s ease both" }}
        >
          {current.title}
          <span className="mt-1 block text-3xl text-white/35 sm:text-4xl">{current.sub}</span>
        </p>
        <div className="relative mt-8 h-px bg-white/10">
          <div
            className="absolute inset-y-0 left-0 bg-cyan-400 transition-all duration-700"
            style={{ width: `${((stage + 1) / stages.length) * 100}%` }}
          />
        </div>
        <p className="relative mt-4 text-sm text-zinc-400">{current.note}</p>
      </div>
      <div className="grid grid-cols-4 border-t border-white/10">
        {stages.map((item, i) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setStage(i)}
            className={`border-r border-white/10 px-2 py-3 text-center text-[10px] font-semibold tracking-wide uppercase last:border-r-0 ${
              i === stage ? "bg-cyan-400/10 text-cyan-400" : "text-zinc-600"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
