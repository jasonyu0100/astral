import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function StormChatBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full" style={{ height: "100%" }}>
      <Layer
        displayName={StormChatBody.name}
        sizeStyle="w-full h-full"
        containerStyle={containerStyles["col-center"]}
        contentStyle="space-y-[30px] overflow-auto"
      >
        {children}
      </Layer>
    </div>
  );
}
