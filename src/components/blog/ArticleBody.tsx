import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextBlock, type PortableTextComponents } from "next-sanity";
import { urlForImage } from "@/sanity/image";
import type { SanityImage } from "@/sanity/queries";
import { slugify } from "./format";

function blockText(value: PortableTextBlock) {
  return (value.children as { text?: string }[] | undefined)?.map((c) => c.text ?? "").join("") ?? "";
}

/** H2/H3 headings from the article, used for the table of contents. */
export function extractHeadings(body: PortableTextBlock[]) {
  return body
    .filter((b) => b._type === "block" && (b.style === "h2" || b.style === "h3"))
    .map((b) => ({ id: slugify(blockText(b)), text: blockText(b), level: b.style as "h2" | "h3" }))
    .filter((h) => h.text);
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => <h2 id={slugify(blockText(value))}>{children}</h2>,
    h3: ({ children, value }) => <h3 id={slugify(blockText(value))}>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  marks: {
    link: ({ children, value }) => {
      const href: string = value?.href ?? "#";
      const internal = href.startsWith("/");
      if (internal) return <Link href={href}>{children}</Link>;
      return (
        <a href={href} {...(value?.blank ? { target: "_blank", rel: "noopener noreferrer" } : { rel: "noopener" })}>
          {children}
        </a>
      );
    },
    code: ({ children }) => <code>{children}</code>,
  },
  types: {
    image: ({ value }: { value: SanityImage & { caption?: string } }) => (
      <figure>
        <Image
          src={urlForImage(value).width(1600).url()}
          alt={value.alt ?? ""}
          width={1600}
          height={900}
          sizes="(min-width: 1024px) 760px, 100vw"
          className="h-auto w-full rounded-xl"
        />
        {value.caption ? <figcaption>{value.caption}</figcaption> : null}
      </figure>
    ),
  },
};

export function ArticleBody({ value }: { value: PortableTextBlock[] }) {
  return (
    <div className="prose-signature prose-article">
      <PortableText value={value} components={components} />
    </div>
  );
}
