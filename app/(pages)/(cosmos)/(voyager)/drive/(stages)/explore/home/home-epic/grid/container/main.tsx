import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

export function HomeGridContainer({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={HomeGridContainer.name}
      sizeStyle="h-[500px] aspect-[11/16]"
      backgroundStyle={backgroundStyles["glass-10"]}
    >
      <div className="flex flex-col w-full h-full">{children}</div>
    </Layer>
  );
}
