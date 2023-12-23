"use client";

import Layer from "@/(pages)/(common)/layer/main";
import SeaController from "./(common)/controller/main";
import SeaPointsContainer from "./(common)/controller/points/main";
import SeaPoint from "./(common)/controller/points/point/main";
import SeaHorizontalDivider from "./(common)/controller/story/divider/horizontal/main";
import SeaStoryContainer from "./(common)/controller/story/main";
import StoryView from "./(common)/controller/story/view/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export default function Page() {
  return (
    <Layer
      sizeStyle="h-full flex-grow"
      containerStyle={containerStyles["row"]}
      backgroundStyle={backgroundStyles["glass-5"]}
    >
      <Layer
        sizeStyle="h-full flex-grow"
        containerStyle={containerStyles["col"]}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <SeaStoryContainer></SeaStoryContainer>
        </div>
        <Layer
          sizeStyle="h-[80px] w-full"
          containerStyle={containerStyles["row-center"]}
        >
          <StoryView />
        </Layer>
      </Layer>
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
    </Layer>
  );
}
