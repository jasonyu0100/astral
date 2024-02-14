import { cn } from "@/lib/utils";
import { useContext } from "react";
import { DraftContext } from "../../../../page";

export function DraftPanelList() {
  const { constellations, constellationId, constellationHandler } =
    useContext(DraftContext);
    
  return (
    <div className='flex h-full w-full flex-shrink-0 flex-col space-y-[1rem] p-[1rem]'>
      {constellations.map((constellation, index) => (
        // eslint-disable-next-line react/jsx-key
        <div
          onClick={() =>
            constellationHandler.updateConstellation(constellation)
          }
          className='cursor-pointer'
        >
          <p
            className={cn(`text-xl font-bold`, {
              'text-slate-300': constellation.id === constellationId,
              'text-slate-500': constellation.id !== constellationId,
            })}
          >
            {index + 1}. {constellation.title}
          </p>
        </div>
      ))}
    </div>
  );
}
