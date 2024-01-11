import {
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function SpacesList({ children }: { children: React.ReactNode }) {
  return (
      <Layer
        sizeStyle="w-full"
        displayName={SpacesList.name}
        containerStyle={containerStyles["col-center"]}
        contentStyle="divide-y-[1px] divide-slate-500 divide-opacity-30 p-[2rem]"
      >
        {children}
      </Layer>
  );
}
