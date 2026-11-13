"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { locations } from "@/lib/locations";

const pins = locations.filter((city) => ["providence", "warwick", "newport"].includes(city.slug));

export function MapPack() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((n) => (n + 1) % pins.length), 1700);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-[11px] tracking-[0.16em] text-zinc-500">
        <span>Map pack</span>
        <span className="text-cyan-400">Live</span>
      </div>
      <ol className="divide-y divide-white/10">
        {pins.map((city, index) => {
          const isActive = index === active;
          return (
            <li key={city.slug}>
              <Link
                href={`/locations/${city.slug}`}
                className={`flex items-start gap-4 px-4 py-4 transition ${isActive ? "bg-cyan-400/5" : "hover:bg-white/[0.03]"}`}
              >
                <span
                  className={`mt-0.5 flex h-7 w-7 items-center justify-center border text-xs ${
                    isActive ? "border-cyan-400 text-cyan-400" : "border-white/20 text-zinc-500"
                  }`}
                >
                  {index + 1}
                </span>
                <span>
                  <span className={`block text-sm ${isActive ? "text-white" : "text-zinc-300"}`}>
                    {city.name}, {city.state}
                  </span>
                  <span className="mt-1 block text-xs text-zinc-500">{city.region}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
