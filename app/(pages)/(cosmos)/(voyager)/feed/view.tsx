import { useState } from "react";
import { FeedMain } from "./feed-epic/main";
import { FeedPosts } from "./feed-epic/posts/main";
import { FeedPost } from "./feed-epic/posts/post/main";
import { FeedSidebarColumn } from "./feed-epic/sidebar/column/main";
import { FeedSidebarEntry } from "./feed-epic/sidebar/column/section/entry/main";
import { FeedSidebarSection } from "./feed-epic/sidebar/column/section/main";
import { FeedSidebar } from "./feed-epic/sidebar/main";
import { FeedWrapper } from "./feed-epic/wrapper/main";
import { MomentObj } from "@/tables/flow/moment/main";

interface FeedViewProps {
  moments: MomentObj[];
}

export function FeedView({ moments } : FeedViewProps) {
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
              {moments.map((moment) => (
                <FeedSidebarEntry moment={moment}/>
              ))}
            </FeedSidebarSection>
          </FeedSidebarColumn>
        </FeedSidebar>
      </FeedWrapper>
    </>
  );
}
