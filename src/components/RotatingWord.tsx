"use client";

import { useEffect, useState } from "react";
import { services } from "@/lib/services";

const words = services.map((service) => service.name.toLowerCase());

export function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="relative mt-1 block h-[1.12em] overflow-hidden text-teal">
      <span key={words[index]} className="word-swap block">
        {words[index]}
      </span>
    </span>
  );
}
