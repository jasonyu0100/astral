import { Layer } from "@/(common)/layer/main";
import {
  containerStyles,
} from "@/(common)/styles/data";

export function DraftMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftMain.name}
      sizeStyle="h-full flex-grow"
      containerStyle={containerStyles["col"]}
    >{children}</Layer>
  );
}
