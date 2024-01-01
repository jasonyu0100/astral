import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { ProcessStepObj } from "@/(pages)/(dashboard)/(apollo)/model/process/step/main";

export interface FlowStepProps
  extends React.ComponentPropsWithoutRef<"button"> {
  step: ProcessStepObj;
}

export default function FlowStep({
  step,
  ...props
}: FlowStepProps) {
  return (
    <button {...props}>
      <Layer
        displayName={FlowStep.name}
        sizeStyle="w-[80px] h-[100px]"
        backgroundStyle={backgroundStyles["glass-10"]}
        containerStyle={containerStyles["row-centered"]}
        contentStyle="flex-shrink-0"
      >
        <p className="font-bold text-white">{step.name}</p>
      </Layer>
    </button>
  );
}
