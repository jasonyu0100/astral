import { Layer } from "@/(pages)/(common)/layer/main";
import { borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import { useContext } from "react";
import { FlowMomentContext } from "../main";
import { FlowContext } from "../../../../../page";

interface FlowPointHeaderProps {
  active: boolean;
}

export function FlowPointHeader({ active }: FlowPointHeaderProps) {
  const { updateCurrentMoment } = useContext(FlowContext);
  const moment = useContext(FlowMomentContext);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  const formattedDate = new Date(moment.date).toLocaleDateString("en-US", options);

  return (
    <button
      className="w-full h-[60px] pb-[20px]"
      onClick={() => updateCurrentMoment(moment)}
    >
      <div className="flex flex-col w-full items-center space-y-[20px]">
        {active ? (
          <p className="text-white font-bold text-xl">{formattedDate}</p>
        ) : (
          <p className="text-slate-500 font-bold text-xl">{formattedDate}</p>
        )}
        <Layer
          containerStyle={containerStyles["row-centered"]}
          sizeStyle="w-full"
          borderStyle={borderStyles["border-b"]}
          displayName={FlowPointHeader.name}
        >
          <div className="flex flex-row items-center w-full">
            <div className="w-[15px] h-[15px] bg-slate-400 rounded-full"></div>
          </div>
        </Layer>
      </div>
    </button>
  );
}
