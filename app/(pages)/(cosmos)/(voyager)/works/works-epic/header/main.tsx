import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function WorksHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      sizeStyle="w-full h-[250px]"
      displayName={WorksHeader.name}
      containerStyle={containerStyles["row-center"]}
      backgroundStyle={backgroundStyles["glass-5"]}
      contentStyle="px-[2rem]"
    >
      {children}
    </Layer>
  );
}
