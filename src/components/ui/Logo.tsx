import Image from "next/image";
import Link from "next/link";
import logoWhite from "../../../public/brand/logo-white.png";
import logoDark from "../../../public/brand/logo-dark.png";
import { site } from "@/lib/site";

export function Logo({
  variant = "white",
  className = "h-9 w-auto",
  priority = false,
}: {
  variant?: "white" | "dark";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" aria-label={`${site.name} home`} className="inline-flex shrink-0 items-center">
      <Image
        src={variant === "white" ? logoWhite : logoDark}
        alt={site.legalName}
        className={className}
        sizes="200px"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </Link>
  );
}
