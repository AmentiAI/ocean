"use client";

import { useEffect, useState } from "react";

const screens = [
  { name: "Home", accent: "bg-cyan-400", lines: ["w-2/3", "w-1/2", "w-5/6"] },
  { name: "Service", accent: "bg-fuchsia-400", lines: ["w-1/2", "w-4/5", "w-2/5"] },
  { name: "City", accent: "bg-violet-400", lines: ["w-3/5", "w-2/3", "w-1/2"] },
];

export function BrowserFrame() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((n) => (n + 1) % screens.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[360px]">
      {screens.map((screen, index) => {
        const offset = (index - active + screens.length) % screens.length;
        return (
          <article
            key={screen.name}
            className="absolute w-[78%] rounded-2xl border border-white/15 bg-[#0a0a0a] p-4 shadow-[0_24px_60px_-28px_rgba(34,211,238,0.55)] transition-all duration-500"
            style={{
              top: `${offset * 28}px`,
              left: `${offset * 36}px`,
              zIndex: screens.length - offset,
              opacity: offset > 2 ? 0 : 1,
              transform: `scale(${1 - offset * 0.03})`,
            }}
          >
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <span className={`h-2.5 w-2.5 rounded-full ${screen.accent}`} />
              <span className="text-[11px] tracking-[0.16em] text-zinc-500">{screen.name}</span>
            </div>
            <div className="mt-4 space-y-2">
              {screen.lines.map((width) => (
                <div key={width} className={`h-2 rounded-full bg-white/15 ${width}`} />
              ))}
              <div className={`mt-5 h-9 w-28 rounded-md ${screen.accent}`} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
