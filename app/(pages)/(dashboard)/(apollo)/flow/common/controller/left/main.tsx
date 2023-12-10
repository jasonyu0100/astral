import { borderStyles, containerStyles } from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function FlowLeftContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowLeftContainer.name}
      sizeStyle="h-full w-[800px]"
      containerStyle={containerStyles.col}
      borderStyle={borderStyles["rounded-tl"]}
    >
      {children}
    </Layer>
  );
}
