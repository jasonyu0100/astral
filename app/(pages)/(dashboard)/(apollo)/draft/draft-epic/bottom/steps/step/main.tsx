import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { ProcessStepObj } from "@/(pages)/(dashboard)/(apollo)/model/process/step/main";

export interface DraftStepProps
  extends React.ComponentPropsWithoutRef<"button"> {
  constellation: ProcessStepObj;
}

export function DraftStep({
  constellation,
  ...props
}: DraftStepProps) {
  return (
    <button {...props}>
      <Layer
        displayName={DraftStep.name}
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
