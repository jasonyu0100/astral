import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export default function DraftControllerBottomRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftControllerBottomRow.name}
      sizeStyle="w-full h-[120px]"
      containerStyle={containerStyles["row-center"]}
      backgroundStyle={backgroundStyles["glass-5"]}
    >
      {children}
    </Layer>
  );
}
