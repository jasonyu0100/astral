import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function DraftStoreCol({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftStoreCol.name}
      sizeStyle="w-[160px] h-[540px]"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["col-center"]}
      contentStyle="overflow-auto pt-[20px] space-y-[20px]"
    >
      {children}
    </Layer>
  );
}
