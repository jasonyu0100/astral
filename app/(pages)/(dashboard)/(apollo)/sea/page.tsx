"use client";

import SeaController from "./sea-epic/main";
import SeaSidebar from "./sea-epic/sidebar/main";
import SeaPoint from "./sea-epic/sidebar/point/main";
import SeaStory from "./sea-epic/story/main";
import StoryAuthorAbout from "./sea-epic/story/author-about/main";
import SeaWrapper from "./sea-epic/wrapper/main";

export default function Page() {
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
        <SeaPoint>Test</SeaPoint>
        <SeaPoint>Test</SeaPoint>
        <SeaPoint>Test</SeaPoint>
        <SeaPoint>Test</SeaPoint>
        <SeaPoint>Test</SeaPoint>
        <SeaPoint>Test</SeaPoint>
        <SeaPoint>Test</SeaPoint>
      </SeaSidebar>
    </SeaWrapper>
  );
}
