import { useState } from "react";
import { FeedMain } from "./feed-epic/main";
import { FeedPosts } from "./feed-epic/posts/main";
import { FeedPost } from "./feed-epic/posts/post/main";
import { FeedSidebarColumn } from "./feed-epic/sidebar/column/main";
import { FeedSidebarEntry } from "./feed-epic/sidebar/column/section/entry/main";
import { FeedSidebarSection } from "./feed-epic/sidebar/column/section/main";
import { FeedSidebar } from "./feed-epic/sidebar/main";
import { FeedWrapper } from "./feed-epic/wrapper/main";
import { flowTable } from "@/tables/flow/table";

export function FeedView() {
  const [moments, changeMoments] = useState(flowTable.session.moment.examples);
  return (
    <>
      <FeedWrapper>
        <FeedMain>
          <FeedPosts>
            {moments.map((moment) => (
              <FeedPost moment={moment}></FeedPost>
            ))}
          </FeedPosts>
        </FeedMain>
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
      </FeedWrapper>
    </>
  );
}
