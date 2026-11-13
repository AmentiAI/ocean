"use client";

import { useEffect, useState } from "react";

const lanes = [
  { name: "Search", color: "bg-cyan-400", items: ["City + service terms", "Negatives by town", "Exact and phrase"] },
  { name: "Calls", color: "bg-fuchsia-400", items: ["Local service ads", "Call tracking", "Hours and radius"] },
  { name: "Remarketing", color: "bg-violet-400", items: ["Site visitors", "Offer tests", "Frequency caps"] },
];

export function BidBoard() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setPulse((n) => (n + 1) % 3), 1600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-3">
      {lanes.map((lane, index) => (
        <article key={lane.name} className="bg-black p-5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] tracking-[0.18em] text-zinc-400 uppercase">{lane.name}</p>
            <span className={`h-2 w-2 rounded-full ${lane.color} ${pulse === index ? "animate-ping" : ""}`} />
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className={`h-full rounded-full ${lane.color} transition-all duration-700`}
              style={{ width: pulse === index ? "88%" : "42%" }}
            />
          </div>
          <ul className="mt-5 space-y-2 text-sm text-zinc-300">
            {lane.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
