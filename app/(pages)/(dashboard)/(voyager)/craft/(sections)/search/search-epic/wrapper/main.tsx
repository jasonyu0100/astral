import Layer from "@/(pages)/(common)/layer/main";
import { containerStyles } from "@/(pages)/(common)/styles/data";

export default function SearchWrapper({
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
