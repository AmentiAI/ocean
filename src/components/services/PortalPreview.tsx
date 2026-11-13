"use client";

import { useEffect, useState } from "react";

const jobs = [
  { id: "OS-2041", client: "East Bay Dental", status: "In review", pct: 72 },
  { id: "OS-2048", client: "Warwick HVAC", status: "Shipping", pct: 91 },
  { id: "OS-2055", client: "Newport Events", status: "Queued", pct: 34 },
];

export function PortalPreview() {
  const [active, setActive] = useState(0);
  const [pct, setPct] = useState(jobs.map((j) => j.pct - 18));

  useEffect(() => {
    const pulse = window.setInterval(() => {
      setActive((n) => {
        const next = (n + 1) % jobs.length;
        setPct((prev) => prev.map((v, i) => Math.min(98, v + (i === next ? 5 : 1))));
        return next;
      });
    }, 1600);
    return () => window.clearInterval(pulse);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-white">Client portal</p>
          <p className="text-xs text-zinc-500">Status · files · invoices</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Live
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 border-b border-white/10 p-3 text-center">
        {[
          ["12", "Open jobs"],
          ["98%", "On time"],
          ["4", "Waiting"],
        ].map(([v, l]) => (
          <div key={l} className="rounded-lg bg-black px-2 py-3">
            <p className="text-lg font-bold text-cyan-400">{v}</p>
            <p className="text-[10px] tracking-wide text-zinc-500 uppercase">{l}</p>
          </div>
        ))}
      </div>
      <ul className="divide-y divide-white/10">
        {jobs.map((job, i) => (
          <li key={job.id} className={`px-4 py-3 transition ${i === active ? "bg-cyan-400/5" : ""}`}>
            <div className="flex items-center justify-between gap-3 text-sm">
              <div>
                <p className="font-medium text-white">{job.client}</p>
                <p className="text-xs text-zinc-500">
                  {job.id} · {job.status}
                </p>
              </div>
              <span className="text-xs text-cyan-400">{pct[i]}%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-cyan-400 transition-all duration-700"
                style={{ width: `${pct[i]}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
