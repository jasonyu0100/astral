"use client";
import GeminiCollectionAlbum from "./album/main";

export default function GeminiCollectionShelf({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[250px] flex flex-row items-center w-full px-[40px] space-x-[100px]">
      {children}
    </div>
  );
}
