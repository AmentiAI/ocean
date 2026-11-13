import Image from "next/image";
import Link from "next/link";

export function Logo({
  variant = "wordmark",
  className = "h-16 w-16",
}: {
  variant?: "wordmark" | "mark";
  className?: string;
}) {
  if (variant === "mark") {
    return (
      <Link href="/" className="inline-flex">
        <Image
          src="/logo-mark.jpg"
          alt="Ocean State SEO Marketing"
          width={220}
          height={220}
          className={`rounded-full object-cover ${className}`}
        />
      </Link>
    );
  }

  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src="/logo-wordmark.jpg"
        alt="Ocean State SEO Marketing"
        width={320}
        height={84}
        priority
        className="h-12 w-auto sm:h-14"
      />
    </Link>
  );
}
