import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export function FlowSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowSidebar.name}
      sizeStyle="max-w-[500px] min-w-[250px] w-1/4 h-full"
      containerStyle={containerStyles["col"]}
      backgroundStyle={backgroundStyles["glass-10"]}
      contentStyle={"py-[2rem] px-[1rem]"}
    >
      {children}
    </Layer>
  );
}
