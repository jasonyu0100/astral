"use client";

import FlowRightContainer from "./common/controller/right/main";
import FlowProgressColumn from "./common/controller/right/progress-col/main";
import FlowStackRow from "./common/controller/left/stack-row/main";
import FlowController from "./common/controller/main";
import FlowAdd from "./common/controller/right/add/main";
import FlowInspireRow from "./common/controller/left/inspire-row/main";
import FlowLeftContainer from "./common/controller/left/main";
import FlowPolaroid from "./common/polaroid/main";
import FlowStickyStack from "./common/sticky-stack/main";
import FlowGuideController from "./guide/main";
import FlowGuideBody from "./guide/body/main";
import FlowGuideWrapper from "./guide/wrapper/main";
import FlowGuideLink from "./guide/body/link/main";

export default function ApolloFlow() {
  return (
    <FlowGuideWrapper>
      <FlowController>
        <FlowLeftContainer>
          <FlowInspireRow>
            <FlowPolaroid />
            <FlowPolaroid />
            <FlowPolaroid />
            <FlowPolaroid />
            <FlowPolaroid />
            <FlowPolaroid />
          </FlowInspireRow>
          <FlowStackRow>
            <FlowStickyStack />
            <FlowStickyStack />
            <FlowStickyStack />
            <FlowStickyStack />
            <FlowStickyStack />
            <FlowStickyStack />
            <FlowStickyStack />
          </FlowStackRow>
        </FlowLeftContainer>
        <FlowRightContainer>
          <FlowAdd />
          <FlowProgressColumn>
            <FlowPolaroid />
            <FlowPolaroid />
            <FlowPolaroid />
            <FlowPolaroid />
            <FlowPolaroid />
            <FlowPolaroid />
            <FlowPolaroid />
            <FlowPolaroid />
          </FlowProgressColumn>
        </FlowRightContainer>
      </FlowController>
      <FlowGuideController>
        <FlowGuideBody>
          <FlowGuideLink>Melody</FlowGuideLink>
          <FlowGuideLink>Harmonic</FlowGuideLink>
          <FlowGuideLink>Beat</FlowGuideLink>
          <FlowGuideLink>Arrangement</FlowGuideLink>
        </FlowGuideBody>
      </FlowGuideController>
    </FlowGuideWrapper>
  );
}
