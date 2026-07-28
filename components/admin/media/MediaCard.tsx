"use client";

import { Copy, Eye, Trash2 } from "lucide-react";

export default function MediaCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-cyan-500/10 bg-[#0D1724]">
      <div className="aspect-square bg-[#07131D]" />

      <div className="space-y-3 p-4">
        <div>
          <h3 className="font-medium text-white">
            rx7.webp
          </h3>

          <p className="text-sm text-slate-400">
            248 KB
          </p>
        </div>

        <div className="flex justify-between">
          <Eye className="cursor-pointer text-slate-400 hover:text-cyan-400" />

          <Copy className="cursor-pointer text-slate-400 hover:text-cyan-400" />

          <Trash2 className="cursor-pointer text-slate-400 hover:text-red-500" />
        </div>
      </div>
    </div>
  );
}