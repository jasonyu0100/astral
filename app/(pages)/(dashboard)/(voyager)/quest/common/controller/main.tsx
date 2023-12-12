import { backgroundStyles, borderStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function QuestController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={QuestController.name}
      sizeStyle="w-full h-full"
      borderStyle={`${borderStyles["border-all"]} ${borderStyles["rounded"]}`}
      backgroundStyle={backgroundStyles["glass-5"]}
      contentStyle="overflow-auto"
    >
      {children}
    </Layer>
  );
}
