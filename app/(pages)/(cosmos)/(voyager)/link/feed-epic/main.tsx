import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function LinkFeed({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={LinkFeed.name}
      containerStyle={containerStyles.row}
      backgroundStyle={backgroundStyles["glass-5"]}
      sizeStyle="flex-grow h-full"
    >
      {children}
    </Layer>
  );
}
