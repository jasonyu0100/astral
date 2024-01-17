import { ResourceObj } from "@/tables/resource/main";
import clsx from "clsx";

export function SearchResult({
  result,
  index,
}: {
  result: ResourceObj;
  index: number;
}) {
  return (
    <div
      className={clsx(
        "h-[200px] aspect-[13/16] p-[20px] flex items-center flex-col bg-stone-100 mb-[20px] flex-shrink-0",
        {
          "mt-[20px]": index % 2 === 0,
          "ml-[25px]": index % 2 === 1,
          "mr-[33px]": index % 3 === 1,
          "rotate-1": index % 4 === 1,
          "rotate-[-1]": index % 5 === 1,
        }
      )}
    >
      <img className="w-full aspect-square bg-black" src={result.file.src} />
      <div className="h-full w-full flex flex-col items-center justify-center">
        <p className="text-center w-full text-black font-bold text-xl">
          {result.name}
        </p>
      </div>
    </div>
  );
}
