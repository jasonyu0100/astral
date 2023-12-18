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
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={`${borderStyles["rounded-t"]} ${borderStyles["border-all"]}`}
      contentStyle={"space-y-[2rem] p-[2rem] overflow-auto"}
    >
      {children}
    </Layer>
  );
}
