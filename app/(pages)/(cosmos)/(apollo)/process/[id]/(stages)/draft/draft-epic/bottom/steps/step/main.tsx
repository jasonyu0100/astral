import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { ProcessStepObj } from "@/(pages)/(cosmos)/(apollo)/process/[id]/model/process/step/main";

export interface DraftStepProps
  extends React.ComponentPropsWithoutRef<"button"> {
  step: ProcessStepObj;
  active: boolean;
}

export function DraftStep({ step, active, ...props }: DraftStepProps) {
  return (
    <button {...props}>
      <Layer
        displayName={DraftStep.name}
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
