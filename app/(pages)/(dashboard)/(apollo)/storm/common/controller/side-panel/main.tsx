import Image from "next/image";
import StormSidePanelAvatar from "./avatar/main";
import SidePanelColumn from "./column/main";
import SidePanelGalaxy from "./galaxy/main";
import SidePanelAdd from "./add/main";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";
import { backgroundStyles, containerStyles } from "@/(pages)/(dashboard)/(common)/layer/data";

export default function StormSidePanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StormSidePanel.name}
      sizeStyle="w-[80px] h-full"
      backgroundStyle={backgroundStyles["glass-20"]}
      borderStyle=""
      containerStyle={containerStyles["col-center"]}
      contentStyle="justify-between"
    >
      <SidePanelGalaxy />
      <SidePanelColumn>{children}</SidePanelColumn>
      <SidePanelAdd />
    </Layer>
  );
}
