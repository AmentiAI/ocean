import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tide">404</p>
      <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-lg text-muted">
        That URL doesn’t exist. Try the homepage, services, or location pages.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">Go home</Button>
        <Button href="/locations" variant="ghost">
          Browse locations
        </Button>
      </div>
    </section>
  );
}
