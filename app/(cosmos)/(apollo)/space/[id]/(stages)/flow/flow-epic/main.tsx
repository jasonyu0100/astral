import { Layer } from "@/(common)/layer/main";
import {
  containerStyles,
} from "@/(common)/styles/data";

export function FlowMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowMain.name}
      sizeStyle="h-full flex-grow"
      containerStyle={containerStyles["col"]}
    >
      {children}
    </Layer>
  );
}
