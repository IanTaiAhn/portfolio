import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default function ProjectOGImage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  const title = project?.title ?? "Project";
  const category = project?.category ?? "";
  const hook = project?.hook ?? "";

  const fontBytes = readFileSync(
    join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/noto-sans-v27-latin-regular.ttf")
  );
  const font = fontBytes.buffer.slice(fontBytes.byteOffset, fontBytes.byteOffset + fontBytes.byteLength) as ArrayBuffer;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B1626",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          fontFamily: "sans",
        }}
      >
        {/* Category label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "2px",
              background: "#FFB627",
            }}
          />
          <span
            style={{
              fontSize: 15,
              color: "#FFB627",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontFamily: "sans",
            }}
          >
            {category}
          </span>
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: "#F5EFE0",
            letterSpacing: "-1.5px",
            lineHeight: "1.1",
            marginBottom: "28px",
            maxWidth: "960px",
          }}
        >
          {title}
        </div>
        {/* Hook */}
        <div
          style={{
            fontSize: 26,
            color: "rgba(245, 239, 224, 0.5)",
            letterSpacing: "-0.2px",
          }}
        >
          {hook}
        </div>
        {/* Attribution */}
        <div
          style={{
            position: "absolute",
            bottom: "72px",
            right: "80px",
            fontSize: 18,
            color: "rgba(245, 239, 224, 0.25)",
            letterSpacing: "1px",
            fontFamily: "sans",
          }}
        >
          Ian Tai Ahn
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "sans", data: font, style: "normal" }] }
  );
}
