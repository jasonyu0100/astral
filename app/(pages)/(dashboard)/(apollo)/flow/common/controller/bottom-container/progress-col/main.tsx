import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function FlowProgressColumn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowProgressColumn.name}
      sizeStyle="w-[200px] h-full"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["col-center"]}
      contentStyle="space-y-[20px] p-[20px] overflow-auto"
    >
      {children}
    </Layer>
  );
}
