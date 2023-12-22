import { backgroundStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function WorksList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      sizeStyle="w-full h-full"
      displayName={WorksList.name}
      containerStyle={containerStyles["col-center"]}
      contentStyle="divide-y-[2px] divide-slate-700 py-[1rem] overflow-auto"
    >
      {children}
    </Layer>
  );
}
