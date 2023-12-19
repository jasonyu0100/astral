import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

export interface FlowConstellationProps
  extends React.ComponentPropsWithoutRef<"div"> {
  constellation: any;
}

export default function FlowConstellation({
  constellation,
  ...props
}: FlowConstellationProps) {
  return (
    <button {...props}>
      <Layer
        displayName={FlowConstellation.name}
        sizeStyle="w-[80px] h-[100px]"
        backgroundStyle={backgroundStyles["glass-10"]}
        contentStyle="flex-shrink-0"
      ></Layer>
    </button>
  );
}
