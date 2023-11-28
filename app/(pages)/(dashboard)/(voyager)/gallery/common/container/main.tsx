"use client";

export default function GalleryContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full bg-white rounded-t-lg overflow-hidden">
      {children}
    </div>
  );
}
