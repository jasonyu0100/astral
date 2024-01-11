import {
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function StormChat({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full" style={{ height: "100%" }}>
      <Layer
        displayName={StormChat.name}
        sizeStyle="w-full h-full"
        containerStyle={containerStyles["col-center"]}
        contentStyle="space-y-[30px] overflow-auto p-[1rem]"
      >
        {children}
      </Layer>
    </div>
  );
}
