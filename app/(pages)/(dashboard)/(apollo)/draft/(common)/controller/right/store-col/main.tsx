import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

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
