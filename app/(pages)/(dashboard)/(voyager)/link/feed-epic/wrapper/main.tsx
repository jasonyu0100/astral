import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function LinkFeedWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={LinkFeedWrapper.name}
      sizeStyle="h-full flex-grow"
      containerStyle={containerStyles["row"]}
      backgroundStyle={backgroundStyles["glass-5"]}
    >
      {children}
    </Layer>
  );
}
