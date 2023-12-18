import { borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function FlowLeftContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowLeftContainer.name}
      sizeStyle="h-full w-[840px]"
      containerStyle={containerStyles.col}
    >
      {children}
    </Layer>
  );
}
