"use client";

import SeaController from "./common/controller/main";
import SeaPointsContainer from "./common/controller/points/main";
import SeaPoint from "./common/controller/points/point/main";
import SeaDivider from "./common/controller/story/divider/main";
import SeaStoryContainer from "./common/controller/story/main";
import StoryRow from "./common/controller/story/row/main";
import SeaGuideLink from "./common/guide/body/link/main";
import SeaGuideBody from "./common/guide/body/main";
import SeaGuideController from "./common/guide/main";
import SeaGuideWrapper from "./common/guide/wrapper/main";

export default function SeaPage() {
  return (
    <SeaGuideWrapper>
      <SeaController>
        <SeaStoryContainer>
          <StoryRow />
        </SeaStoryContainer>
        <SeaPointsContainer>
          <SeaPoint>Test</SeaPoint>
          <SeaDivider/>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
        </SeaPointsContainer>
      </SeaController>
      <SeaGuideController>
        <SeaGuideBody>
          <SeaGuideLink>STORY</SeaGuideLink>
          <SeaGuideLink>SHARE</SeaGuideLink>
          <SeaGuideLink>PUBLISH</SeaGuideLink>
        </SeaGuideBody>
      </SeaGuideController>
    </SeaGuideWrapper>
  );
}
