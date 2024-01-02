"use client";
import { LinkFeed } from "../../feed-epic/main";
import { StoryRecordLog } from "../../feed-epic/record/log/main";
import { StoryRecord } from "../../feed-epic/record/main";
import { useState } from "react";
import { LinkFeedSidebar } from "../../feed-epic/sidebar/main";
import { LinkFeedSidebarSection } from "../../feed-epic/sidebar/section/main";
import { LinkFeedSidebarEntry } from "../../feed-epic/sidebar/section/entry/main";
import { LinkFeedWrapper } from "../../feed-epic/wrapper/main";
import { LinkRecord } from "../../feed-epic/sidebar/record/main";

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
            <LinkRecord>
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
            </LinkRecord>
          </LinkFeedSidebar>
        )}
      </LinkFeedWrapper>
    </>
  );
}
