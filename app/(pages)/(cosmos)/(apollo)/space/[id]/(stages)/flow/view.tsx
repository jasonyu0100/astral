"use client";

import { FlowMain } from "./flow-epic/main";
import { FlowCenter } from "./flow-epic/center/main";
import { FlowSidebar } from "./flow-epic/sidebar/main";
import { FlowWrapper } from "./flow-epic/wrapper/main";
import { FlowViewProps } from "./page";
import { chapterTable, spaceTable } from "@/tables/space/table";
import { FlowMoments } from "./flow-epic/center/moments/main";
import { FlowMoment } from "./flow-epic/center/moments/moment/main";
import { FlowChapters } from "./flow-epic/chapters/main";
import { FlowChaptersLeftButton } from "./flow-epic/chapters/left/main";
import { FlowChaptersRightButton } from "./flow-epic/chapters/right/main";
import FlowChaptersAdd from "./flow-epic/chapters/row/add/main";
import { FlowChaptersItem } from "./flow-epic/chapters/row/item/main";
import { FlowChaptersRow } from "./flow-epic/chapters/row/main";
import { FlowHeaderAddButton } from "./flow-epic/center/header/add/main";
import { FlowHeaderListButton } from "./flow-epic/center/header/list/main";
import { FlowHeader } from "./flow-epic/center/header/main";
import FlowHeaderTitle from "./flow-epic/center/header/title/main";
import { flowTable, momentTable } from "@/tables/flow/table";
import { FlowSidebarColumn } from "./flow-epic/sidebar/column/main";
import { FlowSidebarEntry } from "./flow-epic/sidebar/column/section/entry/main";
import { FlowSidebarSection } from "./flow-epic/sidebar/column/section/main";

export function FlowView({
  momentId,
  moments,
  chapterId,
  chapters,
  chapterHandler,
  momentHandler,
}: FlowViewProps) {
  const moment = moments.filter((moment) => moment.id === momentId).at(0);
  const chapter = chapters.filter((chapter) => chapter.id === chapterId).at(0);
  const headerTitle =
    chapter && moment ? `${chapter.title} - ${moment.title}` : "None";

  return (
    <FlowWrapper>
      <FlowMain>
        <FlowCenter>
          <FlowHeader>
            <div className="flex flex-row w-1/3">
              <FlowHeaderListButton />
            </div>
            <div className="flex flex-row justify-center w-1/3">
              <FlowHeaderTitle>{headerTitle}</FlowHeaderTitle>
            </div>
            <div
              className="flex flex-row justify-end w-1/3"
              onClick={() =>
                momentHandler.addMoment({
                  ...momentTable.example,
                  id: Date.now().toFixed().toString(),
                })
              }
            >
              <FlowHeaderAddButton />
            </div>
          </FlowHeader>
          <FlowMoments>
            {moments.map((moment, index) => (
              <FlowMoment
                moment={moment}
                index={index}
              ></FlowMoment>
            ))}
          </FlowMoments>
        </FlowCenter>
        <FlowChapters>
          <FlowChaptersLeftButton />
          <FlowChaptersRow>
            {chapters.map((chapter) => (
              <FlowChaptersItem
                active={chapter.id === chapterId}
                chapter={chapter}
                onClick={() => chapterHandler.goToChapter(chapter)}
              />
            ))}
            <FlowChaptersAdd
              onClick={() =>
                chapterHandler.addChapter({
                  ...chapterTable.example,
                  id: Date.now().toFixed().toString(),
                })
              }
            />
          </FlowChaptersRow>
          <FlowChaptersRightButton />
        </FlowChapters>
      </FlowMain>
      <FlowSidebar>
        <FlowSidebarColumn>
          <FlowSidebarSection>
            {moments.map((moment) => (
              <FlowSidebarEntry moment={moment} />
            ))}
          </FlowSidebarSection>
        </FlowSidebarColumn>
      </FlowSidebar>
    </FlowWrapper>
  );
}
