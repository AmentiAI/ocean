import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { keywordPages } from "@/lib/keywords";
import { services } from "@/lib/services";

export function Footer() {
  const seoLinks = keywordPages.slice(0, 24);

  return (
    <footer className="border-t border-white/10 bg-black text-zinc-300">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_1.4fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              {site.description}
            </p>
            <div className="mt-5 space-y-1 text-sm">
              <a href={site.phoneHref} className="block hover:text-white">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="block hover:text-white">
                {site.email}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-sm hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/pricing" className="text-sm hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white">
                  Get a free quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
              SEO & Marketing by Location
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {seoLinks.map((page) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`} className="text-sm hover:text-white">
                    {page.primaryKeyword}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
