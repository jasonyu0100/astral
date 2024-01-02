"use client";

import { FlowController } from "./flow-epic/main";
import { FlowControllerCenter } from "./flow-epic/center/main";
import { FlowControllerBottomRow } from "./flow-epic/bottom/main";
import { FlowStep } from "./flow-epic/bottom/steps/step/main";
import { FlowControllerSteps } from "./flow-epic/bottom/steps/main";
import { FlowSidebar } from "./flow-epic/sidebar/main";
import { FlowStepsAdd } from "./flow-epic/bottom/add/main";
import { FlowWrapper } from "./flow-epic/wrapper/main";
import { FlowSidebarHeaderTitle } from "./flow-epic/sidebar/header/title/main";
import { FlowSidebarButtonRow } from "./flow-epic/sidebar/header/button-row/main";
import { TopRowAddButton } from "./flow-epic/sidebar/header/button-row/button/add/main";
import { TopRowSearchButton } from "./flow-epic/sidebar/header/button-row/button/search/main";
import { FlowSidebarElements } from "./flow-epic/sidebar/elements/main";
import { FlowSnapshot } from "./flow-epic/sidebar/elements/element/main";
import { FlowHeader } from "./flow-epic/sidebar/header/main";
import { FlowLoomButton } from "./flow-epic/sidebar/header/button-row/button/loom/main";
import { FlowMoment } from "./flow-epic/center/timeline/moment/main";
import { FlowTimeline } from "./flow-epic/center/timeline/main";
import { FlowMomentObj } from "./model/point/moment/main";
import { ProcessStepObj } from "../../model/process/step/main";
import { FlowSnapshotObj } from "./model/context/snapshot/main";

interface FlowViewProps {
  moments: FlowMomentObj[];
  moment: FlowMomentObj;
  steps: ProcessStepObj[];
  snapshots: FlowSnapshotObj[];
  addStep: () => void;
  addSnapshot: () => void;
  addSnapshotToMoment: (snapshot: FlowSnapshotObj) => void;
}

export function FlowView({
  moments,
  moment,
  steps,
  snapshots,
  addStep,
  addSnapshot,
  addSnapshotToMoment,
}: FlowViewProps) {
  return (
    <FlowWrapper>
      <FlowController>
        <FlowControllerCenter>
          <FlowTimeline>
            {moments.map((flowMoment) => (
              <FlowMoment flowMoment={flowMoment} />
            ))}
            <FlowMoment flowMoment={moment} />
          </FlowTimeline>
        </FlowControllerCenter>
        <FlowControllerBottomRow>
          <FlowControllerSteps>
            {steps.map((step) => (
              <FlowStep step={step} onClick={() => {}} />
            ))}
          </FlowControllerSteps>
          <FlowStepsAdd onClick={() => addStep()} />
        </FlowControllerBottomRow>
      </FlowController>
      <FlowSidebar>
        <FlowHeader>
          <FlowSidebarHeaderTitle>Snapshots</FlowSidebarHeaderTitle>
          <FlowSidebarButtonRow>
            <TopRowAddButton onClick={() => addSnapshot()} />
            <TopRowSearchButton />
            <FlowLoomButton />
          </FlowSidebarButtonRow>
        </FlowHeader>
        <FlowSidebarElements>
          {snapshots.map((snapshot) => (
            <FlowSnapshot
              src={snapshot.src}
              onClick={() => addSnapshotToMoment(snapshot)}
            />
          ))}
        </FlowSidebarElements>
      </FlowSidebar>
    </FlowWrapper>
  );
}
