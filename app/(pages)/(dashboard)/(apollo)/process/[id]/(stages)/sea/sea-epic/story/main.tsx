import { Layer } from "@/(pages)/(common)/layer/main";

export function SeaStory({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <Layer
        displayName={SeaStory.name}
        sizeStyle="w-full h-full"
      >
        {children}
      </Layer>
  );
}
