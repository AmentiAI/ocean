"use client";

import { useEffect, useState } from "react";

export function RiStatePulse() {
  const cities = ["Providence", "Warwick", "Cranston", "Newport", "Westerly", "Pawtucket"];
  const [active, setActive] = useState(0);
  const [rank, setRank] = useState(8);

  useEffect(() => {
    const t = window.setInterval(() => {
      setActive((n) => (n + 1) % cities.length);
      setRank((r) => Math.max(1, r - 1));
    }, 1400);
    return () => window.clearInterval(t);
  }, [cities.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-white">Rhode Island coverage</p>
          <p className="text-xs text-zinc-500">City + service demand</p>
        </div>
        <span className="text-xs font-bold text-cyan-400">#{rank}</span>
      </div>
      <div className="relative h-44 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.2),transparent_55%),#111]">
        {cities.map((city, i) => {
          const angle = (i / cities.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * 32;
          const y = 48 + Math.sin(angle) * 28;
          return (
            <span
              key={city}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-2 py-1 text-[10px] font-semibold transition ${
                i === active ? "bg-cyan-400 text-black scale-110" : "bg-black/70 text-zinc-400"
              }`}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {city}
            </span>
          );
        })}
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
      </div>
      <p className="border-t border-white/10 px-4 py-3 text-xs text-zinc-400">
        Tracking <span className="text-white">{cities[active]}</span> · statewide SEO program
      </p>
    </div>
  );
}

export function AgencyLeaderboard() {
  const rows = [
    { name: "Ocean State Marketing", score: 98, yours: true },
    { name: "National Franchise SEO", score: 71, yours: false },
    { name: "Template Content Farm", score: 54, yours: false },
    { name: "Ghosted After Audit Co.", score: 33, yours: false },
  ];
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setPulse((n) => n + 1), 1600);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-sm font-semibold text-white">RI agency scorecard</p>
        <p className="text-xs text-zinc-500">Execution · reporting · local depth</p>
      </div>
      <ul className="divide-y divide-white/10">
        {rows.map((row, i) => (
          <li
            key={row.name}
            className={`flex items-center gap-3 px-4 py-3 transition ${
              row.yours ? "bg-cyan-400/10" : ""
            } ${pulse % rows.length === i ? "opacity-100" : "opacity-90"}`}
          >
            <span
              className={`flex h-7 w-7 items-center justify-center text-xs font-bold ${
                row.yours ? "bg-cyan-400 text-black" : "bg-white/5 text-zinc-500"
              }`}
            >
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className={`truncate text-sm ${row.yours ? "font-semibold text-white" : "text-zinc-400"}`}>
                {row.name}
              </p>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-cyan-400 transition-all duration-700"
                  style={{ width: `${row.score - (pulse % 3)}%` }}
                />
              </div>
            </div>
            <span className="text-xs tabular-nums text-zinc-400">{row.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CitySerpClimb({ city = "Providence", query = "seo company providence" }: { city?: string; query?: string }) {
  const [rank, setRank] = useState(5);

  useEffect(() => {
    setRank(5);
    const steps = [5, 4, 3, 2, 1];
    let i = 0;
    const t = window.setInterval(() => {
      i += 1;
      setRank(steps[Math.min(i, steps.length - 1)]!);
      if (i >= steps.length - 1) window.clearInterval(t);
    }, 700);
    const loop = window.setInterval(() => {
      setRank(5);
      let j = 0;
      const inner = window.setInterval(() => {
        j += 1;
        setRank(steps[Math.min(j, steps.length - 1)]!);
        if (j >= steps.length - 1) window.clearInterval(inner);
      }, 700);
    }, 5200);
    return () => {
      window.clearInterval(t);
      window.clearInterval(loop);
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="border-b border-white/10 px-4 py-3">
        <div className="rounded-full border border-white/10 bg-black px-4 py-2 text-sm text-white">
          {query}
          <span className="caret" />
        </div>
      </div>
      <div className="space-y-2 p-4">
        {[1, 2, 3, 4, 5].map((pos) => {
          const ours = pos === rank;
          return (
            <div
              key={pos}
              className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-all duration-500 ${
                ours ? "border-cyan-400/50 bg-cyan-400/10 translate-x-0" : "border-white/10 translate-x-1 opacity-60"
              }`}
            >
              <span className={`text-xs font-bold ${ours ? "text-cyan-400" : "text-zinc-600"}`}>#{pos}</span>
              <p className={`text-sm ${ours ? "font-semibold text-white" : "text-zinc-500"}`}>
                {ours ? `Ocean State Marketing · ${city}` : `Competitor listing ${pos}`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function MapPackPins() {
  const pins = [
    { name: "Your GBP", top: "28%", left: "36%", ours: true },
    { name: "Competitor", top: "48%", left: "58%", ours: false },
    { name: "Competitor", top: "62%", left: "42%", ours: false },
  ];
  const [calls, setCalls] = useState(14);

  useEffect(() => {
    const t = window.setInterval(() => setCalls((c) => c + 1), 2000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="relative h-40 border-b border-white/10 bg-[radial-gradient(circle_at_35%_40%,rgba(34,211,238,0.28),transparent_50%),#111]">
        {pins.map((pin, i) => (
          <span key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: pin.top, left: pin.left }}>
            {pin.ours ? (
              <span className="absolute -inset-3 animate-ping rounded-full bg-cyan-400/30" />
            ) : null}
            <span className={`relative block h-3.5 w-3.5 rounded-full border-2 border-black ${pin.ours ? "bg-cyan-400" : "bg-zinc-500"}`} />
          </span>
        ))}
        <div className="absolute right-3 bottom-3 rounded-md bg-black/80 px-2.5 py-1.5">
          <p className="text-[10px] text-zinc-500 uppercase">Map calls</p>
          <p className="text-lg font-bold text-cyan-400 tabular-nums">{calls}</p>
        </div>
      </div>
      <p className="px-4 py-3 text-sm text-zinc-400">
        Local pack · <span className="text-white">Rhode Island</span>
      </p>
    </div>
  );
}

export function SeasonDial() {
  const seasons = ["Winter locals", "Spring ramp", "Summer peak", "Fall hold"];
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % seasons.length), 1600);
    return () => window.clearInterval(t);
  }, [seasons.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-5">
      <p className="text-sm font-semibold text-white">Westerly demand dial</p>
      <p className="mt-1 text-xs text-zinc-500">Tourism + resident SEO</p>
      <div className="relative mx-auto mt-8 h-36 w-36">
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div
          className="absolute inset-3 rounded-full border-2 border-cyan-400/40 transition-transform duration-700"
          style={{ transform: `rotate(${i * 90}deg)` }}
        >
          <span className="absolute top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-400" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-xs text-zinc-500">Mode</p>
            <p className="mt-1 text-sm font-bold text-cyan-400">{seasons[i]}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-1">
        {seasons.map((s, idx) => (
          <div key={s} className={`rounded-md px-1 py-2 text-center text-[9px] ${idx === i ? "bg-cyan-400/15 text-cyan-400" : "text-zinc-600"}`}>
            {s.split(" ")[0]}
          </div>
        ))}
      </div>
    </div>
  );
}

export function HarborSearch() {
  const intents = [
    { label: "Visitor", q: "best dinner newport ri", tone: "Tourism" },
    { label: "Resident", q: "plumber newport ri", tone: "Year-round" },
    { label: "Weekend", q: "hotels near cliff walk", tone: "Peak" },
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % intents.length), 2000);
    return () => window.clearInterval(t);
  }, [intents.length]);

  const current = intents[i]!;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-sm font-semibold text-white">Aquidneck intent split</p>
        <p className="text-xs text-zinc-500">Newport · Middletown</p>
      </div>
      <div className="bg-[linear-gradient(180deg,rgba(34,211,238,0.12),transparent)] px-4 py-6">
        <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold text-cyan-400 uppercase">
          {current.label} · {current.tone}
        </span>
        <p className="mt-4 text-lg font-semibold text-white">
          {current.q}
          <span className="caret" />
        </p>
      </div>
      <div className="grid grid-cols-3 gap-px border-t border-white/10 bg-white/10">
        {intents.map((item, idx) => (
          <div key={item.label} className={`bg-[#0a0a0a] px-2 py-3 text-center text-xs ${idx === i ? "text-cyan-400" : "text-zinc-600"}`}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrustRank() {
  const signals = ["Reviews", "Depth", "NAP", "Proof", "Speed"];
  const [built, setBuilt] = useState(0);

  useEffect(() => {
    let n = 0;
    const t = window.setInterval(() => {
      n += 1;
      setBuilt(n);
      if (n >= signals.length) {
        window.clearInterval(t);
        window.setTimeout(() => setBuilt(0), 1800);
      }
    }, 500);
    const loop = window.setInterval(() => {
      n = 0;
      setBuilt(0);
      const inner = window.setInterval(() => {
        n += 1;
        setBuilt(n);
        if (n >= signals.length) window.clearInterval(inner);
      }, 500);
    }, 4500);
    return () => {
      window.clearInterval(t);
      window.clearInterval(loop);
    };
  }, [signals.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-5">
      <p className="text-sm font-semibold text-white">East Greenwich trust stack</p>
      <p className="mt-1 text-xs text-zinc-500">Premium local SEO signals</p>
      <div className="mt-6 space-y-2">
        {signals.map((signal, i) => (
          <div
            key={signal}
            className={`flex items-center justify-between rounded-lg border px-3 py-2.5 text-sm transition-all duration-500 ${
              i < built ? "border-cyan-400/40 bg-cyan-400/5 text-white" : "border-white/10 text-zinc-600"
            }`}
          >
            <span>{signal}</span>
            {i < built ? <span className="text-cyan-400">✓</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CapitolSerp() {
  const topics = ["Personal injury Hartford", "Dental West Hartford", "HVAC Greater Hartford", "Law firm Capitol Region"];
  const [i, setI] = useState(0);
  const [depth, setDepth] = useState(20);

  useEffect(() => {
    const t = window.setInterval(() => {
      setI((n) => (n + 1) % topics.length);
      setDepth((d) => (d >= 92 ? 28 : d + 18));
    }, 1700);
    return () => window.clearInterval(t);
  }, [topics.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-sm font-semibold text-white">Hartford SERP depth</p>
        <p className="text-xs text-zinc-500">Thin content loses here</p>
      </div>
      <div className="p-4">
        <p className="text-sm text-zinc-300">{topics[i]}</p>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 transition-all duration-700" style={{ width: `${depth}%` }} />
        </div>
        <div className="mt-3 flex justify-between text-[10px] tracking-wide text-zinc-500 uppercase">
          <span>Thin page</span>
          <span className="text-cyan-400">Topical authority</span>
        </div>
      </div>
    </div>
  );
}

export function MaDemandMap() {
  const hubs = [
    { name: "Boston", x: 72, y: 28 },
    { name: "Worcester", x: 48, y: 42 },
    { name: "Springfield", x: 22, y: 48 },
    { name: "South Coast", x: 68, y: 72 },
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setActive((n) => (n + 1) % hubs.length), 1500);
    return () => window.clearInterval(t);
  }, [hubs.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-sm font-semibold text-white">Massachusetts demand</p>
        <p className="text-xs text-zinc-500">Scope the footprint you can serve</p>
      </div>
      <div className="relative h-48 bg-[#111]">
        {hubs.map((hub, i) => (
          <span
            key={hub.name}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-2.5 py-1 text-[10px] font-semibold transition ${
              i === active ? "bg-cyan-400 text-black scale-110" : "bg-white/10 text-zinc-400"
            }`}
            style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
          >
            {hub.name}
          </span>
        ))}
        <svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden>
          <line x1="72%" y1="28%" x2="48%" y2="42%" stroke="#22d3ee" strokeWidth="1" />
          <line x1="48%" y1="42%" x2="22%" y2="48%" stroke="#22d3ee" strokeWidth="1" />
          <line x1="48%" y1="42%" x2="68%" y2="72%" stroke="#22d3ee" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}

export function TriStateLink() {
  const states = ["RI", "CT", "MA"];
  const [linked, setLinked] = useState(1);

  useEffect(() => {
    const t = window.setInterval(() => setLinked((n) => (n >= 3 ? 1 : n + 1)), 1400);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-5">
      <p className="text-sm font-semibold text-white">New England SEO network</p>
      <p className="mt-1 text-xs text-zinc-500">Regional authority · local execution</p>
      <div className="mt-8 flex items-center justify-between gap-2">
        {states.map((state, i) => (
          <div key={state} className="flex flex-1 flex-col items-center gap-3">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl border text-lg font-bold transition ${
                i < linked ? "border-cyan-400 bg-cyan-400/10 text-cyan-400" : "border-white/10 text-zinc-600"
              }`}
            >
              {state}
            </div>
            {i < states.length - 1 ? (
              <div className={`hidden h-px w-full sm:block ${i < linked - 1 ? "bg-cyan-400" : "bg-white/10"}`} />
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-zinc-400">
        {linked} state{linked > 1 ? "s" : ""} in active program
      </p>
    </div>
  );
}

export function CatalogRank() {
  const products = [
    { name: "Collection: Outdoor", rev: 12400 },
    { name: "Product: Anchor Kit", rev: 4200 },
    { name: "Collection: Apparel", rev: 9800 },
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % products.length), 1600);
    return () => window.clearInterval(t);
  }, [products.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-white">Organic revenue</p>
          <p className="text-xs text-zinc-500">Ecommerce SEO · RI</p>
        </div>
        <span className="text-[10px] font-semibold text-cyan-400 uppercase">Indexing</span>
      </div>
      <ul className="divide-y divide-white/10">
        {products.map((p, idx) => (
          <li key={p.name} className={`px-4 py-3 transition ${idx === i ? "bg-cyan-400/5" : ""}`}>
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className={idx === i ? "text-white" : "text-zinc-500"}>{p.name}</span>
              <span className="font-semibold text-cyan-400 tabular-nums">${(p.rev + idx * 40).toLocaleString()}</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-cyan-400 transition-all duration-700"
                style={{ width: idx <= i ? `${55 + idx * 15}%` : "12%" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
