import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function CraftTableController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={CraftTableController.name}
      sizeStyle="h-full flex-grow"
      containerStyle={containerStyles.col}
      contentStyle={"space-y-[2rem] p-[3rem] overflow-auto"}
    >
      {children}
    </Layer>
  );
}
