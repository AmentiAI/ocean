type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-3 text-sm ${light ? "text-white/70" : "text-muted"}`}>{eyebrow}</p>
      )}
      <h2
        className={`font-display text-4xl leading-[1.08] sm:text-5xl ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/75" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
