import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function GalleryMasonryContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={GalleryMasonryContainer.name}
      backgroundStyle={backgroundStyles["glass-10"]}
      sizeStyle={"max-w-[1500px] h-full"}
      borderStyle={`${borderStyles["rounded-t"]} ${borderStyles["border-all"]}`}
      containerStyle={containerStyles.row}
    >
      <div className="w-full h-full">
        <div className="w-full h-full columns-3 gap-[2rem] p-[1rem] overflow-auto">
          {children}
        </div>
      </div>
    </Layer>
  );
}
