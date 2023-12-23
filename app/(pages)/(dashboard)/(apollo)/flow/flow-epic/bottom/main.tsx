import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export default function FlowControllerBottomRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowControllerBottomRow.name}
      sizeStyle="w-full h-[120px]"
      containerStyle={containerStyles["row-center"]}
      borderStyle={borderStyles["border-t"]}
    >
      {children}
    </Layer>
  );
}
