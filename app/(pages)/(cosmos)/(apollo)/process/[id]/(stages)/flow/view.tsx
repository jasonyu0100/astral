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
import { Layer } from "@/(pages)/(common)/layer/main";
import {
  containerStyles,
  borderStyles,
  backgroundStyles,
} from "@/(pages)/(common)/styles/data";
import { StoryRecord } from "./flow-epic/record/main";
import { StoryRecordLog } from "./flow-epic/record/log/main";

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
          <Layer
            sizeStyle="h-[50px] w-full flex-shrink-0"
            containerStyle={containerStyles["row-center"]}
            borderStyle={borderStyles["border-b"]}
            contentStyle="px-[1rem] space-x-[1rem] justify-between"
          >
            <div className="flex flex-row w-1/3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <mask
                  id="mask0_2942_2739"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="31"
                  height="31"
                >
                  <rect
                    x="0.678711"
                    y="0.505127"
                    width="30"
                    height="30"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_2942_2739)">
                  <path
                    d="M11.9287 24.2551V21.7551H26.9287V24.2551H11.9287ZM11.9287 16.7551V14.2551H26.9287V16.7551H11.9287ZM11.9287 9.25513V6.75513H26.9287V9.25513H11.9287ZM6.92871 25.5051C6.24121 25.5051 5.65267 25.2603 5.16309 24.7708C4.6735 24.2812 4.42871 23.6926 4.42871 23.0051C4.42871 22.3176 4.6735 21.7291 5.16309 21.2395C5.65267 20.7499 6.24121 20.5051 6.92871 20.5051C7.61621 20.5051 8.20475 20.7499 8.69434 21.2395C9.18392 21.7291 9.42871 22.3176 9.42871 23.0051C9.42871 23.6926 9.18392 24.2812 8.69434 24.7708C8.20475 25.2603 7.61621 25.5051 6.92871 25.5051ZM6.92871 18.0051C6.24121 18.0051 5.65267 17.7603 5.16309 17.2708C4.6735 16.7812 4.42871 16.1926 4.42871 15.5051C4.42871 14.8176 4.6735 14.2291 5.16309 13.7395C5.65267 13.2499 6.24121 13.0051 6.92871 13.0051C7.61621 13.0051 8.20475 13.2499 8.69434 13.7395C9.18392 14.2291 9.42871 14.8176 9.42871 15.5051C9.42871 16.1926 9.18392 16.7812 8.69434 17.2708C8.20475 17.7603 7.61621 18.0051 6.92871 18.0051ZM6.92871 10.5051C6.24121 10.5051 5.65267 10.2603 5.16309 9.77075C4.6735 9.28117 4.42871 8.69263 4.42871 8.00513C4.42871 7.31763 4.6735 6.72909 5.16309 6.2395C5.65267 5.74992 6.24121 5.50513 6.92871 5.50513C7.61621 5.50513 8.20475 5.74992 8.69434 6.2395C9.18392 6.72909 9.42871 7.31763 9.42871 8.00513C9.42871 8.69263 9.18392 9.28117 8.69434 9.77075C8.20475 10.2603 7.61621 10.5051 6.92871 10.5051Z"
                    fill="#CBD5E1"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-row justify-center w-1/3">
              <div className="text-white text-md font-bold">Idea #1</div>
            </div>
            <div className="flex flex-row justify-end w-1/3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <mask
                  id="mask0_2941_2727"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="30"
                  height="30"
                >
                  <rect width="30" height="30" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2941_2727)">
                  <path
                    d="M13.75 16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75V16.25Z"
                    fill="#CBD5E1"
                  />
                </g>
              </svg>
            </div>
          </Layer>
          <StoryRecord>
            <StoryRecordLog></StoryRecordLog>
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
        <Layer
          sizeStyle="w-full h-[80px]"
          backgroundStyle={backgroundStyles["glass-5"]}
        >
          <div className=" flex flex-row items-center justify-center h-full w-full space-x-[1rem] px-[1rem]">
            <div className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <mask
                  id="mask0_2939_2709"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                >
                  <rect width="40" height="40" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2939_2709)">
                  <path
                    d="M23.3335 30L13.3335 20L23.3335 10L25.6668 12.3333L18.0002 20L25.6668 27.6667L23.3335 30Z"
                    fill="#CBD5E1"
                  />
                </g>
              </svg>
            </div>
            <div className="flex-grow flex flex-row items-center space-x-[3px] overflow-hidden">
              {chapters.map((chapter) => (
                <Layer
                  sizeStyle="w-[200px] h-[40px]"
                  backgroundStyle={backgroundStyles["glass-5"]}
                  borderStyle={borderStyles["rounded-full"]}
                >
                  <div className="w-full h-full justify-center flex items-center">
                    <div className="text-white font-bold">{chapter.name}</div>
                  </div>
                </Layer>
              ))}
              <Layer
                sizeStyle="w-[200px] h-[40px]"
                backgroundStyle={backgroundStyles["glass-5"]}
                borderStyle={borderStyles["rounded-full"]}
              >
                <div className="w-full h-full justify-center flex items-center">
                  <div className="text-white font-bold">Add</div>
                </div>
              </Layer>
            </div>
            <div className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <mask
                  id="mask0_2939_2703"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                >
                  <rect width="40" height="40" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2939_2703)">
                  <path
                    d="M21.0002 20L13.3335 12.3333L15.6668 10L25.6668 20L15.6668 30L13.3335 27.6667L21.0002 20Z"
                    fill="#CBD5E1"
                  />
                </g>
              </svg>
            </div>
          </div>
        </Layer>
        {/* <FlowControllerBottomRow>
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
        </FlowControllerBottomRow> */}
      </FlowController>
      <Sidebar />
    </FlowWrapper>
  );
}
