import { FlowMomentSnapshot } from "./snapshot/main";
import { FlowPointHeader } from "./header/main";
import { FlowPointColumm } from "./column/main";
import { createContext } from "react";
import {
  FlowMomentObj,
  exampleFlowMoment,
} from "../../../../model/point/moment/main";

export const FlowMomentContext = createContext(exampleFlowMoment);

export interface FlowMomentProps {

  flowMoment: FlowMomentObj;
  index: number;
}

export function FlowMoment({
  flowMoment,
  index,
  ...props
}: FlowMomentProps) {
  return (
    <FlowMomentContext.Provider value={flowMoment}>
      <div className="flex flex-col w-[250px] h-full flex-shrink-0 items-center" {...props}>
        <FlowPointHeader />
        <FlowPointColumm index={index}>
          {flowMoment.snapshots.map((flowSnapshot) => (
            <FlowMomentSnapshot flowSnapshot={flowSnapshot} />
          ))}
        </FlowPointColumm>
      </div>
    </FlowMomentContext.Provider>
  );
}
