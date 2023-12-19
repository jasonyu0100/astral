import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function DraftStoreRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftStoreRow.name}
      sizeStyle="w-full h-[160px]"
      backgroundStyle={backgroundStyles["glass-20"]}
      containerStyle={containerStyles["row-center"]}
      contentStyle="px-[40px] space-x-[40px] overflow-auto"
    >
      {children}
    </Layer>
  );
}
