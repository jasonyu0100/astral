import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export function FeedPosts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FeedPosts.name}
      sizeStyle="flex-grow h-full"
      containerStyle={containerStyles["col-center"]}
      contentStyle="p-[3rem] overflow-auto"
    >
      {children}
    </Layer>
  );
}
