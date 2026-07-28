import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OceanView RP",
    short_name: "OceanView RP",
    description:
      "OceanView RP is a premium FiveM roleplay server featuring custom vehicles, player-owned businesses, realistic economy, police, EMS, gangs, and frequent community events.",
    start_url: "/",
    display: "standalone",
    background_color: "#050B14",
    theme_color: "#050B14",
    orientation: "portrait",
    scope: "/",
    lang: "en",
    categories: ["games", "entertainment", "social"],

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}