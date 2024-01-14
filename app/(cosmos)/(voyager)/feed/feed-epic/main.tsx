import { backgroundStyles, borderStyles, containerStyles } from "@/(common)/styles/data";
import { Layer } from "@/(common)/layer/main";

export function FeedMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FeedMain.name}
      containerStyle={containerStyles.row}
      backgroundStyle={backgroundStyles["glass-5"]}
      sizeStyle="flex-grow h-full"
    >
      {children}
    </Layer>
  );
}
