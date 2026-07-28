"use client";

import Link from "next/link";

export default function TikTokButton() {
  return (
   <Link
  href="https://www.tiktok.com/@oceanview.rp26"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Follow us on TikTok"
  className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#111827] shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(34,211,238,0.8)]"
>
  <span className="absolute right-16 whitespace-nowrap rounded-md bg-[#111827] px-3 py-2 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    Follow OceanView RP on TikTok
  </span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    className="h-7 w-7"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.229V2h-3.057v13.271a2.892 2.892 0 1 1-2.891-2.892c.226 0 .447.026.661.075V9.36a5.936 5.936 0 0 0-.661-.037A5.95 5.95 0 1 0 15.82 15.27V8.547a7.833 7.833 0 0 0 4.589 1.48V6.686h-.82z"/>
  </svg>
</Link>
  );
}