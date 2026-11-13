type Props = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">
        {eyebrow ? <p className="text-xs font-semibold tracking-[0.18em] text-cyan-400 uppercase">{eyebrow}</p> : null}
        <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">{description}</p>
      </div>
    </section>
  );
}
