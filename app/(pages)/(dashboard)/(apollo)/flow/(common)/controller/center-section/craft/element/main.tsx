import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

export default function FlowSnapshotElement() {
  return (
    <Layer
      displayName={FlowSnapshotElement.name}
      sizeStyle="w-[100px] h-[100px] m-[10px]"
      backgroundStyle={backgroundStyles["glass-10"]}
    ></Layer>
  );
}
