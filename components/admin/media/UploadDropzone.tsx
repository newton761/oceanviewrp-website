"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function UploadDropzone() {
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return;

    setUploading(true);

    try {
      for (const file of acceptedFiles) {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/media/upload", {
          method: "POST",
          body: formData,
        });
const data: { error?: string; message?: string } = await res.json();

console.log("Upload response:", data);

if (!res.ok) {
  throw new Error(data.error ?? "Upload failed");
}
      }

      toast.success("Upload complete!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      "image/*": [],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`
        cursor-pointer
        rounded-2xl
        border-2
        border-dashed
        p-12
        transition-all
        duration-300
        ${
          isDragActive
            ? "border-cyan-400 bg-cyan-500/10"
            : "border-slate-700 bg-[#07131D]"
        }
      `}
    >
      <input {...getInputProps()} />

      <div className="flex flex-col items-center justify-center gap-4 text-center">
        {uploading ? (
          <Loader2 className="h-14 w-14 animate-spin text-cyan-400" />
        ) : (
          <UploadCloud className="h-14 w-14 text-cyan-400" />
        )}

        <h2 className="text-xl font-semibold text-white">
          {uploading
            ? "Uploading..."
            : "Drag & Drop Images"}
        </h2>

        <p className="text-slate-400">
          or click here to browse your computer
        </p>

        <div className="mt-3 rounded-lg bg-cyan-500 px-5 py-2 font-medium text-black">
          Select Images
        </div>
      </div>
    </div>
  );
}