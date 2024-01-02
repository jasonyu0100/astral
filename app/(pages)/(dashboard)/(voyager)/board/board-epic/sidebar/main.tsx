import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export function BoardSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={BoardSidebar.name}
      sizeStyle="max-w-[400px] min-w-[250px] w-1/4 h-full"
      containerStyle={containerStyles["col"]}
      backgroundStyle={backgroundStyles["glass-10"]}
      contentStyle="p-[1rem]"
    >
      {children}
    </Layer>
  );
}
