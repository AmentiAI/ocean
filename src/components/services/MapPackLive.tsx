"use client";

import { useEffect, useState } from "react";

const listings = [
  { name: "Your Business", rating: "4.9", reviews: 128, city: "Providence, RI", calls: 18 },
  { name: "Competitor A", rating: "4.6", reviews: 84, city: "Providence, RI", calls: 9 },
  { name: "Competitor B", rating: "4.4", reviews: 61, city: "Providence, RI", calls: 6 },
];

export function MapPackLive() {
  const [pulse, setPulse] = useState(0);
  const [calls, setCalls] = useState(listings[0]!.calls);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPulse((n) => n + 1);
      setCalls((c) => c + 1);
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="relative h-40 border-b border-white/10 bg-[radial-gradient(circle_at_30%_40%,rgba(34,211,238,0.28),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(232,121,249,0.16),transparent_50%),#111]">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {[
          { t: "30%", l: "34%", ours: true },
          { t: "52%", l: "62%", ours: false },
          { t: "64%", l: "42%", ours: false },
        ].map((pin, i) => (
          <span key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: pin.t, left: pin.l }}>
            {pin.ours ? (
              <span
                className="absolute inset-0 -m-3 rounded-full bg-cyan-400/30"
                style={{ animation: "map-ping 2.2s ease-out infinite", animationDelay: `${pulse % 2}s` }}
              />
            ) : null}
            <span
              className={`relative block h-3.5 w-3.5 rounded-full border-2 border-black transition ${
                pin.ours ? "scale-125 bg-cyan-400" : "bg-zinc-400"
              }`}
            />
          </span>
        ))}
        <div className="absolute right-3 bottom-3 rounded-md border border-white/10 bg-black/80 px-2.5 py-1.5">
          <p className="text-[10px] tracking-wide text-zinc-500 uppercase">Calls this week</p>
          <p className="text-lg font-bold text-cyan-400 tabular-nums">{calls}</p>
        </div>
        <p className="absolute bottom-3 left-3 rounded-md bg-black/70 px-2 py-1 text-[10px] tracking-wide text-zinc-300 uppercase">
          Map pack · RI
        </p>
      </div>
      <ol className="divide-y divide-white/10">
        {listings.map((item, i) => (
          <li
            key={item.name}
            className={`flex items-start gap-3 px-4 py-3 transition ${i === 0 ? "bg-cyan-400/5" : ""}`}
          >
            <span
              className={`mt-0.5 flex h-7 w-7 items-center justify-center text-xs font-bold ${
                i === 0 ? "bg-cyan-400 text-black" : "bg-white/5 text-zinc-500"
              }`}
            >
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className={`text-sm font-medium ${i === 0 ? "text-white" : "text-zinc-400"}`}>{item.name}</p>
              <p className="mt-0.5 text-xs text-zinc-500">
                ★ {item.rating} ({item.reviews}) · {item.city}
              </p>
            </div>
            {i === 0 ? (
              <span className="text-[10px] font-semibold tracking-wide text-cyan-400 uppercase">#1</span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
