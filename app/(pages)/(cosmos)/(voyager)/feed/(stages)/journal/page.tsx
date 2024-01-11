"use client";
import { FeedMain } from "../../feed-epic/main";
import { FeedPost } from "../../feed-epic/posts/post/main";
import { FeedPosts } from "../../feed-epic/posts/main";
import { useState } from "react";
import { FeedSidebar } from "../../feed-epic/sidebar/main";
import { FeedSidebarSection } from "../../feed-epic/sidebar/column/section/main";
import { FeedSidebarEntry } from "../../feed-epic/sidebar/column/section/entry/main";
import { FeedWrapper } from "../../feed-epic/wrapper/main";
import { FeedSidebarColumn } from "../../feed-epic/sidebar/column/main";
import isAuth from "@/utils/isAuth";

function Page() {
  const [sidebarActive, changeSidebarActive] = useState(true);
  return (
    <>
      <FeedWrapper>
        <FeedMain>
          <FeedPosts>
            <FeedPost></FeedPost>
            <FeedPost></FeedPost>
          </FeedPosts>
        </FeedMain>
        {sidebarActive && (
          <FeedSidebar>
            <FeedSidebarColumn>
              <FeedSidebarSection>
                <FeedSidebarEntry />
                <FeedSidebarEntry />
                <FeedSidebarEntry />
              </FeedSidebarSection>
              <FeedSidebarSection>
                <FeedSidebarEntry />
                <FeedSidebarEntry />
                <FeedSidebarEntry />
              </FeedSidebarSection>
            </FeedSidebarColumn>
          </FeedSidebar>
        )}
      </FeedWrapper>
    </>
  );
}

export default isAuth(Page);