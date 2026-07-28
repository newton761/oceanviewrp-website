"use client";

import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-cyan-500/10 bg-[#08111D] px-8">
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          placeholder="Search..."
          className="w-full rounded-xl bg-[#0D1724] py-3 pl-11 pr-4 outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="rounded-xl bg-[#0D1724] p-3 hover:bg-[#132235]">
          <Bell size={20} />
        </button>

        <div className="text-right">
          <p className="font-semibold">
            Isaac
          </p>

          <p className="text-sm text-slate-400">
            Owner
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
          I
        </div>
      </div>
    </header>
  );
}