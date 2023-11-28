"use client";
import Album from "../album/main";

export default function AlbumRow() {
  return (
    <div className="h-[250px] flex flex-row items-center w-full px-[40px] space-x-[100px]">
      <Album/>
      <Album/>
      <Album/>
    </div>
  );
}
