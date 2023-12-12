import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function FlowProgressColumn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowProgressColumn.name}
      sizeStyle="w-full h-full"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["col-center"]}
      contentStyle="space-y-[20px] p-[20px] pb-[180px] overflow-auto"
    >
      {children}
    </Layer>
  );
}
