import type { ReactNode } from "react";

export function Eyebrow({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-label text-label uppercase tracking-[0.14em] ${
        dark ? "text-glow" : "text-brand-600"
      } ${className}`}
    >
      <span aria-hidden className={`h-px w-6 ${dark ? "bg-glow/60" : "bg-brand-600/50"}`} />
      {children}
    </span>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
  align = "left",
  as: Heading = "h2",
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${centered ? "mx-auto items-center text-center" : ""} ${className}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <Heading className={`text-h1-sm lg:text-h1 text-balance ${dark ? "text-white" : "text-ink"}`}>{title}</Heading>
      {description ? (
        <p className={`text-body-lg text-pretty ${dark ? "text-muted-light" : "text-muted"}`}>{description}</p>
      ) : null}
    </div>
  );
}
