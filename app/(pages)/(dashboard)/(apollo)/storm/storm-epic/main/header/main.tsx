import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

function StormHeader() {
  return (
    <Layer 
      displayName={StormHeader.name}
      sizeStyle="h-[60px] w-full"
      containerStyle={containerStyles["row-center"]}
      borderStyle={borderStyles["border-b"]}
      contentStyle="px-[1rem] space-x-[1rem] justify-between"
    >
        <div className="flex flex-row w-1/3">
          <div className="text-white text-md font-bold">Chat GPT-3</div>
        </div>
        <div className="flex flex-row justify-center w-1/3">
          <div className="text-white text-md font-bold">Hello World</div>
        </div>
        <div className="flex flex-row justify-end w-1/3">
          <div className="text-white text-md font-bold">Help</div>
        </div>
    </Layer>
  );
}

export default StormHeader;