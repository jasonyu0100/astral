import Image from "next/image";
import StormSidePanelAvatar from "./avatar/main";
import SidePanelColumn from "./column/main";
import SidePanelGalaxy from "./galaxy/main";
import SidePanelAdd from "./add/main";

export default function StormSidePanel() {
  return (
    <div className="flex flex-col items-center flex-shrink-0 bg-slate-600 w-[80px] h-[700px] rounded-tr-md">
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
