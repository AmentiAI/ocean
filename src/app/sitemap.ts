import type { MetadataRoute } from "next";
import { keywordPages } from "@/lib/keywords";
import { locations } from "@/lib/locations";
import { site } from "@/lib/site";

const LAST_MOD = "2026-11-13";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/gallery",
    "/contact",
    "/pricing",
    "/seo",
    "/website-design",
    "/platforms",
    "/google-ads",
    "/local-seo",
    "/branding",
    "/growth",
    "/locations",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: LAST_MOD,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const locationRoutes = locations.map((loc) => ({
    url: `${site.url}/locations/${loc.slug}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const keywordRoutes = keywordPages.map((page) => ({
    url: `${site.url}/${page.slug}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...locationRoutes, ...keywordRoutes];
}
