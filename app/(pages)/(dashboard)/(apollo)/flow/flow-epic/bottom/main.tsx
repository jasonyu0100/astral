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
      sizeStyle="w-full h-[140px]"
      containerStyle={containerStyles["row"]}
      borderStyle={borderStyles["border-t"]}
      contentStyle={"pt-[1rem] px-[1rem]"}
    >
      {children}
    </Layer>
  );
}
