import { borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function StormControllerMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StormControllerMain.name}
      sizeStyle="flex-grow h-full"
      containerStyle={containerStyles["col"]}
      contentStyle="p-[1rem]"
    >
      {children}
    </Layer>
  );
}
