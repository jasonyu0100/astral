import { borderStyles } from "@/(pages)/(common)/styles/data";
import clsx from "clsx";

export function MomentMedia() {
  return (
    <div className="h-[600px] p-[30px] aspect-[13/16] bg-white flex-shrink-0 flex flex-col items-center">
      <img
        className={clsx(
          "w-full aspect-square object-contain bg-black",
          borderStyles["border-all"]
        )}
        src="/voyager/link/day-26.png"
      />
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="text-center w-full text-black text-[64px] font-normal font-permanentMarker leading-9 capitalize">
          Dec 12
        </div>
      </div>
    </div>
  );
}
