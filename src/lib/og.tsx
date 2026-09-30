import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "./site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const fontDir = join(process.cwd(), "node_modules/@fontsource/manrope/files");

async function assets() {
  const [bold, extraBold, medium, mark] = await Promise.all([
    readFile(join(fontDir, "manrope-latin-700-normal.woff")),
    readFile(join(fontDir, "manrope-latin-800-normal.woff")),
    readFile(join(fontDir, "manrope-latin-500-normal.woff")),
    readFile(join(process.cwd(), "public/brand/mark-white.png")),
  ]);
  return { bold, extraBold, medium, markSrc: `data:image/png;base64,${mark.toString("base64")}` };
}

export async function renderOgImage({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  const { bold, extraBold, medium, markSrc } = await assets();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0B1220 0%, #0B1220 55%, #14213D 100%)",
          fontFamily: "Manrope",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(37,99,235,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: 200,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(123,208,255,0.18) 0%, rgba(123,208,255,0) 70%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={58} height={54} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#FFFFFF", fontSize: 30, fontWeight: 800, letterSpacing: 1 }}>SIGNATURE</span>
            <span style={{ color: "#94A3B8", fontSize: 14, fontWeight: 500, letterSpacing: 5 }}>MARKETING &amp; TECH LTD</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 980 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 2, background: "#7BD0FF" }} />
            <span style={{ color: "#7BD0FF", fontSize: 22, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>{eyebrow}</span>
          </div>
          <span style={{ color: "#FFFFFF", fontSize: title.length > 48 ? 58 : 70, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2 }}>
            {title}
          </span>
          {subtitle ? (
            <span style={{ color: "#94A3B8", fontSize: 26, fontWeight: 500, lineHeight: 1.4 }}>{subtitle}</span>
          ) : null}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#94A3B8", fontSize: 20, fontWeight: 500 }}>
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
          <div style={{ display: "flex", gap: 28 }}>
            <span style={{ color: "#FFFFFF", fontWeight: 700 }}>{site.phone.display}</span>
            <span>{site.email.display}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Manrope", data: medium, weight: 500, style: "normal" },
        { name: "Manrope", data: bold, weight: 700, style: "normal" },
        { name: "Manrope", data: extraBold, weight: 800, style: "normal" },
      ],
    },
  );
}
