import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { ProcessStepObj } from "@/(pages)/(dashboard)/(apollo)/model/main";

export interface DraftConstellationProps
  extends React.ComponentPropsWithoutRef<"button"> {
  constellation: ProcessStepObj;
}

export default function DraftConstellation({
  constellation,
  ...props
}: DraftConstellationProps) {
  return (
    <button {...props}>
      <Layer
        displayName={DraftConstellation.name}
        sizeStyle="w-[80px] h-[100px]"
        backgroundStyle={backgroundStyles["glass-10"]}
        containerStyle={containerStyles["row-centered"]}
        contentStyle="flex-shrink-0"
      >
        <p className="font-bold text-white">{constellation.name}</p>
      </Layer>
    </button>
  );
}
