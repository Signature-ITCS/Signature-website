import Image from "next/image";
import Link from "next/link";
import { isValidElement, type ComponentProps, type ReactNode } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowRight, CircleAlert, Lightbulb } from "lucide-react";
import { slugify } from "./format";

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
  return "";
}

/** H2/H3 headings from the Markdown source, for the table of contents. */
export function extractMdxHeadings(source: string) {
  return source
    .split("\n")
    .map((line) => /^(#{2,3})\s+(.+?)\s*#*$/.exec(line))
    .filter((m): m is RegExpExecArray => m !== null)
    .map((m) => {
      const text = m[2].replace(/\*\*|__|`|\[([^\]]+)\]\([^)]+\)/g, "$1");
      return { id: slugify(text), text, level: (m[1].length === 2 ? "h2" : "h3") as "h2" | "h3" };
    });
}

/** Highlighted note inside an article: <Callout type="tip">…</Callout> */
function Callout({ type = "tip", title, children }: { type?: "tip" | "warning"; title?: string; children: ReactNode }) {
  const warn = type === "warning";
  const Icon = warn ? CircleAlert : Lightbulb;
  return (
    <aside className={`not-prose my-8 flex gap-4 rounded-xl p-5 ring-1 ${warn ? "bg-amber-50 ring-amber-200" : "bg-brand-50 ring-brand-200"}`}>
      <Icon aria-hidden className={`mt-0.5 size-5 shrink-0 ${warn ? "text-amber-600" : "text-brand-600"}`} />
      <div className="flex flex-col gap-1 text-base leading-relaxed text-ink [&>p]:m-0">
        {title ? <strong>{title}</strong> : null}
        {children}
      </div>
    </aside>
  );
}

/** Call-to-action box: <Cta href="/contact" label="Book a free consultation">Text…</Cta> */
function Cta({ href = "/contact", label = "Get a free consultation", children }: { href?: string; label?: string; children: ReactNode }) {
  return (
    <div className="not-prose my-10 flex flex-col gap-4 rounded-xl bg-navy-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
      <div className="text-base leading-relaxed text-white/90 [&>p]:m-0">{children}</div>
      <Link
        href={href}
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3 font-label text-label-lg shadow-cta hover:bg-brand-700"
        // Inline so the article's link styles (blue, underlined) can't override the button.
        style={{ color: "#fff", textDecoration: "none" }}
      >
        {label} <ArrowRight aria-hidden className="size-4" />
      </Link>
    </div>
  );
}

const components = {
  h2: ({ children }: ComponentProps<"h2">) => <h2 id={slugify(textOf(children))}>{children}</h2>,
  h3: ({ children }: ComponentProps<"h3">) => <h3 id={slugify(textOf(children))}>{children}</h3>,
  a: ({ href = "#", children }: ComponentProps<"a">) =>
    href.startsWith("/") ? (
      <Link href={href}>{children}</Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  img: ({ src, alt, title }: ComponentProps<"img">) =>
    typeof src === "string" ? (
      <figure>
        <Image src={src} alt={alt ?? ""} width={1600} height={900} sizes="(min-width: 1024px) 760px, 100vw" className="h-auto w-full rounded-xl" />
        {title ? <figcaption>{title}</figcaption> : null}
      </figure>
    ) : null,
  table: ({ children }: ComponentProps<"table">) => (
    <div className="my-6 overflow-x-auto rounded-xl ring-1 ring-line">
      <table>{children}</table>
    </div>
  ),
  Callout,
  Cta,
};

export async function MdxBody({ source }: { source: string }) {
  const { content } = await compileMDX({
    source,
    components,
    // Posts live in the repository and are trusted, but inline JS expressions stay disabled for safety.
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
  });
  return <div className="prose-signature prose-article">{content}</div>;
}
