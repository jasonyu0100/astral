"use client";

export function SpacesAlbumInfo({ children }: {children: React.ReactNode}) {
  return (
    <div className="flex flex-row space-x-[2rem] h-full items-center">
      {children}
    </div>
  );
}
