import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";
import { FlowSnapshotObj } from "@/(pages)/(dashboard)/(apollo)/flow/model/context/snapshot/main";

export default function FlowMomentSnapshot({
  flowSnapshot: flowSnapshot,
}: {
  flowSnapshot: FlowSnapshotObj;
}) {
  return (
    <Layer
      displayName={FlowMomentSnapshot.name}
      sizeStyle="w-[100px] h-[120px]"
      backgroundStyle={backgroundStyles["glass-10"]}
    >
      <img src={flowSnapshot.src} className="w-full h-full"></img>
    </Layer>
  );
}
