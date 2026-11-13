"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { navLinks, serviceNav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  function openServices() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function scheduleClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 150);
  }

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="relative" onMouseEnter={openServices} onMouseLeave={scheduleClose}>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-zinc-300 transition hover:text-white"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <span className={`text-[10px] transition ${servicesOpen ? "rotate-180" : ""}`}>▼</span>
            </button>
            {servicesOpen ? (
              <div className="absolute left-0 top-full z-50 w-[560px] pt-3">
                <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.7)]">
                  <p className="px-3 pb-2 text-[11px] font-semibold tracking-[0.16em] text-cyan-400 uppercase">
                    What we do
                  </p>
                  <div className="grid gap-1 sm:grid-cols-2">
                    {serviceNav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-xl px-3 py-3 transition hover:bg-white/5"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="block text-sm font-semibold text-white">{item.label}</span>
                        <span className="mt-0.5 block text-xs text-zinc-500">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/pricing"
                    className="mt-2 block rounded-xl border border-white/10 px-3 py-3 text-sm font-semibold text-cyan-400 hover:bg-white/5"
                    onClick={() => setServicesOpen(false)}
                  >
                    View pricing →
                  </Link>
                </div>
              </div>
            ) : null}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-zinc-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-black shadow-[0_0_20px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300 sm:inline-flex"
          >
            Get a free quote
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-white/15 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span className={`block h-px w-4 bg-white transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`block h-px w-4 bg-white transition ${open ? "-rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[80vh] overflow-y-auto border-t border-white/10 bg-black lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-6">
            <p className="py-2 text-[11px] font-semibold tracking-[0.16em] text-cyan-400 uppercase">Services</p>
            {serviceNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-white/10 py-3"
                onClick={() => setOpen(false)}
              >
                <span className="block text-sm text-white">{item.label}</span>
                <span className="text-xs text-zinc-500">{item.description}</span>
              </Link>
            ))}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-white/10 py-3 text-sm text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="py-3 text-sm font-semibold text-cyan-400" onClick={() => setOpen(false)}>
              Get a free quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
