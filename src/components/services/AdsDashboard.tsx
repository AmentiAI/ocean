"use client";

import { useEffect, useState } from "react";

const campaigns = [
  { name: "Providence · Search", cpl: 38, spend: 1240, leads: 32 },
  { name: "Warwick · Calls", cpl: 29, spend: 870, leads: 30 },
  { name: "Hartford · Remarketing", cpl: 22, spend: 640, leads: 29 },
];

export function AdsDashboard() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setTick((n) => n + 1), 1800);
    return () => window.clearInterval(timer);
  }, []);

  const live = campaigns.map((c, i) => ({
    ...c,
    leads: c.leads + ((tick + i) % 3),
    cpl: Math.max(18, c.cpl - ((tick + i) % 4)),
  }));
  const totalLeads = live.reduce((sum, c) => sum + c.leads, 0);
  const avgCpl = Math.round(live.reduce((sum, c) => sum + c.cpl, 0) / live.length);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <p className="text-sm font-semibold text-white">Paid search · cost per lead</p>
        <span className="text-[10px] font-semibold tracking-wide text-cyan-400 uppercase">Optimizing</span>
      </div>
      <div className="grid grid-cols-2 gap-3 p-4">
        <div className="rounded-xl border border-white/10 bg-black p-4">
          <p className="text-xs text-zinc-500">Leads (30d)</p>
          <p className="mt-1 text-3xl font-bold text-white tabular-nums">{totalLeads}</p>
        </div>
        <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/5 p-4">
          <p className="text-xs text-zinc-500">Avg CPL</p>
          <p className="mt-1 text-3xl font-bold text-cyan-400 tabular-nums">${avgCpl}</p>
        </div>
      </div>
      <ul className="divide-y divide-white/10 border-t border-white/10">
        {live.map((c, i) => (
          <li key={c.name} className="px-4 py-3">
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="text-zinc-300">{c.name}</span>
              <span className="font-semibold text-white">${c.cpl} CPL</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 transition-all duration-700"
                style={{ width: `${Math.min(92, 40 + c.leads)}%`, opacity: i === tick % 3 ? 1 : 0.7 }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
