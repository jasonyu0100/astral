"use client";

import { FlowController } from "./flow-epic/main";
import { FlowControllerCenter } from "./flow-epic/center/main";
import { FlowControllerBottomRow } from "./flow-epic/bottom/main";
import { FlowChapter } from "./flow-epic/bottom/chapters/chapter/main";
import { FlowChapters } from "./flow-epic/bottom/chapters/main";
import { Sidebar } from "./flow-epic/sidebar/main";
import { FlowStepsAdd } from "./flow-epic/bottom/add/main";
import { FlowWrapper } from "./flow-epic/wrapper/main";
import { FlowSession } from "./flow-epic/center/sessions/session/main";
import { FlowSessions } from "./flow-epic/center/sessions/main";
import { FlowAddSession } from "./flow-epic/center/sessions/add/main";
import { FlowViewProps } from "./page";
import { flowTable } from "@/(pages)/(cosmos)/tables/flow/table";
import { spaceTable } from "@/(pages)/(cosmos)/tables/space/table";

export function FlowView({
  sessionId,
  chapterId,
  sessions,
  chapters,
  sessionHandler,
  chapterHandler,
}: FlowViewProps) {
  return (
    <FlowWrapper>
      <FlowController>
        <FlowControllerCenter>
          <FlowSessions>
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
          </FlowSessions>
        </FlowControllerCenter>
        <FlowControllerBottomRow>
          <FlowChapters>
            {chapters.map((chapter) => (
              <FlowChapter
                active={chapterId === chapter.id}
                chapter={chapter}
                onClick={() => {
                  chapterHandler.goToChapter(chapter);
                }}
              />
            ))}
          </FlowChapters>
          <FlowStepsAdd
            onClick={() => {
              chapterHandler.addChapter({
                ...spaceTable.chapter.example,
                id: Date.now().toFixed().toString(),
              });
            }}
          />
        </FlowControllerBottomRow>
      </FlowController>
      <Sidebar/>
    </FlowWrapper>
  );
}
