import { Layer } from "@/(pages)/(common)/layer/main";
import { containerStyles } from "@/(pages)/(common)/styles/data";

export function StoryRecord({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full" style={{ height: "100%" }}>
      <Layer
        displayName={StoryRecord.name}
        sizeStyle="w-full h-full"
        containerStyle={containerStyles["col-center"]}
        contentStyle="p-[3rem] overflow-auto"
      >
        {children}
      </Layer>
    </div>
  );
}
