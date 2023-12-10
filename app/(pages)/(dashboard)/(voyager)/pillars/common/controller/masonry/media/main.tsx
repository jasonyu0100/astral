import { backgroundStyles } from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";
import { useState } from "react";

export default function MasonryMedia({ src }: { src: string }) {
  const [flipped, changeFlipped] = useState(false);

  return (
    <div
      className="w-full h-full"
      onClick={() => changeFlipped(!flipped)}
    >
      {flipped ? (
        <Layer 
            sizeStyle="w-full h-full"
            backgroundStyle={backgroundStyles["glass-10"]}
            contentStyle=""
        >
            <h1 className="text-white">dasdsaads</h1>
        </Layer>
      ) : (
        <></>
      )}
      <img
        className="rounded-lg mb-6 shadow-md shadow-slate-500/50"
        src={src}
      />
    </div>
  );
}
