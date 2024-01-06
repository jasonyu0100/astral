import { borderStyles } from "@/(pages)/(common)/styles/data";
import clsx from "clsx";

export function RecordLogMedia() {
  return (
    <div className="w-[450px] h-[600px] bg-white p-[25px] flex-shrink-0">
      <img
        className={clsx(
          "w-[450px] h-[450px] object-contain bg-black",
          borderStyles["border-all"]
        )}
        src="/voyager/link/day-26.png"
      />
      <div className="h-[100px] flex flex-col items-center justify-center">
        <div className="text-center w-full text-black text-[64px] font-normal font-permanentMarker leading-9 capitalize">
          Dec 12
        </div>
      </div>
    </div>
  );
}
