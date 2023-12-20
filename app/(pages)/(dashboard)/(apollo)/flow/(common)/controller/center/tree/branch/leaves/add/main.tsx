import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles } from "@/(pages)/(common)/styles/data";

export interface FlowTreeLeafAddProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export default function FlowTreeLeafAdd({ ...props }: FlowTreeLeafAddProps) {
  return (
    <button {...props}>
      <Layer
        displayName={FlowTreeLeafAdd.name}
        sizeStyle="w-[120px] h-[90px]"
        contentStyle="flex-shrink-0"
        backgroundStyle={backgroundStyles["glass-10"]}
        borderStyle={borderStyles.rounded}
      ></Layer>
    </button>
  );
}
