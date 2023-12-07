"use client";

import LowerController from "./common/controller/lower/main";
import ProgressColumn from "./common/controller/lower/progress-col/main";
import StackRow from "./common/controller/lower/stack-row/main";
import FlowController from "./common/controller/main";
import FlowAdd from "./common/controller/upper/add/main";
import InspirationRow from "./common/controller/upper/inspiration-row/main";
import UpperController from "./common/controller/upper/main";
import FlowPolaroid from "./common/polaroid/main";
import StickyStack from "./common/stack/main";

export default function ApolloFlow() {
  return (
    <FlowController>
      <UpperController>
        <InspirationRow>
          <FlowPolaroid />
          <FlowPolaroid />
          <FlowPolaroid />
          <FlowPolaroid />
          <FlowPolaroid />
          <FlowPolaroid />
        </InspirationRow>
        <FlowAdd/>
      </UpperController>
      <LowerController>
        <StackRow>
          <StickyStack />
          <StickyStack />
          <StickyStack />
          <StickyStack />
          <StickyStack />
          <StickyStack />
          <StickyStack />
        </StackRow>
        <ProgressColumn>
          <FlowPolaroid />
          <FlowPolaroid />
          <FlowPolaroid />
          <FlowPolaroid />
          <FlowPolaroid />
          <FlowPolaroid />
          <FlowPolaroid />
          <FlowPolaroid />
        </ProgressColumn>
      </LowerController>
    </FlowController>
  );
}
