const items = ["SEO", "Web Design", "Google Ads", "Platforms", "Local SEO", "Branding", "Growth"];

export function Marquee() {
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-black py-4">
      <div className="marquee-track">
        {loop.map((label, index) => (
          <span key={`${label}-${index}`} className="mx-6 inline-flex items-center gap-6 text-sm font-semibold tracking-[0.18em] text-zinc-300 uppercase">
            {label}
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </span>
        ))}
      </div>
    </div>
  );
}
