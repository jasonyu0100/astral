import {
  backgroundStyles,
  borderStyles,
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
      sizeStyle="w-[160px] h-full"
      containerStyle={containerStyles["col-center"]}
      contentStyle="overflow-auto py-[40px] space-y-[40px]"
    >
      {children}
    </Layer>
  );
}
