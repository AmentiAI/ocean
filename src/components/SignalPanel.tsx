"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { keywordPages } from "@/lib/keywords";
import { locations, locationsByState, states } from "@/lib/locations";
import { services } from "@/lib/services";

type Hit = {
  label: string;
  href: string;
  kind: "Keyword" | "City" | "Service";
  detail: string;
  score: number;
};

const coverage = states.map((state) => ({
  name: state.name,
  href: `/locations#${state.slug}`,
  count: locationsByState(state.code).length,
}));

const maxCities = Math.max(...coverage.map((state) => state.count));

function fieldScore(value: string, query: string) {
  const hay = value.toLowerCase();
  if (hay === query) return 100;
  if (hay.startsWith(query)) return 84;
  if (hay.includes(query)) return 68;
  return 0;
}

function searchSite(query: string) {
  const q = query.trim().toLowerCase();
  const hits: Hit[] = [];
  if (!q) return { hits, services: services.length, cities: locations.length, keywords: keywordPages.length };

  let serviceCount = 0;
  let cityCount = 0;
  let keywordCount = 0;

  for (const page of keywordPages) {
    const score = Math.max(
      fieldScore(page.primaryKeyword, q),
      fieldScore(page.h1, q),
      fieldScore(page.slug.replaceAll("-", " "), q),
      page.body.some((paragraph) => paragraph.toLowerCase().includes(q)) ? 46 : 0,
    );
    if (!score) continue;
    keywordCount += 1;
    hits.push({
      label: page.primaryKeyword,
      href: `/${page.slug}`,
      kind: "Keyword",
      detail: page.h1,
      score,
    });
  }

  for (const city of locations) {
    const score = Math.max(
      fieldScore(city.name, q),
      fieldScore(city.stateName, q),
      fieldScore(city.state, q),
      fieldScore(city.region, q),
      city.headline.toLowerCase().includes(q) ? 46 : 0,
      city.intro.toLowerCase().includes(q) ? 40 : 0,
    );
    if (!score) continue;
    cityCount += 1;
    hits.push({
      label: `${city.name}, ${city.state}`,
      href: `/locations/${city.slug}`,
      kind: "City",
      detail: city.region,
      score,
    });
  }

  for (const service of services) {
    const score = Math.max(
      fieldScore(service.name, q),
      fieldScore(service.short, q),
      service.description.toLowerCase().includes(q) ? 46 : 0,
    );
    if (!score) continue;
    serviceCount += 1;
    hits.push({
      label: service.name,
      href: `/${service.slug}`,
      kind: "Service",
      detail: service.short,
      score,
    });
  }

  hits.sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));
  return { hits, services: serviceCount, cities: cityCount, keywords: keywordCount };
}

export function SignalPanel() {
  const [query, setQuery] = useState("");
  const result = useMemo(() => searchSite(query), [query]);
  const searching = query.trim().length > 0;
  const visible = result.hits.slice(0, 5);
  const top = visible[0];

  const totals = [
    { label: "Services", value: String(result.services), href: searching && top?.kind === "Service" ? top.href : "/pricing" },
    { label: "Cities", value: String(result.cities), href: searching ? visible.find((hit) => hit.kind === "City")?.href ?? "/locations" : "/locations" },
    { label: "Keywords", value: String(result.keywords), href: searching ? visible.find((hit) => hit.kind === "Keyword")?.href ?? "/seo" : "/seo" },
  ];

  return (
    <div className="border border-white/10 bg-[#0c0d10]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <span className="inline-flex items-center gap-2 text-xs text-muted">
          <span className="pulse-dot" />
          {searching ? "Matching pages" : "Keyword coverage"}
        </span>
        <span className="text-[11px] tracking-[0.16em] text-muted">
          {searching ? `${result.hits.length} matches` : `${keywordPages.length} pages`}
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <label className="flex min-h-12 items-center border border-white/10 bg-black px-4 focus-within:border-[#2eb6ff]">
          <span className="mr-3 text-[#2eb6ff]" aria-hidden>
            ⌕
          </span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search cities, services, keywords"
            aria-label="Search cities, services, and keywords"
            className="min-h-6 w-full border-0 bg-transparent py-3 text-base text-ink outline-none placeholder:text-muted"
          />
        </label>

        {searching ? (
          <div className="mt-6 space-y-4">
            {visible.length === 0 ? (
              <p className="text-sm text-muted">No pages match “{query.trim()}”.</p>
            ) : (
              visible.map((hit) => (
                <Link key={`${hit.kind}-${hit.href}`} href={hit.href} className="block">
                  <div className="flex items-baseline justify-between gap-3 text-xs text-muted">
                    <span className="truncate text-ink">{hit.label}</span>
                    <span className="shrink-0">{hit.kind}</span>
                  </div>
                  <p className="mt-1 truncate text-xs text-muted">{hit.detail}</p>
                  <div className="mt-2 h-1 overflow-hidden bg-white/10">
                    <div className="h-full bg-[#2eb6ff]" style={{ width: `${hit.score}%` }} />
                  </div>
                </Link>
              ))
            )}
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {coverage.map((state, index) => (
              <Link key={state.name} href={state.href} className="block">
                <div className="flex justify-between text-xs text-muted">
                  <span>{state.name}</span>
                  <span className="text-ink">{state.count} city pages</span>
                </div>
                <div className="mt-2 h-1 overflow-hidden bg-white/10">
                  <div
                    className="bar-fill h-full bg-[#2eb6ff]"
                    style={{
                      width: `${Math.round((state.count / maxCities) * 100)}%`,
                      animationDelay: `${index * 160}ms`,
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 border border-white/10">
          {totals.map((item) => (
            <Link key={item.label} href={item.href} className="px-3 py-3 transition hover:bg-white/5">
              <p className="text-[11px] tracking-[0.14em] text-muted">{item.label}</p>
              <p className="mt-1 text-sm font-medium text-ink">{item.value}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
