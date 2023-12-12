import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function GeminiCollectionController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={GeminiCollectionController.name}
      sizeStyle="h-full w-full"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["col-center"]}
      borderStyle={`${borderStyles["rounded"]} ${borderStyles["border-all"]}`}
      contentStyle="divide-y-[3px] divide-slate-700"
    >
      {children}
    </Layer>
  );
}
