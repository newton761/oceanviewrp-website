export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050b16] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {children}
      </div>
    </div>
  );
}