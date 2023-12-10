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
      sizeStyle="w-[800px] h-full"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["row-center"]}
      contentStyle="space-x-[40px] p-[40px] pb-[200px] overflow-auto"
    >
      {children}
    </Layer>
  );
}
