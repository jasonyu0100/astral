import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export default function BoardControllerBottomRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={BoardControllerBottomRow.name}
      sizeStyle="w-full h-[120px]"
      containerStyle={containerStyles["row-center"]}
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={`${borderStyles["border-t"]}`}
    >
      {children}
    </Layer>
  );
}
