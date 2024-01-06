import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function SeaController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={SeaController.name}
      sizeStyle="h-full flex-grow"
      containerStyle={containerStyles["row-center"]}
    >
      {children}
    </Layer>
  );
}
