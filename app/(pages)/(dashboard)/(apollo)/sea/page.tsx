"use client";

import SeaController from "./common/controller/main";
import SeaPointsContainer from "./common/controller/points/main";
import SeaPoint from "./common/controller/points/point/main";
import SeaDivider from "./common/controller/story/divider/main";
import SeaStoryContainer from "./common/controller/story/main";
import StoryRow from "./common/controller/story/row/main";

export default function ApolloLaunch() {
  return (
    <SeaController>
      <SeaStoryContainer>
        <StoryRow />
      </SeaStoryContainer>
      <SeaPointsContainer>
        <SeaPoint>Test</SeaPoint>
        <SeaPoint>Test</SeaPoint>
        <SeaPoint>Test</SeaPoint>
        <SeaPoint>Test</SeaPoint>
        <SeaPoint>Test</SeaPoint>
        <SeaPoint>Test</SeaPoint>
        <SeaPoint>Test</SeaPoint>
      </SeaPointsContainer>
    </SeaController>
  );
}
