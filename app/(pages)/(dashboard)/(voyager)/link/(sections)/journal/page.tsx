"use client";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import StoryController from "../../(common)/controller/main";
import StoryRecordLog from "../../(common)/controller/record/log/main";
import StoryRecord from "../../(common)/controller/record/main";
import Layer from "@/(pages)/(common)/layer/main";
import { useState } from "react";

export default function Page() {
  const [navigationActive, changeNavigation] = useState(true);
  return (
    <>
      <Layer
        sizeStyle="h-full flex-grow"
        containerStyle={containerStyles["row"]}
        backgroundStyle={backgroundStyles["glass-5"]}
      >
        <StoryController>
          <StoryRecord>
            <StoryRecordLog></StoryRecordLog>
            <StoryRecordLog></StoryRecordLog>
          </StoryRecord>
        </StoryController>
        {navigationActive && (
          <Layer
            sizeStyle="w-[350px] h-full"
            containerStyle={containerStyles["row"]}
            backgroundStyle={backgroundStyles["glass-5"]}
            borderStyle={borderStyles["border-l"]}
          ></Layer>
        )}
      </Layer>
    </>
  );
}
