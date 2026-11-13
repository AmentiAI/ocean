"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { keywordPages } from "@/lib/keywords";

const rows = keywordPages.slice(0, 6);

export function RankBoard() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((n) => (n + 1) % rows.length);
    }, 1800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="inline-flex items-center gap-2 text-xs text-zinc-400">
          <span className="pulse-dot" />
          Live keyword coverage
        </span>
        <span className="text-[11px] tracking-[0.14em] text-zinc-500">{keywordPages.length} pages</span>
      </div>
      <ul>
        {rows.map((page, index) => {
          const isActive = index === active;
          return (
            <li key={page.slug} className="border-b border-white/10 last:border-b-0">
              <Link
                href={`/${page.slug}`}
                className={`block px-4 py-3.5 transition ${isActive ? "bg-cyan-400/5" : "hover:bg-white/[0.03]"}`}
              >
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className={isActive ? "text-white" : "text-zinc-300"}>{page.primaryKeyword}</span>
                  <span className={`text-[11px] ${isActive ? "text-cyan-400" : "text-zinc-600"}`}>
                    {page.state ?? "NE"}
                  </span>
                </div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full bg-cyan-400 transition-all duration-700 ${isActive ? "rank-fill" : ""}`}
                    style={{ width: isActive ? `${92 - index * 8}%` : `${40 - index * 4}%` }}
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
