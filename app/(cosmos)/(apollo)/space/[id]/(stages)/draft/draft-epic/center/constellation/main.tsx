import { Layer } from "@/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(common)/styles/data";

export function DraftConstellation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Layer
        displayName={DraftConstellation.name}
        sizeStyle="w-full h-full"
        className={`${containerStyles["row"]}`}
      >
        <div className="w-full h-full relative">{children}</div>
      </Layer>
    </div>
  );
}
