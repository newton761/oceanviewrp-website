"use client";

import {
  Folder,
  Image,
  Newspaper,
  CalendarDays,
  Layout,
  BadgeCheck,
  Package,
} from "lucide-react";

const folders = [
  { name: "All Files", icon: Folder },
  { name: "Products", icon: Package },
  { name: "Gallery", icon: Image },
  { name: "News", icon: Newspaper },
  { name: "Events", icon: CalendarDays },
  { name: "Homepage", icon: Layout },
  { name: "Logos", icon: BadgeCheck },
];

export default function FolderSidebar() {
  return (
    <div className="w-64 rounded-2xl border border-cyan-500/10 bg-[#0D1724] p-4">
      <h2 className="mb-4 text-lg font-semibold text-white">
        Folders
      </h2>

      <div className="space-y-2">
        {folders.map((folder) => {
          const Icon = folder.icon;

          return (
            <button
              key={folder.name}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              <Icon size={18} />

              {folder.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}