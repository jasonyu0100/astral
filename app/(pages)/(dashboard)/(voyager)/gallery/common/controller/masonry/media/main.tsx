"use client"

import { useState } from "react";

export default function GalleryMasonryMedia({ src }: { src: string }) {
  const [flipped, changeFlipped] = useState(false);

  return (
    <div
      className="relative"
      onClick={() => changeFlipped(!flipped)}
    >
      {flipped ? (
        <div className="absolute w-full h-full flex flex-row justify-center items-center top-0 left-0 bg-slate-500 bg-opacity-50 rounded-lg">
            <h1 className="text-white text-lg font-bold">Hello World</h1>
        </div>
      ) : (
        <></>
      )}
      <img
        className="rounded-lg mb-6 shadow-md shadow-slate-500/50 w-full"
        src={src}
      />
    </div>
  );
}
