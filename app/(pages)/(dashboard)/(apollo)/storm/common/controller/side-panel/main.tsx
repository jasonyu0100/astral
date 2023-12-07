import Image from "next/image";
import StormSidePanelAvatar from "./avatar/main";
import SidePanelColumn from "./column/main";
import SidePanelGalaxy from "./galaxy/main";
import SidePanelAdd from "./add/main";

export default function StormSidePanel() {
  return (
    <div className="flex flex-col items-center flex-shrink-0 w-[80px] h-[710px] rounded-tr-md bg-gradient-to-r from-slate-700 to-slate-800 backdrop-blur-[20px]">
      <SidePanelGalaxy />
      <SidePanelColumn>
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
      </SidePanelColumn>
      <SidePanelAdd />
    </div>
  );
}
