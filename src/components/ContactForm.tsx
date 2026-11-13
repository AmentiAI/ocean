"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      business: String(form.get("business") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      market: String(form.get("market") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setError("Network error. Please try again or call us.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-8">
        <h3 className="text-2xl font-bold text-white">Thanks — we got it.</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          Someone from Ocean State Marketing will reach out within one business day with your free quote.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-lg border border-white/10 bg-black px-3 py-2.5 text-white outline-none ring-cyan-400/30 placeholder:text-zinc-600 focus:ring-2";

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-zinc-300">Name</span>
          <input required name="name" className={field} />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-zinc-300">Business</span>
          <input name="business" className={field} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-zinc-300">Email</span>
          <input required type="email" name="email" className={field} />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-zinc-300">Phone</span>
          <input type="tel" name="phone" className={field} />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-zinc-300">Primary market</span>
        <select name="market" className={field} defaultValue="RI">
          <option value="RI">Rhode Island</option>
          <option value="CT">Connecticut</option>
          <option value="MA">Massachusetts</option>
          <option value="Multi">Multi-state / New England</option>
        </select>
      </label>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-zinc-300">What are you looking for?</span>
        <textarea
          required
          name="message"
          rows={4}
          className={field}
          placeholder="SEO, website redesign, Google Ads, multi-location growth…"
        />
      </label>
      {status === "error" ? <p className="text-sm text-red-400">{error}</p> : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Get a free quote"}
      </button>
    </form>
  );
}
