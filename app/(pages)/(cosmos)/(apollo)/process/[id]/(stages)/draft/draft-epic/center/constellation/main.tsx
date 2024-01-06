import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export function DraftConstellationSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Layer
        displayName={DraftConstellationSection.name}
        sizeStyle="w-full h-full"
        containerStyle={containerStyles["row"]}
      >
        <div className="w-full h-full relative">{children}</div>
      </Layer>
    </div>
  );
}
