import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
  effectStyles,
} from "@/(pages)/(common)/styles/data";

export function BoardController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={BoardController.name}
      sizeStyle="h-full flex-grow"
      effectStyle={effectStyles["glow-md"]}
      backgroundStyle={backgroundStyles["glass-5"]}
      containerStyle={containerStyles["col"]}
    >
      {children}
    </Layer>
  );
}
