import { Layer } from "@/(common)/layer/main";
import { containerStyles } from "@/(common)/styles/data";

export function SearchWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer 
      displayName={SearchWrapper.name}
    sizeStyle="w-full h-full" containerStyle={containerStyles.row}>
      {children}
    </Layer>
  );
}
