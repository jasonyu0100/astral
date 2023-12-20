"use client";

import SeaController from "./(common)/controller/main";
import SeaPointsContainer from "./(common)/controller/points/main";
import SeaPoint from "./(common)/controller/points/point/main";
import SeaHorizontalDivider from "./(common)/controller/story/divider/horizontal/main";
import SeaStoryContainer from "./(common)/controller/story/main";
import StoryView from "./(common)/controller/story/view/main";

export default function Page() {
  return (
    <SeaController>
      <div style={{ width: "100%", height: "100%" }}>
        <SeaStoryContainer>
          <StoryView />
        </SeaStoryContainer>
      </div>
      <SeaPointsContainer>
        <SeaPoint>Test</SeaPoint>
        <SeaHorizontalDivider />
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
