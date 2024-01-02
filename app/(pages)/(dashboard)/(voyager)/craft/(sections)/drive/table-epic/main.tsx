import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function CraftTableController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={CraftTableController.name}
      sizeStyle="flex-grow"
      containerStyle={containerStyles.col}
      contentStyle={"space-y-[2rem] pt-[3rem] overflow-auto"}
    >
      {children}
    </Layer>
  );
}
