import {
  borderStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function FlowRightContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowRightContainer.name}
      sizeStyle="h-full w-[160px]"
      containerStyle={containerStyles.col}
      borderStyle={borderStyles["rounded-tr"]}
    >
      {children}
    </Layer>
  );
}
