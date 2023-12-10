import { backgroundStyles, borderStyles } from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function QuestController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={QuestController.name}
      sizeStyle="w-full h-full"
      borderStyle={`${borderStyles["border-all"]} ${borderStyles["rounded-t"]}`}
      backgroundStyle={backgroundStyles["glass-5"]}
      contentStyle="overflow-auto"
    >
      {children}
    </Layer>
  );
}
