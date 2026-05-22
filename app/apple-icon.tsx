import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B1626",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "28px",
        }}
      >
        <span
          style={{
            color: "#FFB627",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "-3px",
            fontFamily: "serif",
          }}
        >
          IA
        </span>
      </div>
    ),
    { ...size }
  );
}
