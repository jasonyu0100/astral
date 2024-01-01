"use client";

import FlowController from "./flow-epic/main";
import FlowControllerCenter from "./flow-epic/center/main";
import FlowControllerBottomRow from "./flow-epic/bottom/main";
import FlowStep from "./flow-epic/bottom/steps/step/main";
import FlowControllerSteps from "./flow-epic/bottom/steps/main";
import FlowSidebar from "./flow-epic/sidebar/main";
import FlowConstellationAdd from "./flow-epic/bottom/add/main";
import { useState } from "react";
import FlowWrapper from "./flow-epic/wrapper/main";
import FlowSidebarHeaderTitle from "./flow-epic/sidebar/header/title/main";
import FlowSidebarButtonRow from "./flow-epic/sidebar/header/button-row/main";
import TopRowAddButton from "./flow-epic/sidebar/header/button-row/button/add/main";
import TopRowSearchButton from "./flow-epic/sidebar/header/button-row/button/search/main";
import FlowSidebarElements from "./flow-epic/sidebar/elements/main";
import FlowSnapshot from "./flow-epic/sidebar/elements/element/main";
import FlowHeader from "./flow-epic/sidebar/header/main";
import FlowLoomButton from "./flow-epic/sidebar/header/button-row/button/loom/main";
import FlowTimelineMoment from "./flow-epic/center/timeline/point/main";
import FlowTimeline from "./flow-epic/center/timeline/main";
import { flowModel } from "./model/main";
import { FlowMomentObj } from "./model/point/moment/main";
import { ProcessStepObj } from "../model/process/step/main";
import { processModel } from "../model/main";

export default function Page() {
  const [moments, changeMoments] =
    useState<FlowMomentObj[]>(flowModel.points.point.timeline.example);
  const [steps, changeSteps] = useState<
    ProcessStepObj[]
  >(processModel.process.steps.example);
  const [snapshots, changeSnapshots] = useState(flowModel.context.gallery.example);

  return (
    <FlowWrapper>
      <FlowController>
        <FlowControllerCenter>
          <FlowTimeline>
            {moments.map((flowMoment) => (
              <FlowTimelineMoment flowMoment={flowMoment} />
            ))}
          </FlowTimeline>
        </FlowControllerCenter>
        <FlowControllerBottomRow>
          <FlowControllerSteps>
            {steps.map((step) => (
              <FlowStep
                step={step}
                onClick={() => {}}
              />
            ))}
          </FlowControllerSteps>
          <FlowConstellationAdd
            onClick={() =>
              changeSteps((prev) => [
                ...prev,
                processModel.process.steps.step.example,
              ])
            }
          />
        </FlowControllerBottomRow>
      </FlowController>
      <FlowSidebar>
        <FlowHeader>
          <FlowSidebarHeaderTitle>Snapshots</FlowSidebarHeaderTitle>
          <FlowSidebarButtonRow>
            <TopRowAddButton
              onClick={() =>
                changeSnapshots((prev) => [...prev, flowModel.context.gallery.snapshot.example])
              }
            />
            <TopRowSearchButton />
            <FlowLoomButton />
          </FlowSidebarButtonRow>
        </FlowHeader>
        <FlowSidebarElements>
          {snapshots.map((snapshot) => (
            <FlowSnapshot src={snapshot.src} />
          ))}
        </FlowSidebarElements>
      </FlowSidebar>
    </FlowWrapper>
  );
}
