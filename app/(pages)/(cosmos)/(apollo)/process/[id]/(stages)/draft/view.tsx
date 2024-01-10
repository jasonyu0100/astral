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

export function DraftView({
  chapterId,
  chapters,
  stars,
  starHandling,
  chapterHandling: stepHandling,
}: DraftViewProps) {
  const constraintsRef = useRef(null);

  return (
    <DraftWrapper>
      <DraftController>
        <DraftCenter>
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
        </DraftCenter>
        <DraftControllerBottomRow>
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
        </DraftControllerBottomRow>
      </DraftController>
      <Sidebar />
    </DraftWrapper>
  );
}
