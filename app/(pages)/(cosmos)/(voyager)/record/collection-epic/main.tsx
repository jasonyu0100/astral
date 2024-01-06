import { backgroundStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function RecordCollection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={RecordCollection.name}
      sizeStyle="h-full flex-grow"
      backgroundStyle={backgroundStyles["glass-5"]}
      containerStyle={containerStyles["col-center"]}
    >
      {children}
    </Layer>
  );
}
