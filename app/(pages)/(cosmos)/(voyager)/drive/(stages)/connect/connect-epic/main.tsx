import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function ExploreController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={ExploreController.name}
      sizeStyle="h-full flex-grow"
      containerStyle={containerStyles.col}
      backgroundStyle={backgroundStyles["glass-5"]}
      contentStyle="p-[2rem] space-y-[2rem] overflow-auto"
    >
      {children}
    </Layer>
  );
}
