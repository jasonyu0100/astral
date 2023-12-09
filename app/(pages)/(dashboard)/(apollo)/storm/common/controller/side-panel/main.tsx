import Image from "next/image";
import StormSidePanelAvatar from "./avatar/main";
import SidePanelColumn from "./column/main";
import SidePanelGalaxy from "./galaxy/main";
import SidePanelAdd from "./add/main";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";
import { containerStyles } from "@/(pages)/(dashboard)/(common)/layer/data";

export default function StormSidePanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StormSidePanel.name}
      sizeStyle="w-[80px] h-[710px]"
      backgroundStyle="bg-gradient-to-r from-slate-100 to-slate-500 opacity-10"
      borderStyle=""
      containerStyle={containerStyles["col-center"]}
    >
      <SidePanelGalaxy />
      <SidePanelColumn>{children}</SidePanelColumn>
      <SidePanelAdd />
    </Layer>
  );
}
