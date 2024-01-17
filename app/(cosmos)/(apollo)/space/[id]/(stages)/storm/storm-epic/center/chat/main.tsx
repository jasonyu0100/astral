import {
  containerStyles,
} from "@/(common)/styles/data";
import { Layer } from "@/(common)/layer/main";

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
        className={`${containerStyles["col-center"]} space-y-[30px] overflow-auto p-[1rem]`}
      >
        {children}
      </Layer>
    </div>
  );
}
