import { Layer } from "@/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(common)/styles/data";
import React, { useContext } from "react";
import { FeedSidebarColumn } from "./column/main";
import { FeedSidebarEntry } from "./column/section/entry/main";
import { FeedSidebarSection } from "./column/section/main";
import { FeedJournalContext } from "../(stages)/journal/page";

export function FeedSidebar() {
  const { moments } = useContext(FeedJournalContext);
  
  return (
    <Layer
      displayName={FeedSidebar.name}
      sizeStyle="max-w-[500px] min-w-[250px] w-1/4 h-full"
      className={`${containerStyles["col"]} py-[1rem] px-[1rem]`}
      backgroundStyle={backgroundStyles["glass-10"]}
    >
      <FeedSidebarColumn>
        <FeedSidebarSection>
          {moments.map((moment) => (
            <FeedSidebarEntry moment={moment} />
          ))}
        </FeedSidebarSection>
      </FeedSidebarColumn>
    </Layer>
  );
}
