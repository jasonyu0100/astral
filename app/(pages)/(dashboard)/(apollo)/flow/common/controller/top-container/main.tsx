import { borderStyles, containerStyles } from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function FlowTopContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowTopContainer.name}
      sizeStyle="h-[160px] w-full"
      containerStyle={containerStyles.row}
      borderStyle={borderStyles["rounded-t"]}
    >
      {children}
    </Layer>
  );
}
