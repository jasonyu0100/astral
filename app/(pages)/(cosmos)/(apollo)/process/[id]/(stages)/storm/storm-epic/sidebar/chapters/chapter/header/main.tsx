import { Layer } from "@/(pages)/(common)/layer/main";
import { borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";

export function StormSidePanelSectionHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StormSidePanelSectionHeader.name}
      sizeStyle="w-full h-[50px]"
      containerStyle={containerStyles["row-center"]}
      contentStyle="justify-between"
    >
      {children}
    </Layer>
  );
}
