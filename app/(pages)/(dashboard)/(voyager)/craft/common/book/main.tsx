import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function CraftBookContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={CraftBookContainer.name}
      sizeStyle="h-full w-full"
      containerStyle={containerStyles.col}
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={`${borderStyles["rounded-t"]} ${borderStyles["border-all"]}`}
      contentStyle={"space-y-[50px] p-[20px] overflow-auto"}
    >
      {children}
    </Layer>
  );
}
