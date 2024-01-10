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
import { FlowViewProps } from "./page";
import { flowTable } from "@/(pages)/(cosmos)/tables/flow/table";
import { spaceTable } from "@/(pages)/(cosmos)/tables/space/table";

export function FlowView({
  sessionId: momentId,
  chapterId: stepId,
  sessions: moments,
  chapters: steps,
  sessionHandler: momentHandling,
  chapterHandler: stepHandling,
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
                  ...flowTable.session.example,
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
                  stepHandling.goToChapter(step);
                }}
              />
            ))}
          </FlowControllerSteps>
          <FlowStepsAdd
            onClick={() => {
              stepHandling.addChapter({
                ...spaceTable.chapter.example,
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
