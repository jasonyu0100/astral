import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function PillarsMasonryContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={PillarsMasonryContainer.name}
      backgroundStyle={backgroundStyles["glass-10"]}
      sizeStyle={"w-full h-full"}
      borderStyle={`${borderStyles["rounded-t"]} ${borderStyles["border-all"]}`}
      containerStyle={containerStyles.row}
    >
      <div className="w-full h-full">
        <div className="w-full h-full columns-3 gap-[20px] p-[10px] overflow-auto">
          {children}
        </div>
      </div>
    </Layer>
  );
}
