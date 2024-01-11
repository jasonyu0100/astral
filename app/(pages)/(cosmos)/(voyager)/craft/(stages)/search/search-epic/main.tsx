import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function SearchController({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={SearchController.name}
      sizeStyle="h-full flex-grow"
      backgroundStyle={backgroundStyles["glass-5"]}
      containerStyle={containerStyles["col"]}
      contentStyle="space-y-[2rem] p-[2rem]"
    >
      {children}
    </Layer>
  );
}
