import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function ReleaseController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={ReleaseController.name}
      sizeStyle="h-full max-w-[1500px]"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["col-center"]}
      borderStyle={`${borderStyles["rounded-t"]} ${borderStyles["border-all"]}`}
      contentStyle="divide-y-[3px] divide-slate-700"
    >
      {children}
    </Layer>
  );
}
