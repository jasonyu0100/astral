import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";

export default function FlowTimelinePoint() {
  return (
    <div className="flex flex-col w-[200px] h-full flex-shrink-0 items-center">
      <div className="w-full h-[60px] pb-[20px]">
        <div className="flex flex-col w-full items-center space-y-[20px]">
          <p className="text-white font-bold text-xl">OCTOBER</p>
          <Layer
            containerStyle={containerStyles["row-centered"]}
            sizeStyle="w-full"
            borderStyle={borderStyles["border-b"]}
          >

            <div className="w-[15px] h-[15px] bg-slate-400 rounded-full"></div>
          </Layer>
        </div>
      </div>
      <div
        className="flex flex-col items-center overflow-auto w-full space-y-[30px] p-[20px] scrollbar-delayed"
        style={{ height: "100%" }}
      >
        <Layer
          sizeStyle="w-[100px] h-[120px]"
          backgroundStyle={backgroundStyles["glass-10"]}
        ></Layer>
        <Layer
          sizeStyle="w-[100px] h-[120px]"
          backgroundStyle={backgroundStyles["glass-10"]}
        ></Layer>
        <Layer
          sizeStyle="w-[100px] h-[120px]"
          backgroundStyle={backgroundStyles["glass-10"]}
        ></Layer>
        <Layer
          sizeStyle="w-[100px] h-[120px]"
          backgroundStyle={backgroundStyles["glass-10"]}
        ></Layer>
      </div>
    </div>
  );
}
