import Image from "next/image";
import StormSidePanelAvatar from "./avatar/main";
import SidePanelColumn from "./column/main";
import SidePanelGalaxy from "./galaxy/main";
import SidePanelAdd from "./add/main";
import Texture from "@/(pages)/(dashboard)/(common)/texture/main";

export default function StormSidePanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Texture
      sizeStyle="w-[80px] h-[710px]"
      backgroundStyle="bg-gradient-to-r from-slate-100 to-slate-500 opacity-10"
      borderStyle=""
    >
      <div className="flex flex-col items-center flex-shrink-0 w-full h-full">
        <SidePanelGalaxy />
        <SidePanelColumn>{children}</SidePanelColumn>
        <SidePanelAdd />
      </div>
    </Texture>
  );
}
