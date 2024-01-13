"use client";
import { FeedMain } from "../../feed-epic/main";
import { FeedPost } from "../../feed-epic/posts/post/main";
import { FeedPosts } from "../../feed-epic/posts/main";
import { FeedSidebar } from "../../feed-epic/sidebar/main";
import { FeedSidebarSection } from "../../feed-epic/sidebar/column/section/main";
import { FeedSidebarEntry } from "../../feed-epic/sidebar/column/section/entry/main";
import { FeedWrapper } from "../../feed-epic/wrapper/main";
import { FeedSidebarColumn } from "../../feed-epic/sidebar/column/main";
import isAuth from "@/utils/isAuth";
import { useMoment } from "@/(pages)/(cosmos)/(apollo)/space/[id]/handler/moments/main";

function Page() {
  const { momentId, moments, _momentHandler } = useMoment();

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

export default isAuth(Page);
