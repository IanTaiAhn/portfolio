import { ImageResponse } from "next/og";

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
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
        {/* Amber accent bar */}
        <div
          style={{
            width: "56px",
            height: "3px",
            background: "#FFB627",
            marginBottom: "40px",
          }}
        />
        {/* Name */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#F5EFE0",
            letterSpacing: "-3px",
            lineHeight: "1",
            marginBottom: "24px",
          }}
        >
          Ian Tai Ahn
        </div>
        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(245, 239, 224, 0.55)",
            letterSpacing: "-0.3px",
          }}
        >
          Full Stack · ML · Data Science
        </div>
        {/* Background monogram */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "160px",
            fontWeight: 700,
            color: "rgba(255, 182, 39, 0.07)",
            letterSpacing: "-6px",
            fontFamily: "sans",
          }}
        >
          IA
        </div>
      </div>
    ),
    { ...size }
  );
}
