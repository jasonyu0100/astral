"use client";

import { FlowController } from "./flow-epic/main";
import { FlowControllerCenter } from "./flow-epic/center/main";
import { Sidebar } from "./flow-epic/sidebar/main";
import { FlowWrapper } from "./flow-epic/wrapper/main";
import { FlowViewProps } from "./page";
import { spaceTable } from "@/(pages)/(cosmos)/tables/space/table";
import { Layer } from "@/(pages)/(common)/layer/main";
import { containerStyles, borderStyles } from "@/(pages)/(common)/styles/data";
import { StoryRecord } from "./flow-epic/record/main";
import { StoryRecordLog } from "./flow-epic/record/log/main";
import { FlowChapters } from "./flow-epic/chapters/main";
import { FlowChaptersLeft } from "./flow-epic/chapters/left/main";
import { FlowChaptersRight } from "./flow-epic/chapters/right/main";
import FlowChaptersAdd from "./flow-epic/chapters/row/add/main";
import { FlowChaptersItem } from "./flow-epic/chapters/row/item/main";
import { FlowChaptersRow } from "./flow-epic/chapters/row/main";
import { FlowHeaderAdd } from "./flow-epic/center/header/add/main";
import { FlowHeaderList } from "./flow-epic/center/header/list/main";
import { FlowCenterHeader } from "./flow-epic/center/header/main";
import FlowHeaderTitle from "./flow-epic/center/header/title/main";

export function FlowView({
  sessionId,
  chapterId,
  sessions,
  chapters,
  sessionHandler,
  chapterHandler,
}: FlowViewProps) {
  const session = sessions.filter((session) => session.id === sessionId).at(0);
  const chapter = chapters.filter((chapter) => chapter.id === chapterId).at(0);

  return (
    <FlowWrapper>
      <FlowController>
        <FlowControllerCenter>
          <FlowCenterHeader>
            <div className="flex flex-row w-1/3">
              <FlowHeaderList />
            </div>
            <div className="flex flex-row justify-center w-1/3">
              <FlowHeaderTitle>Constellation</FlowHeaderTitle>
            </div>
            <div className="flex flex-row justify-end w-1/3">
              <FlowHeaderAdd />
            </div>
          </FlowCenterHeader>
          <StoryRecord>
            {sessions.map((flowMoment, index) => (
              <StoryRecordLog></StoryRecordLog>
            ))}
            <StoryRecordLog></StoryRecordLog>
          </StoryRecord>

          {/* <FlowSessions>
            {sessions.map((flowMoment, index) => (
              <FlowSession
                session={flowMoment}
                index={index}
                active={flowMoment.id === sessionId}
              />
            ))}
            <FlowAddSession
              onClick={() =>
                sessionHandler.addSessionToStep({
                  ...flowTable.session.example,
                  id: Date.now().toFixed().toString(),
                })
              }
            />
          </FlowSessions> */}
        </FlowControllerCenter>{" "}
        <FlowChapters>
          <FlowChaptersLeft />
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
          <FlowChaptersRight />
        </FlowChapters>
      </FlowController>
      <Sidebar />
    </FlowWrapper>
  );
}
