import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "dark" | "light" | "ghost-dark";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-cta hover:bg-brand-700 hover:shadow-cta-hover",
  dark:
    "bg-white/[0.06] text-white ring-1 ring-inset ring-white/15 hover:bg-white/[0.12] hover:ring-cyan",
  light:
    "bg-white text-ink ring-1 ring-inset ring-line hover:bg-slate-100",
  "ghost-dark": "text-white hover:text-glow",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-label-lg",
  lg: "px-7 py-4 text-label-lg",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className = "") {
  return `inline-flex items-center justify-center gap-2 rounded-lg font-label whitespace-nowrap transition-all duration-200 active:translate-y-px ${variants[variant]} ${sizes[size]} ${className}`;
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ variant, size, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </Link>
  );
}
