import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

export interface FlowSnapshotElementProps
  extends React.ComponentPropsWithoutRef<"img"> {}

export default function FlowSnapshotElement({
  ...props
}: FlowSnapshotElementProps) {
  return (
    <Layer
      displayName={FlowSnapshotElement.name}
      sizeStyle="w-[100px] h-[100px] m-[10px]"
      backgroundStyle={backgroundStyles["glass-10"]}
    >
      <img className="w-full h-full" {...props} />
    </Layer>
  );
}
