import { useState } from "react";

export default function StoreTextualCard({ src }: { src: string }) {
  const [flipped, changeFlipped] = useState(true);

  return (
    <div className="border border-slate-200 border-opacity-30 rounded-[10px] p-[20px] h-[300px] mb-[20px] flex items-center justify-center" onClick={() => changeFlipped(!flipped)}>
      {flipped ? (
        <p className="text-white font-extraBold">
            Hello World
        </p>
      ) : (
        <img
          className="max-w-full rounded-lg mb-6"
          src={src}
        />
      )}
    </div>
  );
}

