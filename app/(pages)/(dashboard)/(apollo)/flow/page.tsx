"use client";

import FlowBottomContainer from "./common/controller/bottom-container/main";
import FlowProgressColumn from "./common/controller/bottom-container/progress-col/main";
import FlowStackRow from "./common/controller/bottom-container/stack-row/main";
import FlowController from "./common/controller/main";
import FlowAdd from "./common/controller/top-container/add/main";
import FlowInspireRow from "./common/controller/top-container/inspire-row/main";
import FlowTopContainer from "./common/controller/top-container/main";
import FlowPolaroid from "./common/polaroid/main";
import FlowStickyStack from "./common/sticky-stack/main";

export default function ApolloFlow() {
  return (
    <FlowController>
      <FlowTopContainer>
        <FlowInspireRow>
          <FlowPolaroid />
          <FlowPolaroid />
          <FlowPolaroid />
          <FlowPolaroid />
          <FlowPolaroid />
          <FlowPolaroid />
        </FlowInspireRow>
        <FlowAdd/>
      </FlowTopContainer>
      <FlowBottomContainer>
        <FlowStackRow>
          <FlowStickyStack />
          <FlowStickyStack />
          <FlowStickyStack />
          <FlowStickyStack />
          <FlowStickyStack />
          <FlowStickyStack />
          <FlowStickyStack />
        </FlowStackRow>
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
      </FlowBottomContainer>
    </FlowController>
  );
}
