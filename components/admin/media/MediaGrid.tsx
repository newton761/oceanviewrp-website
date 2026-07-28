import MediaCard from "./MediaCard";

export default function MediaGrid() {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: 8 }).map((_, index) => (
        <MediaCard key={index} />
      ))}
    </div>
  );
}