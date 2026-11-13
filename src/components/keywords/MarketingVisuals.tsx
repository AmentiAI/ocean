"use client";

import { useEffect, useState } from "react";

export function ChannelOrbit() {
  const channels = ["SEO", "Ads", "Web", "CRM"];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setActive((n) => (n + 1) % channels.length), 1200);
    return () => window.clearInterval(t);
  }, [channels.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-5">
      <p className="text-sm font-semibold text-white">Providence channel mix</p>
      <p className="mt-1 text-xs text-zinc-500">One funnel · shared tracking</p>
      <div className="relative mx-auto mt-8 h-44 w-44">
        <div className="absolute inset-0 rounded-full border border-dashed border-white/15" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black">Leads</span>
        </div>
        {channels.map((ch, i) => {
          const angle = (i / channels.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * 42;
          const y = 50 + Math.sin(angle) * 42;
          return (
            <span
              key={ch}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-2.5 py-1 text-[11px] font-semibold transition ${
                i === active ? "bg-cyan-400 text-black" : "bg-white/10 text-zinc-400"
              }`}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {ch}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function LeadFunnel() {
  const stages = [
    { label: "Search demand", value: 100 },
    { label: "Site visits", value: 62 },
    { label: "Qualified leads", value: 28 },
    { label: "Booked jobs", value: 14 },
  ];
  const [built, setBuilt] = useState(0);

  useEffect(() => {
    let n = 0;
    const run = () => {
      n = 0;
      setBuilt(0);
      const t = window.setInterval(() => {
        n += 1;
        setBuilt(n);
        if (n >= stages.length) window.clearInterval(t);
      }, 450);
      return t;
    };
    let t = run();
    const loop = window.setInterval(() => {
      window.clearInterval(t);
      t = run();
    }, 3200);
    return () => {
      window.clearInterval(t);
      window.clearInterval(loop);
    };
  }, [stages.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-5">
      <p className="text-sm font-semibold text-white">RI online funnel</p>
      <p className="mt-1 text-xs text-zinc-500">KPIs over vanity clicks</p>
      <div className="mt-6 space-y-3">
        {stages.map((stage, i) => (
          <div key={stage.label}>
            <div className="mb-1 flex justify-between text-xs">
              <span className={i < built ? "text-zinc-300" : "text-zinc-600"}>{stage.label}</span>
              <span className={i < built ? "text-cyan-400" : "text-zinc-700"}>{stage.value}</span>
            </div>
            <div
              className="mx-auto h-8 rounded-md bg-gradient-to-r from-cyan-400/80 to-fuchsia-400/50 transition-all duration-500"
              style={{
                width: i < built ? `${stage.value}%` : "8%",
                opacity: i < built ? 1 : 0.25,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function StarterStack() {
  const items = [
    { title: "Google Business Profile", cost: "Foundation" },
    { title: "Service pages", cost: "High leverage" },
    { title: "Review flow", cost: "Trust" },
    { title: "Starter SEO", cost: "$500/mo" },
  ];
  const [on, setOn] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setOn((n) => (n + 1) % (items.length + 1)), 900);
    return () => window.clearInterval(t);
  }, [items.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-sm font-semibold text-white">Small business stack</p>
        <p className="text-xs text-zinc-500">Highest leverage first</p>
      </div>
      <ul className="divide-y divide-white/10">
        {items.map((item, i) => (
          <li key={item.title} className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-bold ${
                  i < on ? "bg-cyan-400 text-black" : "bg-white/5 text-zinc-600"
                }`}
              >
                {i < on ? "✓" : i + 1}
              </span>
              <span className={`text-sm ${i < on ? "text-white" : "text-zinc-600"}`}>{item.title}</span>
            </div>
            <span className="text-[10px] tracking-wide text-zinc-500 uppercase">{item.cost}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CorridorTracker() {
  const towns = [
    { name: "Cranston", leads: 22 },
    { name: "Warwick", leads: 18 },
    { name: "Providence", leads: 31 },
  ];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setTick((n) => n + 1), 1500);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-sm font-semibold text-white">Corridor lead tracker</p>
        <p className="text-xs text-zinc-500">Cranston vs nearby metros</p>
      </div>
      <div className="space-y-3 p-4">
        {towns.map((town, i) => {
          const leads = town.leads + ((tick + i) % 4);
          return (
            <div key={town.name}>
              <div className="mb-1 flex justify-between text-sm">
                <span className={town.name === "Cranston" ? "font-semibold text-white" : "text-zinc-400"}>{town.name}</span>
                <span className="tabular-nums text-cyan-400">{leads}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    town.name === "Cranston" ? "bg-cyan-400" : "bg-white/25"
                  }`}
                  style={{ width: `${Math.min(95, leads * 2.4)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function BostonPulse() {
  const metrics = [
    { label: "Organic", value: 42 },
    { label: "Paid", value: 31 },
    { label: "Direct", value: 18 },
  ];
  const [boost, setBoost] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setBoost((n) => (n + 3) % 12), 1200);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-sm font-semibold text-white">Boston acquisition pulse</p>
        <p className="text-xs text-zinc-500">SEO + ads + site</p>
      </div>
      <div className="grid grid-cols-3 gap-2 p-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-white/10 bg-black p-3 text-center">
            <p className="text-2xl font-bold text-cyan-400 tabular-nums">{m.value + boost}</p>
            <p className="mt-1 text-[10px] tracking-wide text-zinc-500 uppercase">{m.label}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-4 py-3">
        <div className="flex h-10 items-end gap-1">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-cyan-400/70 transition-all duration-500"
              style={{ height: `${30 + ((i * 17 + boost * 5) % 70)}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function RoiMeter() {
  const [cpl, setCpl] = useState(64);

  useEffect(() => {
    const t = window.setInterval(() => setCpl((n) => (n <= 28 ? 64 : n - 4)), 900);
    return () => window.clearInterval(t);
  }, []);

  const pct = Math.min(100, Math.round(((64 - cpl) / 36) * 100));

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-5">
      <p className="text-sm font-semibold text-white">MA cost per lead</p>
      <p className="mt-1 text-xs text-zinc-500">Strategy before spend</p>
      <p className="mt-8 text-5xl font-bold text-cyan-400 tabular-nums">${cpl}</p>
      <p className="mt-2 text-xs text-zinc-500">Target CPL improving</p>
      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 transition-all duration-700" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-3 flex justify-between text-[10px] text-zinc-500 uppercase">
        <span>Waste</span>
        <span className="text-cyan-400">Efficient</span>
      </div>
    </div>
  );
}

export function WickfordBoard() {
  const jobs = [
    { title: "Wickford site launch", status: "Live" },
    { title: "Quonset SEO cluster", status: "Shipping" },
    { title: "NK Google Ads", status: "Optimizing" },
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % jobs.length), 1600);
    return () => window.clearInterval(t);
  }, [jobs.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-white">North Kingstown desk</p>
          <p className="text-xs text-zinc-500">Local agency execution</p>
        </div>
        <span className="inline-flex items-center gap-2 text-[10px] font-semibold text-emerald-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Active
        </span>
      </div>
      <ul className="divide-y divide-white/10">
        {jobs.map((job, idx) => (
          <li key={job.title} className={`px-4 py-3 ${idx === i ? "bg-cyan-400/5" : ""}`}>
            <p className={`text-sm ${idx === i ? "text-white" : "text-zinc-500"}`}>{job.title}</p>
            <p className="mt-1 text-xs text-cyan-400">{job.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CoastBookings() {
  const months = ["Jan", "Mar", "May", "Jul", "Sep", "Nov"];
  const values = [18, 24, 41, 78, 52, 29];
  const [built, setBuilt] = useState(0);

  useEffect(() => {
    let n = 0;
    const run = () => {
      n = 0;
      setBuilt(0);
      const t = window.setInterval(() => {
        n += 1;
        setBuilt(n);
        if (n >= values.length) window.clearInterval(t);
      }, 380);
      return t;
    };
    let t = run();
    const loop = window.setInterval(() => {
      window.clearInterval(t);
      t = run();
    }, 4200);
    return () => {
      window.clearInterval(t);
      window.clearInterval(loop);
    };
  }, [values.length]);

  const max = Math.max(...values);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-sm font-semibold text-white">South County bookings</p>
        <p className="text-xs text-zinc-500">Seasonal demand · year-round SEO</p>
      </div>
      <div className="grid h-44 grid-cols-6 items-end gap-2 px-4 py-5">
        {values.map((v, i) => (
          <div key={months[i]} className="flex h-full flex-col items-center justify-end gap-2">
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-cyan-400 to-sky-300 transition-all duration-500"
              style={{ height: i < built ? `${(v / max) * 100}%` : "6%", opacity: i < built ? 1 : 0.25 }}
            />
            <span className="text-[10px] text-zinc-500">{months[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CtMarketGrid() {
  const markets = ["Hartford", "New Haven", "Fairfield", "Waterbury", "Stamford", "Bridgeport"];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setActive((n) => (n + 1) % markets.length), 1100);
    return () => window.clearInterval(t);
  }, [markets.length]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-4">
      <p className="text-sm font-semibold text-white">Connecticut markets</p>
      <p className="mt-1 text-xs text-zinc-500">Different competition by county</p>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {markets.map((m, i) => (
          <div
            key={m}
            className={`rounded-xl border px-3 py-4 text-center text-sm transition ${
              i === active ? "border-cyan-400/50 bg-cyan-400/10 text-white" : "border-white/10 text-zinc-500"
            }`}
          >
            {m}
          </div>
        ))}
      </div>
    </div>
  );
}
