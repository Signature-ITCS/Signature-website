import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";

// The Studio is a client-side app; its HTML shell can be static.
export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      // Inline spacing: Studio's global CSS would otherwise override utility classes here.
      <main className="flex min-h-dvh items-center justify-center bg-navy-950 text-white" style={{ padding: 24, fontFamily: "var(--font-manrope)" }}>
        <div className="flex max-w-lg flex-col rounded-xl bg-navy-900 ring-1 ring-white/10" style={{ padding: 32, gap: 16 }}>
          <h1 className="text-h3">Blog CMS not connected yet</h1>
          <p className="text-muted-light">
            Add <code className="text-glow">NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
            <code className="text-glow">NEXT_PUBLIC_SANITY_DATASET</code> to your environment variables, then restart the site.
            See the README for step-by-step setup.
          </p>
        </div>
      </main>
    );
  }
  return <NextStudio config={config} />;
}
