import FlowStickyNote from "../sticky/main";
import MultiStickyNote from "../sticky/multi/main";

export default function FlowStickyStack() {
  return (
      <div className="flex flex-col space-y-[20px] flex-shrink-0 h-full w-[120px]">
        <div className="flex flex-col flex-shrink-0 h-[50px] w-[120px] bg-slate-700 rounded-md">

        </div>
        <div className="flex flex-col space-y-[20px] grow w-[120px] items-center overflow-auto">
            <MultiStickyNote status="todo"/>
            <MultiStickyNote status="flow"/>
            <MultiStickyNote status="done"/>
        </div>
      </div>
  );
}
