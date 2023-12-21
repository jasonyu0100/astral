import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function SearchController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={SearchController.name}
      sizeStyle="h-full flex-grow"
      containerStyle={containerStyles.col}
      backgroundStyle={backgroundStyles["glass-5"]}
      borderStyle={`${borderStyles["rounded-t"]} ${borderStyles["border-all"]}`}
      contentStyle={"space-y-[2rem] px-[2rem] pt-[2rem] overflow-auto"}
    >
      {children}
    </Layer>
  );
}
