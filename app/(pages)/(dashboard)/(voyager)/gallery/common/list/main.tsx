export default function GalleryList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col divide-y-[2px] h-full divide-slate-700 w-full bg-slate-800 py-[10px]">
      {children}
    </div>
  );
}
