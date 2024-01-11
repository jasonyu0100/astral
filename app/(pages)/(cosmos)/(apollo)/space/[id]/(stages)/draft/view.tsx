"use client";

import { DraftMain } from "./draft-epic/main";
import { DraftCenter } from "./draft-epic/center/main";
import { DraftSidebar } from "./draft-epic/sidebar/main";
import { useRef } from "react";
import { DraftWrapper } from "./draft-epic/wrapper/main";
import { DraftViewProps } from "./page";
import { motion } from "framer-motion";
import { DraftConstellation } from "./draft-epic/center/constellation/main";
import { DraftLinks } from "./draft-epic/center/constellation/stars/links/main";
import { DraftStar } from "./draft-epic/center/constellation/stars/star/main";
import { spaceTable } from "@/tables/space/table";
import { DraftHeader } from "./draft-epic/center/header/main";
import { DraftHeaderListButton } from "./draft-epic/center/header/list/main";
import DraftHeaderTitle from "./draft-epic/center/header/title/main";
import { DraftHeaderAddButton } from "./draft-epic/center/header/add/main";
import { DraftChaptersLeftButton } from "./draft-epic/chapters/left/main";
import { DraftChaptersRightButton } from "./draft-epic/chapters/right/main";
import { DraftChaptersRow } from "./draft-epic/chapters/row/main";
import { DraftChaptersItem } from "./draft-epic/chapters/row/item/main";
import DraftChaptersAdd from "./draft-epic/chapters/row/add/main";
import { DraftChapters } from "./draft-epic/chapters/main";
import { draftTable } from "@/tables/draft/table";

export function DraftView({
  constellations,
  constellationId,
  constellationHandler,
  chapterId,
  chapters,
  stars,
  starHandler: starHandling,
  chapterHandler: chapterHandling,
}: DraftViewProps) {
  const constraintsRef = useRef(null);
  const chapter = chapters.filter((chapter) => chapter.id === chapterId).at(0);
  const constellation = constellations
    .filter((constellation) => constellation.id === constellationId)
    .at(0);
  const headerTitle = (chapter && constellation) ? `${chapter.title} - ${constellation.title}` : "None"

  return (
    <DraftWrapper>
      <DraftMain>
          <DraftCenter>
            <DraftHeader>
              <div className="flex flex-row w-1/3">
                <DraftHeaderListButton />
              </div>
              <div className="flex flex-row justify-center w-1/3">
                  <DraftHeaderTitle>
                    {headerTitle}
                  </DraftHeaderTitle>
              </div>
              <div
                className="flex flex-row justify-end w-1/3"
                onClick={() => {
                  constellationHandler.addConstellation(
                    draftTable.constellation.example
                  );
                }}
              >
                <DraftHeaderAddButton />
              </div>
            </DraftHeader>
            <DraftConstellation>
              <DraftLinks stars={stars} />
              <motion.div
                className="absolute top-0 left- 0 w-full h-full"
                ref={constraintsRef}
              >
                {stars.map((star) => (
                  <DraftStar
                    star={star}
                    constraintsRef={constraintsRef}
                    updateStar={(data) => starHandling.updateStar(star.id, data)}
                  />
                ))}
              </motion.div>
            </DraftConstellation>
          </DraftCenter>
        <DraftChapters>
          <DraftChaptersLeftButton onClick={() => chapterHandling.goToPrevChapter()}/>
          <DraftChaptersRow>
            {chapters.map((chapter) => (
              <DraftChaptersItem
                active={chapter.id === chapterId}
                chapter={chapter}
                onClick={() => chapterHandling.goToChapter(chapter)}
              />
            ))}
            <DraftChaptersAdd
              onClick={() =>
                chapterHandling.addChapter({
                  ...spaceTable.chapter.example,
                  id: Date.now().toFixed().toString(),
                })
              }
            />
          </DraftChaptersRow>
          <DraftChaptersRightButton onClick={() => chapterHandling.goToNextChapter()}/>
        </DraftChapters>
      </DraftMain>
      <DraftSidebar />
    </DraftWrapper>
  );
}
