"use client";

import { useEffect, useState } from "react";

const modules = [
  { prompt: "portal.login", note: "Accounts, files, status" },
  { prompt: "booking.sync", note: "Calendar and payments" },
  { prompt: "dashboard.ship", note: "Jobs, leads, locations" },
  { prompt: "api.connect", note: "CRM and the tools you have" },
];

export function PlatformStack() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVisible((n) => (n >= modules.length ? 1 : n + 1));
    }, 1400);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-cyan-400/40 bg-black font-mono">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-[11px] tracking-[0.16em] text-cyan-400">
        <span>build.log</span>
        <span className="text-zinc-500">live</span>
      </div>
      <ul className="divide-y divide-white/10">
        {modules.map((mod, index) => (
          <li
            key={mod.prompt}
            className={`flex items-baseline justify-between gap-4 px-4 py-4 transition duration-500 ${
              index < visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-20"
            }`}
          >
            <span className="text-sm text-white">
              <span className="text-cyan-400">&gt; </span>
              {mod.prompt}
              {index === visible - 1 ? <span className="caret ml-1" /> : null}
            </span>
            <span className="text-xs text-zinc-500">{mod.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
