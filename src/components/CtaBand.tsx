import { Button } from "./Button";

export function CtaBand({
  title = "Ready to Dominate?",
  description = "Join successful Southern New England businesses growing with SEO, websites, custom platforms, and paid search from Ocean State Marketing.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-6 sm:py-24">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" variant="primary">
            Get a free quote
          </Button>
          <Button href="/contact" variant="secondary">
            Book a strategy call
          </Button>
        </div>
      </div>
    </section>
  );
}
