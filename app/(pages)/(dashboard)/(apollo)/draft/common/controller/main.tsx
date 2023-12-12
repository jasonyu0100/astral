import { borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function DraftController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftController.name}
      sizeStyle="w-[1000px] h-full"
      containerStyle={containerStyles.row}
      borderStyle={`${borderStyles["rounded"]} ${borderStyles["border-all"]}`}
    >
      {children}
    </Layer>
  );
}
