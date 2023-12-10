import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function FlowInspireRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowInspireRow.name}
      sizeStyle="w-[800px] h-[160px]"
      backgroundStyle={backgroundStyles["glass-20"]}
      containerStyle={containerStyles["row-center"]}
      borderStyle={borderStyles["border-b"]}
      contentStyle="overflow-auto space-x-[40px] px-[40px]"
    >
      {children}
    </Layer>
  );
}
