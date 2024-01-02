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
      contentStyle="p-[3rem] space-y-[1rem] overflow-auto"
    >
      {children}
    </Layer>
  );
}
