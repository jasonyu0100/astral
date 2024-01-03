import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { ProcessStepObj } from "@/(pages)/(dashboard)/(apollo)/process/[id]/model/process/step/main";

export interface FlowStepProps
  extends React.ComponentPropsWithoutRef<"button"> {
  step: ProcessStepObj;
  active: boolean;
}

export function FlowStep({ step, active, ...props }: FlowStepProps) {
  return (
    <button {...props}>
      <Layer
        displayName={FlowStep.name}
        sizeStyle="w-[80px] h-[100px]"
        backgroundStyle={backgroundStyles["glass-10"]}
        containerStyle={containerStyles["row-centered"]}
        contentStyle="flex-shrink-0"
      >
        {active ? (
          <p className="font-bold text-white">{step.name}</p>
        ) : (
          <p className="font-bold text-slate-500">{step.name}</p>
        )}
      </Layer>
    </button>
  );
}
