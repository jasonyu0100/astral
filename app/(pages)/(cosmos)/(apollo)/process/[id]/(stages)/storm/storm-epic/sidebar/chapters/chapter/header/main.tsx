import { Layer } from "@/(pages)/(common)/layer/main";
import { containerStyles } from "@/(pages)/(common)/styles/data";

export function StormChapterHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StormChapterHeader.name}
      sizeStyle="w-full h-[50px]"
      containerStyle={containerStyles["row-center"]}
      contentStyle="justify-between"
    >
      {children}
    </Layer>
  );
}
