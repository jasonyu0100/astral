import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function FlowInspireRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowInspireRow.name}
      sizeStyle="w-full h-[160px]"
      backgroundStyle={backgroundStyles["glass-20"]}
      containerStyle={containerStyles["row-center"]}
      contentStyle="overflow-auto space-x-[40px] px-[40px]"
    >
      {children}
    </Layer>
  );
}
