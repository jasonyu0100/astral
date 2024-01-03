import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export function StormSidePanel({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={StormSidePanel.name}
      sizeStyle="max-w-[500px] min-w-[250px] w-1/4 h-full"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["col-center"]}
      contentStyle={"py-[2rem] px-[1rem]"}
    >
      {children}
    </Layer>
  );
}
