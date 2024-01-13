"use client";

import { DraftMain } from "./draft-epic/main";
import { DraftCenter } from "./draft-epic/center/main";
import { DraftSidebar } from "./draft-epic/sidebar/main";
import { useContext, useRef } from "react";
import { DraftWrapper } from "./draft-epic/wrapper/main";
import { DraftContext, DraftViewProps } from "./page";
import { motion } from "framer-motion";
import { DraftConstellation } from "./draft-epic/center/constellation/main";
import { DraftLinks } from "./draft-epic/center/constellation/stars/links/main";
import { DraftStar } from "./draft-epic/center/constellation/stars/star/main";
import { spaceTable } from "@/tables/space/table";
import { DraftHeader } from "./draft-epic/center/header/main";
import { DraftChaptersLeftButton } from "./draft-epic/chapters/left/main";
import { DraftChaptersRightButton } from "./draft-epic/chapters/right/main";
import { DraftChaptersRow } from "./draft-epic/chapters/row/main";
import { DraftChaptersItem } from "./draft-epic/chapters/row/item/main";
import DraftChaptersAdd from "./draft-epic/chapters/row/add/main";
import { DraftChapters } from "./draft-epic/chapters/main";
import { draftTable } from "@/tables/draft/table";

export function DraftView() {
  const {
    chapterId,
    chapters,
    stars,
    starHandler: starHandling,
    chapterHandler: chapterHandling,
  } = useContext(DraftContext);
  const constraintsRef = useRef(null);

  return (
    <DraftWrapper>
      <DraftMain>
        <DraftCenter>
          <DraftHeader></DraftHeader>
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
          <DraftChaptersLeftButton
            onClick={() => chapterHandling.goToPrevChapter()}
          />
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
          <DraftChaptersRightButton
            onClick={() => chapterHandling.goToNextChapter()}
          />
        </DraftChapters>
      </DraftMain>
      <DraftSidebar />
    </DraftWrapper>
  );
}
