"use client";

import { FlowController } from "./flow-epic/main";
import { FlowControllerCenter } from "./flow-epic/center/main";
import { FlowControllerBottomRow } from "./flow-epic/bottom/main";
import { FlowStep } from "./flow-epic/bottom/steps/step/main";
import { FlowControllerSteps } from "./flow-epic/bottom/steps/main";
import { Sidebar } from "./flow-epic/sidebar/main";
import { FlowStepsAdd } from "./flow-epic/bottom/add/main";
import { FlowWrapper } from "./flow-epic/wrapper/main";
import { FlowMoment } from "./flow-epic/center/timeline/moment/main";
import { FlowTimeline } from "./flow-epic/center/timeline/main";
import { FlowAddMoment } from "./flow-epic/center/timeline/add/main";
import { flowModel } from "./model/main";
import { processModel } from "../../model/main";
import { FlowViewProps } from "./page";

export function FlowView({
  momentId,
  stepId,
  moments,
  steps,
  momentHandler: momentHandling,
  stepHandler: stepHandling,
}: FlowViewProps) {
  return (
    <FlowWrapper>
      <FlowController>
        <FlowControllerCenter>
          <FlowTimeline>
            {moments.map((flowMoment, index) => (
              <FlowMoment
                flowMoment={flowMoment}
                index={index}
                active={flowMoment.id === momentId}
              />
            ))}
            <FlowAddMoment
              onClick={() =>
                momentHandling.addMomentToStep({
                  ...flowModel.points.point.moments.moment.example,
                  id: Date.now().toFixed().toString(),
                })
              }
            />
          </FlowTimeline>
        </FlowControllerCenter>
        <FlowControllerBottomRow>
          <FlowControllerSteps>
            {steps.map((step) => (
              <FlowStep
                active={stepId === step.id}
                step={step}
                onClick={() => {
                  stepHandling.goToStep(step);
                }}
              />
            ))}
          </FlowControllerSteps>
          <FlowStepsAdd
            onClick={() => {
              stepHandling.addStep({
                ...processModel.process.steps.step.example,
                id: Date.now().toFixed().toString(),
              });
            }}
          />
        </FlowControllerBottomRow>
      </FlowController>
      <Sidebar/>
    </FlowWrapper>
  );
}
