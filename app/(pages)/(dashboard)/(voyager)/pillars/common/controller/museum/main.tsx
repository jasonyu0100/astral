import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function PillarsMuseumContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer 
      displayName={PillarsMuseumContainer.name}
      backgroundStyle={backgroundStyles["glass-10"]}
      sizeStyle={"w-full h-full overflow-auto"}
      borderStyle={`${borderStyles["rounded-t"]} ${borderStyles["border-all"]}`}
      containerStyle={containerStyles.row}
    >
      <div className="flex flex-row flex-shrink-0 overflow-auto px-[50px] py-[20px] space-x-[100px] w-full">
        {children}
      </div>
    </Layer>
  );
}
