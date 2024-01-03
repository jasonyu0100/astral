"use client";

import { SeaController } from "./sea-epic/main";
import { SeaSidebar } from "./sea-epic/sidebar/main";
import { SeaPoint } from "./sea-epic/sidebar/point/main";
import { SeaStory } from "./sea-epic/story/main";
import { StoryAuthorAbout } from "./sea-epic/story/author-about/main";
import { SeaWrapper } from "./sea-epic/wrapper/main";

export function SeaView() {
  return (
    <SeaWrapper>
      <SeaController>
        <SeaStory>
          <div className="w-full h-full relative">
            <StoryAuthorAbout />
          </div>
        </SeaStory>
      </SeaController>
      <SeaSidebar>
        <div className="flex flex-col w-full overflow-auto" style={{height: '100%'}}>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
        </div>
      </SeaSidebar>
    </SeaWrapper>
  );
}
