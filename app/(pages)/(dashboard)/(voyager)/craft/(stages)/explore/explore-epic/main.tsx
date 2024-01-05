import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function SearchController({
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
      contentStyle="px-[3rem] pt-[1rem] space-y-[3rem] overflow-auto"
    >
      {children}
    </Layer>
  );
}
