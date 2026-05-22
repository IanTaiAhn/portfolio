import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ian Tai Ahn",
    short_name: "Ian Ahn",
    description:
      "Portfolio of Ian Tai Ahn | machine learning, data science, and software.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1626",
    theme_color: "#0B1626",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  };
}
