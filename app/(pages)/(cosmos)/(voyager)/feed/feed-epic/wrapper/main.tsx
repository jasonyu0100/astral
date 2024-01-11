import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function FeedWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FeedWrapper.name}
      sizeStyle="h-full flex-grow"
      containerStyle={containerStyles["row"]}
      backgroundStyle={backgroundStyles["glass-5"]}
    >
      {children}
    </Layer>
  );
}
