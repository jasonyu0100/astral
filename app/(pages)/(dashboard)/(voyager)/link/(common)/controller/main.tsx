import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function StoryController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StoryController.name}
      containerStyle={containerStyles.row}
      backgroundStyle={backgroundStyles["glass-5"]}
      sizeStyle="flex-grow h-full"
    >
      {children}
    </Layer>
  );
}
