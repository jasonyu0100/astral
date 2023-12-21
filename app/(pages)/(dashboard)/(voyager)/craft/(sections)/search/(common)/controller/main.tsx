import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function CraftStoreController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={CraftStoreController.name}
      sizeStyle="h-full flex-grow"
      containerStyle={containerStyles.col}
      contentStyle={"space-y-[2rem] px-[2rem] pt-[2rem] overflow-auto"}
    >
      {children}
    </Layer>
  );
}
