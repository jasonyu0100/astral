"use client";

import { DraftController } from "./draft-epic/main";
import { DraftCenter } from "./draft-epic/center/main";
import { DraftChapter } from "./draft-epic/bottom/chapters/chapter/main";
import { DraftChapters } from "./draft-epic/bottom/chapters/main";
import { Sidebar } from "./draft-epic/sidebar/main";
import { DraftControllerBottomRow } from "./draft-epic/bottom/main";
import { DraftStepsAdd } from "./draft-epic/bottom/add/main";
import { useRef } from "react";
import { DraftWrapper } from "./draft-epic/wrapper/main";
import { DraftViewProps } from "./page";
import { motion } from "framer-motion";
import { DraftConstellation } from "./draft-epic/center/constellation/main";
import { DraftLinks } from "./draft-epic/center/constellation/stars/links/main";
import { DraftStar } from "./draft-epic/center/constellation/stars/star/main";
import { spaceTable } from "@/(pages)/(cosmos)/tables/space/table";
import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { DraftCenterHeader } from "./draft-epic/center/header/main";
import { DraftHeaderList } from "./draft-epic/center/header/list/main";
import DraftHeaderTitle from "./draft-epic/center/header/title/main";
import { DraftHeaderAdd } from "./draft-epic/center/header/add/main";

export function DraftView({
  chapterId,
  chapters,
  stars,
  starHandling,
  chapterHandling: stepHandling,
}: DraftViewProps) {
  const constraintsRef = useRef(null);
  const chapter = chapters.filter((chapter) => chapter.id === chapterId).at(0);
  // const chapter = chapters.filter((chapter) => chapter.id === chapterId).at(0);

  return (
    <DraftWrapper>
      <DraftController>
        <DraftCenter>
          <DraftCenterHeader>
            <div className="flex flex-row w-1/3">
              <DraftHeaderList />
            </div>
            <div className="flex flex-row justify-center w-1/3">
              <DraftHeaderTitle>Constellation</DraftHeaderTitle>
            </div>
            <div className="flex flex-row justify-end w-1/3">
              <DraftHeaderAdd />
            </div>
          </DraftCenterHeader>
          <div className="w-full" style={{ height: "100%" }}>
            <DraftConstellation>
              <DraftLinks stars={stars} />
              <motion.div
                className="absolute top-0 left- 0 w-full h-full"
                ref={constraintsRef}
              >
                {stars.map((star, i) => (
                  <DraftStar
                    star={star}
                    constraintsRef={constraintsRef}
                    updateStar={(data) => starHandling.updateStar(i, data)}
                  />
                ))}
              </motion.div>
            </DraftConstellation>
          </div>
        </DraftCenter>
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
        {/* <DraftControllerBottomRow>
          <DraftChapters>
            {chapters.map((chapter) => (
              <DraftChapter
                chapter={chapter}
                active={chapter.id === chapterId}
                onClick={() => stepHandling.goToChapter(chapter)}
              />
            ))}
          </DraftChapters>
          <DraftStepsAdd
            onClick={() =>
              stepHandling.addChapter({
                ...spaceTable.chapter.example,
                id: Date.now().toFixed().toString(),
              })
            }
          />
        </DraftControllerBottomRow> */}
      </DraftController>
      <Sidebar />
    </DraftWrapper>
  );
}
