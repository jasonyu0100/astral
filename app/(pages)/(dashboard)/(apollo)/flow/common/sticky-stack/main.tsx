import Layer from "@/(pages)/(common)/layer/main";
import FlowStickyNote from "../sticky/main";
import MultiStickyNote from "../sticky/multi/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

export default function FlowStickyStack() {
  return (
      <div className="flex flex-col space-y-[40px] flex-shrink-0 h-full w-[120px]">
        <Layer 
          displayName={FlowStickyStack.name}
          sizeStyle="h-[50px] w-[120px]"
          backgroundStyle={backgroundStyles["glass-10"]}
        >

        </Layer>
        <div className="flex flex-col space-y-[2rem] grow w-[120px] items-center overflow-auto">
            <MultiStickyNote status="todo"/>
            <MultiStickyNote status="flow"/>
            <MultiStickyNote status="done"/>
        </div>
      </div>
  );
}
