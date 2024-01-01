"use client";

import FlowController from "./flow-epic/main";
import FlowControllerCenter from "./flow-epic/center/main";
import FlowControllerBottomRow from "./flow-epic/bottom/main";
import FlowConstellation from "./flow-epic/bottom/constellations/item/main";
import FlowControllerConstellationRow from "./flow-epic/bottom/constellations/main";
import FlowSidebar from "./flow-epic/sidebar/main";
import FlowConstellationAdd from "./flow-epic/bottom/add/main";
import { useState } from "react";
import {
  ProcessStepObj,
  defaultRegion,
  defaultRegions,
} from "../model/main";
import FlowWrapper from "./flow-epic/wrapper/main";
import FlowSidebarHeaderTitle from "./flow-epic/sidebar/header/title/main";
import FlowSidebarButtonRow from "./flow-epic/sidebar/header/button-row/main";
import TopRowAddButton from "./flow-epic/sidebar/header/button-row/button/add/main";
import TopRowSearchButton from "./flow-epic/sidebar/header/button-row/button/search/main";
import FlowSidebarElements from "./flow-epic/sidebar/elements/main";
import FlowSnapshot from "./flow-epic/sidebar/elements/element/main";
import FlowHeader from "./flow-epic/sidebar/header/main";
import FlowLoomButton from "./flow-epic/sidebar/header/button-row/button/loom/main";
import FlowTimelinePoint from "./flow-epic/center/timeline/point/main";
import FlowTimelineView from "./flow-epic/center/timeline/main";
import { flowModel } from "./model/main";
import { FlowMomentObj } from "./model/point/moment/main";

export default function Page() {
  const [flowMoments, changeFlowMoments] =
    useState<FlowMomentObj[]>(flowModel.point.timeline.example);
  const [constellations, changeConstellations] = useState<
    ProcessStepObj[]
  >(defaultRegions);
  const [flowSnapshots, changeFlowSnapshots] = useState(flowModel.context.gallery.example);

  return (
    <FlowWrapper>
      <FlowController>
        <FlowControllerCenter>
          <FlowTimelineView>
            {flowMoments.map((flowMoment) => (
              <FlowTimelinePoint flowMoment={flowMoment} />
            ))}
          </FlowTimelineView>
        </FlowControllerCenter>
        <FlowControllerBottomRow>
          <FlowControllerConstellationRow>
            {constellations.map((constellation) => (
              <FlowConstellation
                constellation={constellation}
                onClick={() => {}}
              />
            ))}
          </FlowControllerConstellationRow>
          <FlowConstellationAdd
            onClick={() =>
              changeConstellations((prev) => [
                ...prev,
                defaultRegion,
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
                changeFlowSnapshots((prev) => [...prev, flowModel.context.gallery.snapshot.example])
              }
            />
            <TopRowSearchButton />
            <FlowLoomButton />
          </FlowSidebarButtonRow>
        </FlowHeader>
        <FlowSidebarElements>
          {flowSnapshots.map((snapshot) => (
            <FlowSnapshot src={snapshot.src} />
          ))}
        </FlowSidebarElements>
      </FlowSidebar>
    </FlowWrapper>
  );
}
