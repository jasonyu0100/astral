import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export function StormSidebar({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={StormSidebar.name}
      sizeStyle="max-w-[500px] min-w-[250px] w-1/4 h-full"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["col-center"]}
      contentStyle={"p-[1rem]"}
    >
      {children}
    </Layer>
  );
}
