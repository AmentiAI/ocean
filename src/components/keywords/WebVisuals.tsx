"use client";

import { useEffect, useState } from "react";

export function ConvertWireframe() {
  const blocks = ["Hero offer", "Services", "Proof", "Pricing", "CTA"];
  const [built, setBuilt] = useState(0);

  useEffect(() => {
    let n = 0;
    const run = () => {
      n = 0;
      setBuilt(0);
      const t = window.setInterval(() => {
        n += 1;
        setBuilt(n);
        if (n >= blocks.length) window.clearInterval(t);
      }, 420);
      return t;
    };
    let t = run();
    const loop = window.setInterval(() => {
      window.clearInterval(t);
      t = run();
    }, 3600);
    return () => {
      window.clearInterval(t);
      window.clearInterval(loop);
    };
  }, [blocks.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-2 text-xs text-zinc-500">providence-site · convert</span>
      </div>
      <div className="space-y-2 p-4">
        <div className="h-14 rounded-lg bg-gradient-to-r from-cyan-400/25 via-fuchsia-400/15 to-transparent" />
        {blocks.map((block, i) => (
          <div
            key={block}
            className={`rounded-md border px-3 py-2 text-sm transition-all duration-500 ${
              i < built
                ? "border-cyan-400/40 bg-cyan-400/5 text-white translate-x-0 opacity-100"
                : "border-white/5 text-zinc-700 translate-x-2 opacity-40"
            }`}
          >
            {block}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobileFirstBuild() {
  const steps = ["Structure", "Mobile UI", "Speed", "SEO tags", "Launch"];
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setStep((n) => (n + 1) % steps.length), 1100);
    return () => window.clearInterval(t);
  }, [steps.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-5">
      <p className="text-sm font-semibold text-white">Warwick mobile build</p>
      <p className="mt-1 text-xs text-zinc-500">Fast · clear · call-ready</p>
      <div className="mx-auto mt-6 w-36 rounded-[1.5rem] border border-white/15 bg-black p-2">
        <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-white/20" />
        <div className="space-y-2 rounded-xl bg-[#111] p-3">
          <div className="h-8 rounded bg-cyan-400/20" />
          <div className="h-2 rounded bg-white/15" />
          <div className="h-2 w-2/3 rounded bg-white/10" />
          <div className="mt-3 rounded-md bg-cyan-400 py-2 text-center text-[10px] font-bold text-black">Call now</div>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {steps.map((s, i) => (
          <span
            key={s}
            className={`rounded-full border px-2.5 py-1 text-[10px] ${
              i === step ? "border-cyan-400 text-cyan-400" : "border-white/10 text-zinc-600"
            }`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ShipChecklist() {
  const checks = [
    "Redirect map",
    "Clean URLs",
    "Schema",
    "Sitemap",
    "Analytics",
    "Core Web Vitals",
  ];
  const [done, setDone] = useState(0);

  useEffect(() => {
    let n = 0;
    const run = () => {
      n = 0;
      setDone(0);
      const t = window.setInterval(() => {
        n += 1;
        setDone(n);
        if (n >= checks.length) window.clearInterval(t);
      }, 400);
      return t;
    };
    let t = run();
    const loop = window.setInterval(() => {
      window.clearInterval(t);
      t = run();
    }, 4000);
    return () => {
      window.clearInterval(t);
      window.clearInterval(loop);
    };
  }, [checks.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-sm font-semibold text-white">Pawtucket ship checklist</p>
        <p className="text-xs text-zinc-500">Development + SEO parity</p>
      </div>
      <ul className="grid grid-cols-2 gap-px bg-white/10">
        {checks.map((item, i) => (
          <li
            key={item}
            className={`bg-[#0a0a0a] px-3 py-4 text-sm transition ${
              i < done ? "text-white" : "text-zinc-600"
            }`}
          >
            <span className={`mr-2 ${i < done ? "text-cyan-400" : "text-zinc-700"}`}>{i < done ? "✓" : "○"}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
