import {
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function WorksList({ children }: { children: React.ReactNode }) {
  return (
      <Layer
        sizeStyle="w-full"
        displayName={WorksList.name}
        containerStyle={containerStyles["col-center"]}
        contentStyle="divide-y-[1px] divide-slate-500 divide-opacity-30 p-[2rem]"
      >
        {children}
      </Layer>
  );
}
