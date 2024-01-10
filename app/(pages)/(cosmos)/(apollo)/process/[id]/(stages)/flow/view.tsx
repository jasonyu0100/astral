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
  sessionId,
  chapterId,
  sessions,
  chapters,
  sessionHandler,
  chapterHandler,
}: FlowViewProps) {
  return (
    <FlowWrapper>
      <FlowController>
        <FlowControllerCenter>
          <FlowTimeline>
            {sessions.map((flowMoment, index) => (
              <FlowMoment
                flowMoment={flowMoment}
                index={index}
                active={flowMoment.id === sessionId}
              />
            ))}
            <FlowAddMoment
              onClick={() =>
                sessionHandler.addSessionToStep({
                  ...flowTable.session.example,
                  id: Date.now().toFixed().toString(),
                })
              }
            />
          </FlowTimeline>
        </FlowControllerCenter>
        <FlowControllerBottomRow>
          <FlowControllerSteps>
            {chapters.map((step) => (
              <FlowStep
                active={chapterId === step.id}
                step={step}
                onClick={() => {
                  chapterHandler.goToChapter(step);
                }}
              />
            ))}
          </FlowControllerSteps>
          <FlowStepsAdd
            onClick={() => {
              chapterHandler.addChapter({
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
