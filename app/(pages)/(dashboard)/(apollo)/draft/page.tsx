"use client";

import DashboardGuideContainer from "../../(common)/dashboard/content/guide/container/main";
import DashboardGuideWrapper from "../../(common)/dashboard/content/guide/main";
import DraftConstellation from "./common/constellation/main";
import DraftGuide from "./common/controller/guide/main";
import LeftContainer from "./common/controller/left/main";
import ControllerContainer from "./common/controller/main";
import ConstellationIndicator from "./common/controller/right/constellation-space/indicator/main";
import ConstellationSpace from "./common/controller/right/constellation-space/main";
import RightContainer from "./common/controller/right/main";
import DraftStoreRow from "./common/controller/right/store-row/main";

export default function ApolloDraft() {
  return (
    <div className="flex flex-row">
      <ControllerContainer>
        <LeftContainer />
        <RightContainer>
          <DraftStoreRow />
          <ConstellationSpace>
            <DraftConstellation />
            <ConstellationIndicator/>
          </ConstellationSpace>
        </RightContainer>
      </ControllerContainer>
      <DraftGuide/>
    </div>
  );
}
