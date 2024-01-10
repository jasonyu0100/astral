import { FlowMoment } from "./column/moment/main";
import { FlowPointHeader } from "./header/main";
import { FlowPointColumm } from "./column/main";
import { createContext } from "react";
import { SessionObj, exampleSession } from "@/(pages)/(cosmos)/tables/flow/session/main";

export const FlowMomentContext = createContext(exampleSession);

export interface FlowMomentProps {
  active: boolean;
  session: SessionObj;
  index: number;
}

export function FlowSession({
  active=false,
  session,
  index,
  
}: FlowMomentProps) {
  return (
    <FlowMomentContext.Provider value={session}>
      <div className="flex flex-col w-[250px] h-full flex-shrink-0 items-center">
        <FlowPointHeader active={active}/>
        <FlowPointColumm index={index}>
          {session.moments.map((moment) => (
            <FlowMoment moment={moment} />
          ))}
        </FlowPointColumm>
      </div>
    </FlowMomentContext.Provider>
  );
}
