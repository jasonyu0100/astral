import { Layer } from "@/(pages)/(common)/layer/main";
import {
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export function DriveBreadcrumbs({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={DriveBreadcrumbs.name}
      sizeStyle="w-full h-[3rem]"
      containerStyle={containerStyles["row-center"]}
      borderStyle={borderStyles["border-b"]}
    >
      <div className="flex flex-row space-x-[1rem] items-center">{children}</div>
    </Layer>
  );
}
