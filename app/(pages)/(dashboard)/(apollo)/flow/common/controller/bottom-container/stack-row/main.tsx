import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function FlowStackRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowStackRow.name}
      sizeStyle="w-[700px] h-full"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["row-center"]}
      contentStyle="space-x-[20px] p-[20px] overflow-auto"
    >
      {children}
    </Layer>
  );
}
