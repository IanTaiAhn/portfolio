import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "28px",
        }}
      >
        <span
          style={{
            color: "#FFB627",
            fontSize: 88,
            letterSpacing: "-3px",
            fontFamily: "sans",
          }}
        >
          IA
        </span>
      </div>
    ),
    { ...size, fonts: [{ name: "sans", data: font, style: "normal" }] }
  );
}
