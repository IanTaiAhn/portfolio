// SVG response sidesteps the @vercel/og Windows font-path bug (ERR_INVALID_URL on file:// paths).
export const contentType = "image/svg+xml";
export const size = { width: 180, height: 180 };

export default function AppleIcon() {
  return new Response(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><rect width="180" height="180" rx="28" fill="#0B1626"/><text x="90" y="127" text-anchor="middle" font-family="Georgia,serif" font-size="88" font-weight="bold" fill="#FFB627" letter-spacing="-3">IA</text></svg>',
    { headers: { "Content-Type": "image/svg+xml" } }
  );
}
