import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light" | "cyan";
  className?: string;
};

const styles = {
  primary: "rounded-md bg-white text-black hover:bg-zinc-200",
  secondary: "rounded-md border border-white/30 bg-transparent text-white hover:border-white",
  ghost: "rounded-md border border-white/30 bg-transparent text-white hover:border-white",
  light: "rounded-md bg-white text-black hover:bg-zinc-200",
  cyan: "rounded-md bg-cyan-400 text-black shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:bg-cyan-300",
};

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
