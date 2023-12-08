import { useState } from "react";

export default function StoreSonicCard({ src }: { src: string }) {
  const [flipped, changeFlipped] = useState(true);

  return (
    <div onClick={() => changeFlipped(!flipped)}>
      {flipped ? (
        <img
          className="max-w-full rounded-lg mb-6"
          src="/voyager/store/2.png"
        />
      ) : (
        <img
          className="max-w-full rounded-lg mb-6"
          src={src}
        />
      )}
    </div>
  );
}

