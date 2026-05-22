// SVG response avoids ImageResponse entirely, which sidesteps the
// @vercel/og Windows font-path bug (ERR_INVALID_URL on file:// paths).
export const contentType = "image/svg+xml";
export const size = { width: 32, height: 32 };

export default function Icon() {
  return new Response(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#0B1626"/><text x="16" y="22" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#FFB627">IA</text></svg>',
    { headers: { "Content-Type": "image/svg+xml" } }
  );
}
