import { backgroundStyles, borderStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function StoryController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StoryController.name}
      sizeStyle="w-full h-full"
      contentStyle="overflow-auto"
    >
      {children}
    </Layer>
  );
}
