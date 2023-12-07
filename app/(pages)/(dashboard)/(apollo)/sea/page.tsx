"use client";

import SeaPoints from "./common/points/main";
import SeaPoint from "./common/points/point/main";
import StoryDivider from "./common/story/divider/main";
import StoryContainer from "./common/story/main";
import StoryRow from "./common/story/row/main";

export default function ApolloLaunch() {
  return (
    <div className="flex flex-row">
      <StoryContainer>
        <StoryRow />
      </StoryContainer>
      <SeaPoints>
        <SeaPoint>Test</SeaPoint>
        <StoryDivider/>
        <SeaPoint>Test</SeaPoint>
        <SeaPoint>Test</SeaPoint>
        <SeaPoint>Test</SeaPoint>
        <SeaPoint>Test</SeaPoint>
      </SeaPoints>
    </div>
  );
}
