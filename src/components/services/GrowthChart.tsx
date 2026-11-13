"use client";

import { useEffect, useState } from "react";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const baseline = [12, 14, 18, 22, 31, 44];

export function GrowthChart() {
  const [built, setBuilt] = useState(0);
  const [leads, setLeads] = useState(baseline[0]!);

  useEffect(() => {
    let i = 0;
    let tick: number | undefined;

    const run = () => {
      if (tick) window.clearInterval(tick);
      i = 0;
      setBuilt(0);
      setLeads(baseline[0]!);
      tick = window.setInterval(() => {
        i += 1;
        setBuilt(i);
        setLeads(baseline[Math.min(i - 1, baseline.length - 1)]!);
        if (i >= baseline.length && tick) window.clearInterval(tick);
      }, 420);
    };

    run();
    const loop = window.setInterval(run, 5200);
    return () => {
      if (tick) window.clearInterval(tick);
      window.clearInterval(loop);
    };
  }, []);

  const max = Math.max(...baseline);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-white">Qualified leads</p>
          <p className="text-xs text-zinc-500">SEO + site + ads · 6 months</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-cyan-400 tabular-nums">{leads}</p>
          <p className="text-[10px] tracking-wide text-zinc-500 uppercase">This month</p>
        </div>
      </div>
      <div className="grid h-48 grid-cols-6 items-end gap-2 px-5 py-6">
        {baseline.map((value, i) => (
          <div key={months[i]} className="flex h-full flex-col items-center justify-end gap-2">
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-cyan-400/80 to-fuchsia-400/70 transition-all duration-500"
              style={{
                height: i < built ? `${(value / max) * 100}%` : "4%",
                opacity: i < built ? 1 : 0.25,
              }}
            />
            <span className={`text-[10px] ${i < built ? "text-zinc-400" : "text-zinc-700"}`}>{months[i]}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-px border-t border-white/10 bg-white/10">
        {[
          ["SEO", "Foundation"],
          ["Website", "Convert"],
          ["Ads", "Scale"],
        ].map(([k, v], i) => (
          <div key={k} className={`bg-[#0a0a0a] px-3 py-3 ${i <= Math.floor((built - 1) / 2) ? "" : "opacity-50"}`}>
            <p className="text-[10px] tracking-wide text-cyan-400 uppercase">{k}</p>
            <p className="mt-1 text-xs text-zinc-400">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
