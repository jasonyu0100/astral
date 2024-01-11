"use client";

import { FlowMain } from "./flow-epic/main";
import { FlowCenter } from "./flow-epic/center/main";
import { FlowSidebar } from "./flow-epic/sidebar/main";
import { FlowWrapper } from "./flow-epic/wrapper/main";
import { FlowViewProps } from "./page";
import { spaceTable } from "@/tables/space/table";
import { FlowSession } from "./flow-epic/center/session/main";
import { FlowSessionMoment } from "./flow-epic/center/session/moment/main";
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
import { flowTable } from "@/tables/flow/table";

export function FlowView({
  moments,
  sessionId,
  chapterId,
  sessions,
  chapters,
  sessionHandler,
  chapterHandler,
  momentHandler,
}: FlowViewProps) {
  const session = sessions.filter((session) => session.id === sessionId).at(0);
  const chapter = chapters.filter((chapter) => chapter.id === chapterId).at(0);
  const headerTitle =
    chapter && session ? `${chapter.title} - ${session.title}` : "None";

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
                  ...flowTable.session.moment.example,
                  id: Date.now().toFixed().toString(),
                })
              }
            >
              <FlowHeaderAddButton />
            </div>
          </FlowHeader>
          <FlowSession>
            {moments.map((moment, index) => (
              <FlowSessionMoment moment={moment} index={index}></FlowSessionMoment>
            ))}
          </FlowSession>
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
                  ...spaceTable.chapter.example,
                  id: Date.now().toFixed().toString(),
                })
              }
            />
          </FlowChaptersRow>
          <FlowChaptersRightButton />
        </FlowChapters>
      </FlowMain>
      <FlowSidebar />
    </FlowWrapper>
  );
}
