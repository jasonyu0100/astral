import Image from "next/image";
import StormSidePanelAvatar from "./avatar/main";
import SidePanelColumn from "./column/main";
import SidePanelGalaxy from "./galaxy/main";
import SidePanelAdd from "./add/main";
import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";

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
      borderStyle={borderStyles["rounded-r"]}
      containerStyle={containerStyles["col-center"]}
      contentStyle="justify-between"
    >
      <SidePanelGalaxy />
      <SidePanelColumn>{children}</SidePanelColumn>
      <SidePanelAdd />
    </Layer>
  );
}
