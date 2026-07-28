import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import TikTokButton from "@/components/TikTokButton";
import OrganizationSchema from "./organization-schema";
import WebsiteSchema from "./website-schema";
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://oceanviewrp.org"),

  title: {
    default: "OceanView RP | Premium FiveM Roleplay Server",
    template: "%s | OceanView RP",
  },

  description:
    "Join OceanView RP, a premium FiveM roleplay server with custom vehicles, player-owned businesses, realistic economy, police, EMS, gangs, and weekly community events.",

  keywords: [
    "OceanView RP",
    "FiveM",
    "FiveM RP",
    "GTA RP",
    "GTA 5 Roleplay",
    "QBcore",
    "Custom Cars",
    "FiveM Server",
    "Roleplay",
    "Economy RP",
    "Police RP",
    "EMS RP",
    "Gang RP",
    "Canada FiveM",
  ],

  authors: [
    {
      name: "OceanView RP",
    },
  ],

  creator: "OceanView RP",
  publisher: "OceanView RP",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://oceanviewrp.org",
  },

  openGraph: {
    title: "OceanView RP | Premium FiveM Roleplay Server",
    description:
      "Experience premium FiveM roleplay with custom vehicles, businesses, immersive careers, and weekly events.",

    url: "https://oceanviewrp.org",
    siteName: "OceanView RP",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OceanView RP",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OceanView RP",
    description:
      "Join OceanView RP today and experience premium FiveM roleplay.",
    images: ["/og-image.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-[#050B14] text-white antialiased overflow-x-hidden">
        {children}
        <OrganizationSchema />
        <WebsiteSchema />
        <TikTokButton />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}