import { Layer } from "@/(pages)/(common)/layer/main";
import { containerStyles } from "@/(pages)/(common)/styles/data";

export function ExploreWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={ExploreWrapper.name}
      sizeStyle="w-full h-full"
      containerStyle={containerStyles.row}
    >
      {children}
    </Layer>
  );
}
