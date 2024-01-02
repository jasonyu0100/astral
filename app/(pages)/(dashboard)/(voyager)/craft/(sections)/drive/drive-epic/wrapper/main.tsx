import { Layer } from "@/(pages)/(common)/layer/main";
import { containerStyles } from "@/(pages)/(common)/styles/data";

export function DriveWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DriveWrapper.name}
      sizeStyle="w-full h-full"
      containerStyle={containerStyles.row}
    >
      {children}
    </Layer>
  );
}
