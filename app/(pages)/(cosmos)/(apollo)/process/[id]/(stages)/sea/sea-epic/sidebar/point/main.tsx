import { backgroundStyles, borderStyles } from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function SeaPoint({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={SeaPoint.name}
      sizeStyle="w-full h-[150px]"
      contentStyle="p-[2rem] text-white"
    >
      {children}
    </Layer>
  );
}
