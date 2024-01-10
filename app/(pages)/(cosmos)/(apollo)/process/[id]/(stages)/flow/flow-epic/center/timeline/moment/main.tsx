import { FlowMomentSnapshot } from "./snapshot/main";
import { FlowPointHeader } from "./header/main";
import { FlowPointColumm } from "./column/main";
import { createContext } from "react";
import {
  SessionObj,
  exampleSession,
} from "../../../../../../../../../../../../model/point/minute/main";

export const FlowMomentContext = createContext(exampleSession);

export interface FlowMomentProps {
  active: boolean;
  flowMoment: SessionObj;
  index: number;
}

export function FlowMoment({
  active=false,
  flowMoment,
  index,
  
}: FlowMomentProps) {
  return (
    <FlowMomentContext.Provider value={flowMoment}>
      <div className="flex flex-col w-[250px] h-full flex-shrink-0 items-center">
        <FlowPointHeader active={active}/>
        <FlowPointColumm index={index}>
          {flowMoment.minutes.map((flowSnapshot) => (
            <FlowMomentSnapshot flowSnapshot={flowSnapshot} />
          ))}
        </FlowPointColumm>
      </div>
    </FlowMomentContext.Provider>
  );
}
