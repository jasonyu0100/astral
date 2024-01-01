import FlowMomentSnapshot from "./snapshot/main";
import FlowPointHeader from "./header/main";
import FlowPointColumm from "./column/main";
import { createContext, useContext } from "react";
import { FlowMomentObj, exampleFlowMoment } from "../../../../model/point/moment/main";

export const FlowMomentContext = createContext(exampleFlowMoment);

export default function FlowTimelinePoint({
  flowMoment,
}: {
  flowMoment: FlowMomentObj;
}) {

  return (
    <FlowMomentContext.Provider value={flowMoment}>
      <div className="flex flex-col w-[200px] h-full flex-shrink-0 items-center">
        <FlowPointHeader />
        <FlowPointColumm>
          {flowMoment.snapshots.map(flowSnapshot =>
          <FlowMomentSnapshot flowSnapshot={flowSnapshot}/>
            )}
        </FlowPointColumm>
      </div>
    </FlowMomentContext.Provider>
  );
}
