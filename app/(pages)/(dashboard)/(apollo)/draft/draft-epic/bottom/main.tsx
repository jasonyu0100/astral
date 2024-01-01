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
      sizeStyle="w-full h-[140px]"
      containerStyle={containerStyles["row"]}
      borderStyle={borderStyles["border-t"]}
      contentStyle={"pt-[1rem] px-[1rem]"}
    >
      {children}
    </Layer>
  );
}
