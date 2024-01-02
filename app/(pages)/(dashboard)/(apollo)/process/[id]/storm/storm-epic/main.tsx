import {
  backgroundStyles,
  borderStyles,
  containerStyles,
  effectStyles,
} from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function StormWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StormWrapper.name}
      sizeStyle="h-full flex-grow"
      backgroundStyle={backgroundStyles["glass-5"]}
      containerStyle={containerStyles["row"]}
    >
      {children}
    </Layer>
  );
}
