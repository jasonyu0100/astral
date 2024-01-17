import { Layer } from "@/(common)/layer/main";
import { containerStyles } from "@/(common)/styles/data";

export function DriveWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DriveWrapper.name}
      sizeStyle="w-full h-full"
      className={`${containerStyles.row}`}
    >
      {children}
    </Layer>
  );
}
