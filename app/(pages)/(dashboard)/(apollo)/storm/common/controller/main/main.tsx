import { borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function StormControllerMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StormControllerMain.name}
      sizeStyle="w-[820px] h-full"
      containerStyle={containerStyles["col"]}
      contentStyle="justify-between"
    >
      {children}
    </Layer>
  );
}
