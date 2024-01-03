import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { FlowSnapshotObj } from "@/(pages)/(dashboard)/(apollo)/process/[id]/(stages)/flow/model/context/snapshot/main";

export function FlowMomentSnapshot({
  flowSnapshot: flowSnapshot,
}: {
  flowSnapshot: FlowSnapshotObj;
}) {
  return (
    <Layer
      displayName={FlowMomentSnapshot.name}
      sizeStyle="w-[160px] h-[200px]"
      backgroundStyle={"bg-white"}
      contentStyle="p-[10px]"
      containerStyle={containerStyles["col-center"]}
    >
      <div className="w-[140px] h-[140px]">
        <img src={flowSnapshot.src} className="w-full h-full"></img>
      </div>
      <div className="h-[40px] w-full flex items-center justify-center">
        <p className="font-md font-extraBold">Hello World</p>
      </div>
    </Layer>
  );
}
