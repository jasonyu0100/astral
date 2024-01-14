import {
  backgroundStyles,
  containerStyles,
} from "@/(common)/styles/data";
import { Layer } from "@/(common)/layer/main";

export function SpacesHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      sizeStyle="w-full h-[250px]"
      displayName={SpacesHeader.name}
      containerStyle={containerStyles["row-center"]}
      backgroundStyle={backgroundStyles["glass-5"]}
      contentStyle="px-[2rem]"
    >
      {children}
    </Layer>
  );
}
