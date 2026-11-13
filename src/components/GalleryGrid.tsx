"use client";

import { useEffect, useRef, useState } from "react";
import { galleryItems, type GalleryItem } from "@/lib/gallery";

const MIN = 1;
const MAX = 4;

function clamp(value: number) {
  return Math.min(MAX, Math.max(MIN, value));
}

function ZoomView({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      setScale((current) => {
        const next = clamp(Number((current + (event.deltaY < 0 ? 0.25 : -0.25)).toFixed(2)));
        if (next === 1) setOffset({ x: 0, y: 0 });
        return next;
      });
    };
    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "+" || event.key === "=") setScale((current) => clamp(current + 0.25));
      if (event.key === "-" || event.key === "_") {
        setScale((current) => {
          const next = clamp(current - 0.25);
          if (next === 1) setOffset({ x: 0, y: 0 });
          return next;
        });
      }
      if (event.key === "0") {
        setScale(1);
        setOffset({ x: 0, y: 0 });
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function zoomBy(delta: number) {
    setScale((current) => {
      const next = clamp(Number((current + delta).toFixed(2)));
      if (next === 1) setOffset({ x: 0, y: 0 });
      return next;
    });
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <div
        className="flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-cyan-400 uppercase">{item.category}</p>
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => zoomBy(-0.25)} className="zoom-btn" aria-label="Zoom out">
              −
            </button>
            <span className="w-12 text-center text-xs tabular-nums text-zinc-400">{Math.round(scale * 100)}%</span>
            <button type="button" onClick={() => zoomBy(0.25)} className="zoom-btn" aria-label="Zoom in">
              +
            </button>
            <button
              type="button"
              onClick={() => {
                setScale(1);
                setOffset({ x: 0, y: 0 });
              }}
              className="rounded-md border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-white/15 px-3 py-1.5 text-sm text-zinc-300 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
        <div
          ref={stageRef}
          className={`relative h-[72vh] overflow-hidden bg-black ${scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"}`}
          onDoubleClick={() => {
            if (scale === 1) setScale(2);
            else {
              setScale(1);
              setOffset({ x: 0, y: 0 });
            }
          }}
          onPointerDown={(event) => {
            if (scale === 1) return;
            drag.current = { x: event.clientX, y: event.clientY, ox: offset.x, oy: offset.y };
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (!drag.current) return;
            setOffset({
              x: drag.current.ox + (event.clientX - drag.current.x),
              y: drag.current.oy + (event.clientY - drag.current.y),
            });
          }}
          onPointerUp={() => {
            drag.current = null;
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            draggable={false}
            className="absolute top-0 left-0 w-full origin-center select-none"
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
              transformOrigin: "center top",
            }}
          />
        </div>
        <p className="border-t border-white/10 px-4 py-3 text-xs text-zinc-500">
          Scroll or use + / − to zoom. Drag to pan. Double-click to toggle. {item.summary}
        </p>
      </div>
    </div>
  );
}

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryItem | null>(null);
  const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))];
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition ${
              filter === category
                ? "border-cyan-400 bg-cyan-400 text-black"
                : "border-white/15 text-zinc-400 hover:border-white/40 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {visible.map((item) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setActive(item)}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] text-left transition hover:border-cyan-400/40"
          >
            <div className="aspect-[16/10] overflow-hidden bg-black">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-cyan-400 uppercase">{item.category}</p>
              <h2 className="mt-2 text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.summary}</p>
            </div>
          </button>
        ))}
      </div>

      {active ? <ZoomView key={active.slug} item={active} onClose={() => setActive(null)} /> : null}
    </>
  );
}
