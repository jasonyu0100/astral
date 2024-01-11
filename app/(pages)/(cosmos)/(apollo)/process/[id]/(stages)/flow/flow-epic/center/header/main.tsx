import { Layer } from "@/(pages)/(common)/layer/main";
import { containerStyles, borderStyles } from "@/(pages)/(common)/styles/data";

export function FlowHeader({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={FlowHeader.name}
      sizeStyle="h-[50px] w-full flex-shrink-0"
      containerStyle={containerStyles["row-center"]}
      borderStyle={borderStyles["border-b"]}
      contentStyle="px-[1rem] space-x-[1rem] justify-between"
    >
      {children}
    </Layer>
  );
}
