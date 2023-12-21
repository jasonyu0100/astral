import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export default function StoryRecord({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StoryRecord.name}
      backgroundStyle={backgroundStyles["glass-20"]}
      sizeStyle="max-w-[1500px] h-full"
      containerStyle={containerStyles["col-center"]}
      borderStyle={`${borderStyles["rounded-t"]} ${borderStyles["border-all"]}`}
      contentStyle="p-[3rem] overflow-auto"
    >
      {children}
    </Layer>
  );
}
