import {
  borderStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function FlowController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowController.name}
      sizeStyle="h-full w-[1000px]"
      containerStyle={containerStyles.row}
    >
      {children}
    </Layer>
  );
}
