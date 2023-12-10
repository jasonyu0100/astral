import { containerStyles } from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function StormControllerMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StormControllerMain.name}
      sizeStyle="w-[840px] h-full"
      containerStyle={containerStyles["col"]}
      contentStyle="justify-between"
    >
      {children}
    </Layer>
  );
}
