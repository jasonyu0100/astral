import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export default function BoardCraftSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={BoardCraftSection.name}
      sizeStyle="w-[300px] h-full"
      containerStyle={containerStyles["row"]}
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={`${borderStyles["border-l"]}`}
    >
      <div className="w-full h-full flex flex-row flex-wrap p-[1rem] overflow-auto">
        {children}
      </div>
    </Layer>
  );
}
