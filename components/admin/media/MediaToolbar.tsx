"use client";

import { Search, Upload } from "lucide-react";

export default function MediaToolbar() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          placeholder="Search images..."
          className="w-full rounded-xl bg-[#0D1724] py-3 pl-11 pr-4 text-white outline-none"
        />
      </div>

      <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400">
        <Upload size={18} />
        Upload
      </button>
    </div>
  );
}