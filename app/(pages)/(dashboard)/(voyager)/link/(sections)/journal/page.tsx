"use client";
import LinkFeed from "../../feed/main";
import StoryRecordLog from "../../feed/record/log/main";
import StoryRecord from "../../feed/record/main";
import { useState } from "react";
import LinkFeedSidebar from "../../feed/sidebar/main";
import LinkFeedSidebarSection from "../../feed/sidebar/section/main";
import LinkFeedSidebarEntry from "../../feed/sidebar/section/entry/main";
import LinkFeedWrapper from "../../feed/wrapper/main";

export default function Page() {
  const [sidebarActive, changeSidebarActive] = useState(true);
  return (
    <>
      <LinkFeedWrapper>
        <LinkFeed>
          <StoryRecord>
            <StoryRecordLog></StoryRecordLog>
            <StoryRecordLog></StoryRecordLog>
          </StoryRecord>
        </LinkFeed>
        {sidebarActive && (
          <LinkFeedSidebar>
            <LinkFeedSidebarSection>
              <LinkFeedSidebarEntry />
              <LinkFeedSidebarEntry />
              <LinkFeedSidebarEntry />
            </LinkFeedSidebarSection>
            <LinkFeedSidebarSection>
              <LinkFeedSidebarEntry />
              <LinkFeedSidebarEntry />
              <LinkFeedSidebarEntry />
            </LinkFeedSidebarSection>
          </LinkFeedSidebar>
        )}
      </LinkFeedWrapper>
    </>
  );
}
