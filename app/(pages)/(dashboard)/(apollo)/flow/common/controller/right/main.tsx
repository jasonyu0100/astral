import {
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

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
    >
      {children}
    </Layer>
  );
}
