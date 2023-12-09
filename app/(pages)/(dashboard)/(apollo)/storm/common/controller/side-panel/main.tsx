import Image from "next/image";
import StormSidePanelAvatar from "./avatar/main";
import SidePanelColumn from "./column/main";
import SidePanelGalaxy from "./galaxy/main";
import SidePanelAdd from "./add/main";
import Texture from "@/(pages)/(dashboard)/(common)/texture/main";
import { containerStyles } from "@/(pages)/(dashboard)/(common)/texture/data";

export default function StormSidePanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Texture
      displayName={StormSidePanel.name}
      sizeStyle="w-[80px] h-[710px]"
      backgroundStyle="bg-gradient-to-r from-slate-100 to-slate-500 opacity-10"
      borderStyle=""
      containerStyle={containerStyles["col-center"]}
    >
      <SidePanelGalaxy />
      <SidePanelColumn>{children}</SidePanelColumn>
      <SidePanelAdd />
    </Texture>
  );
}
