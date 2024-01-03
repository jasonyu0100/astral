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
import { FlowAddMoment } from "./flow-epic/center/timeline/add/main";
import { flowModel } from "./model/main";
import { processModel } from "../../model/main";

interface FlowViewProps {
  currentMoment: FlowMomentObj;
  moments: FlowMomentObj[];
  steps: ProcessStepObj[];
  snapshots: FlowSnapshotObj[];
  addStep: (step: ProcessStepObj) => void;
  addSnapshotToGallery: (snapshot: FlowSnapshotObj) => void;
  addSnapshotToMoment: (snapshot: FlowSnapshotObj) => void;
  addMomentToStep: (moment: FlowMomentObj) => void;
}

export function FlowView({
  currentMoment,
  moments,
  steps,
  snapshots,
  addStep,
  addSnapshotToGallery,
  addSnapshotToMoment,
  addMomentToStep,
}: FlowViewProps) {
  return (
    <FlowWrapper>
      <FlowController>
        <FlowControllerCenter>
          <FlowTimeline>
            {moments.map((flowMoment, index) => <FlowMoment 
            flowMoment={flowMoment} index={index} active={flowMoment.id === currentMoment.id}
            />)}
            <FlowAddMoment
              onClick={() =>
                addMomentToStep({...flowModel.points.point.moments.moment.example, id: Date.now().toFixed().toString()})
              }
            />
          </FlowTimeline>
        </FlowControllerCenter>
        <FlowControllerBottomRow>
          <FlowControllerSteps>
            {steps.map((step) => (
              <FlowStep
                step={step}
                onClick={() => {
                  alert("Clicked step");
                }}
              />
            ))}
          </FlowControllerSteps>
          <FlowStepsAdd
            onClick={() => {
              addStep(processModel.process.steps.step.example)
            }}
          />
        </FlowControllerBottomRow>
      </FlowController>
      <FlowSidebar>
        <FlowHeader>
          <FlowSidebarHeaderTitle>Snapshots</FlowSidebarHeaderTitle>
          <FlowSidebarButtonRow>
            <TopRowAddButton
              onClick={() =>
                addSnapshotToGallery(flowModel.context.gallery.snapshot.example)
              }
            />
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
