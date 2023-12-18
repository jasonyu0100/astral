import {
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function FlowController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowController.name}
      sizeStyle="h-full w-[1000px]"
      borderStyle={`${borderStyles["rounded-t"]} ${borderStyles["border-all"]}`}
      containerStyle={containerStyles.row}
    >
      {children}
    </Layer>
  );
}
