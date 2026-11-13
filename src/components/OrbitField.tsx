export function OrbitField() {
  return (
    <div className="relative mx-auto h-64 w-64" aria-hidden>
      <div className="absolute inset-0 rounded-full border border-[#2eb6ff]/25 orbit-spin">
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2eb6ff] shadow-[0_0_16px_#2eb6ff]" />
      </div>
      <div className="absolute inset-8 rounded-full border border-white/15 orbit-spin-reverse">
        <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-white" />
      </div>
      <div className="absolute inset-16 rounded-full border border-[#2eb6ff]/40" />
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2eb6ff] pulse-dot" />
      <span className="orbit-chip absolute -left-2 top-10 border border-white/15 bg-black px-2 py-1 text-[10px] tracking-[0.16em] text-[#2eb6ff]">
        SEO
      </span>
      <span className="orbit-chip absolute -right-3 bottom-12 border border-white/15 bg-black px-2 py-1 text-[10px] tracking-[0.16em] text-ink [animation-delay:180ms]">
        RI · CT · MA
      </span>
    </div>
  );
}
