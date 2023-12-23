import Image from "next/image";
import StormSidePanelAvatar from "./column/avatar/main";
import SidePanelColumn from "./column/main";
import StormSidebarHeader from "./header/main";
import SidePanelAdd from "./footer/main";
import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export default function StormSidePanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StormSidePanel.name}
      sizeStyle="max-w-[400px] min-w-[250px] w-1/4 h-full"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["col-center"]}
      borderStyle={borderStyles["border-l"]}
      contentStyle="justify-between"
    >
      {children}
    </Layer>
  );
}
