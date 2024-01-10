import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
  effectStyles,
} from "@/(pages)/(common)/styles/data";

export function DraftController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftController.name}
      sizeStyle="h-full flex-grow"
      containerStyle={containerStyles["col"]}
    >{children}</Layer>
  );
}
