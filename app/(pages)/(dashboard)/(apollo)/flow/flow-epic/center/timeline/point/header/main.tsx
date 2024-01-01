import Layer from "@/(pages)/(common)/layer/main";
import { borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import { useContext } from "react";
import { FlowMomentContext } from "../main";

export default function FlowPointHeader() {
  const flowPoint = useContext(FlowMomentContext);

  return (
    <div className="w-full h-[60px] pb-[20px]">
      <div className="flex flex-col w-full items-center space-y-[20px]">
        <p className="text-white font-bold text-xl">{flowPoint.date.toDateString()}</p>
        <Layer
          containerStyle={containerStyles["row-centered"]}
          sizeStyle="w-full"
          borderStyle={borderStyles["border-b"]}
          displayName={FlowPointHeader.name}
        >
          <div className="w-[15px] h-[15px] bg-slate-400 rounded-full"></div>
        </Layer>
      </div>
    </div>
  );
}
