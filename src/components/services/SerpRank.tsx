"use client";

import { useEffect, useState } from "react";

const queries = [
  { q: "seo company providence ri", brand: "Ocean State Marketing", rank: 1 },
  { q: "website design warwick", brand: "Ocean State Marketing", rank: 2 },
  { q: "local seo newport ri", brand: "Ocean State Marketing", rank: 1 },
];

const others = [
  { name: "Generic Agency Co.", url: "genericagency.co" },
  { name: "Template Web Studio", url: "templateweb.studio" },
  { name: "National SEO Inc.", url: "nationalseo.com" },
];

export function SerpRank() {
  const [index, setIndex] = useState(0);
  const [rising, setRising] = useState(false);
  const current = queries[index]!;

  useEffect(() => {
    setRising(false);
    const rise = window.setTimeout(() => setRising(true), 200);
    const next = window.setTimeout(() => setIndex((n) => (n + 1) % queries.length), 3200);
    return () => {
      window.clearTimeout(rise);
      window.clearTimeout(next);
    };
  }, [index]);

  const results: { name: string; url: string; ours: boolean; pos: number }[] = [];
  let otherIdx = 0;
  for (let pos = 1; pos <= 4; pos++) {
    if (pos === current.rank) {
      results.push({
        name: current.brand,
        url: "oceanstatemarketing.com",
        ours: true,
        pos,
      });
    } else {
      const other = others[otherIdx++]!;
      results.push({ ...other, ours: false, pos });
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_60px_rgba(34,211,238,0.08)]">
      <div className="border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black px-4 py-2.5">
          <span className="text-cyan-400" aria-hidden>
            ⌕
          </span>
          <p className="min-h-5 text-sm text-white">
            {current.q}
            <span className="caret" />
          </p>
        </div>
      </div>
      <ol className="divide-y divide-white/10 p-2">
        {results.map((row, i) => (
          <li
            key={`${current.q}-${row.name}`}
            className={`flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-700 ${
              row.ours && rising ? "bg-cyan-400/10 translate-y-0 opacity-100" : "opacity-90"
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold ${
                row.ours ? "bg-cyan-400 text-black" : "bg-white/5 text-zinc-500"
              }`}
            >
              {row.pos}
            </span>
            <div className="min-w-0 flex-1">
              <p className={`truncate text-sm font-medium ${row.ours ? "text-white" : "text-zinc-400"}`}>
                {row.name}
              </p>
              <p className="truncate text-xs text-zinc-600">
                {row.url} · Providence, RI
              </p>
            </div>
            {row.ours ? (
              <span className="text-[10px] font-semibold tracking-wide text-cyan-400 uppercase">You</span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
