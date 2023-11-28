"use client";
import Image from "next/image";
import AlbumRow from "./row/main";

export default function GeminiAlbumsPage() {
  const brands = [];

  return (
    <div className="flex flex-col divide-y-[3px] divide-slate-700 w-[1000px] bg-slate-800 rounded-md">
      <AlbumRow />
      <AlbumRow />
      <AlbumRow />
    </div>
  );
}
