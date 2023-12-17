"use client";
import StoryController from "../../common/controller/main";
import StoryRecordLog from "../../common/controller/record/log/main";
import StoryRecord from "../../common/controller/record/main";
import StoryGuideLink from "../../common/guide/body/link/main";
import StoryGuideBody from "../../common/guide/body/main";
import StoryGuideController from "../../common/guide/main";
import StoryGuideWrapper from "../../common/guide/wrapper/main";

export default function StoreJournalPage() {
  return (
    <>
      <StoryGuideWrapper>
        <StoryController>
          <StoryRecord>
            <StoryRecordLog></StoryRecordLog>
            <StoryRecordLog></StoryRecordLog>
          </StoryRecord>
        </StoryController>
        <StoryGuideController>
          <StoryGuideBody>
            <StoryGuideLink>Day 10</StoryGuideLink>
            <StoryGuideLink>Day 5</StoryGuideLink>
            <StoryGuideLink>Day 0</StoryGuideLink>
          </StoryGuideBody>
        </StoryGuideController>
      </StoryGuideWrapper>
    </>
  );
}
