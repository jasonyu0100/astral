import { Layer } from "@/(common)/layer/main";
import { containerStyles } from "@/(common)/styles/data";

export function SpaceWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={SpaceWrapper.name}
      sizeStyle="w-full h-full"
      className={`${containerStyles.row}`}
    >
      {children}
    </Layer>
  );
}
