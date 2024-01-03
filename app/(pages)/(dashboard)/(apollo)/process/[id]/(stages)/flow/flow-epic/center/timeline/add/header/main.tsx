import { Layer } from "@/(pages)/(common)/layer/main";
import { borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";

export function FlowPointHeader() {
  return (
    <div className="w-full h-[60px] pb-[20px]">
      <div className="flex flex-col w-full items-center space-y-[20px]">
        <p className="text-slate-500 font-bold text-xl">New Moment</p>
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
