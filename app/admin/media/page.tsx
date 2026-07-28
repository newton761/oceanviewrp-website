import FolderSidebar from "@/components/admin/media/FolderSidebar";
import MediaToolbar from "@/components/admin/media/MediaToolbar";
import UploadDropzone from "@/components/admin/media/UploadDropzone";
import MediaGrid from "@/components/admin/media/MediaGrid";

export default function MediaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Media Library
        </h1>

        <p className="mt-2 text-slate-400">
          Upload and manage all media used across OceanView RP.
        </p>
      </div>

      <div className="flex gap-8">
        <FolderSidebar />

        <div className="flex-1 space-y-6">
          <MediaToolbar />
          <UploadDropzone />
          <div className="mt-8"></div>

          <MediaGrid />
        </div>
      </div>
    </div>
  );
}