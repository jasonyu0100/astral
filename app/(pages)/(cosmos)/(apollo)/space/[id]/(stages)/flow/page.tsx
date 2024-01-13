"use client";
import { createContext } from "react";
import { FlowView } from "./view";
import { ChapterHandler, useChapters } from "../../handler/chapters/main";
import { MomentHandler, useMoment } from "../../handler/moments/main";
import { MomentObj } from "@/tables/flow/moment/main";
import isAuth from "@/utils/isAuth";
import { ChapterObj } from "@/tables/space/chapter/main";

interface FlowContextObj {
  chapterHandler: ChapterHandler;
  momentHandler: MomentHandler;
}

export const FlowContext = createContext<FlowContextObj>({});
export interface FlowViewProps {
  moments: MomentObj[];
  momentId: string;
  chapterId: string;
  chapters: ChapterObj[];
  chapterHandler: ChapterHandler;
  momentHandler: MomentHandler;
}

function Page() {
  const { chapters, chapterId, _chapterHandler } = useChapters();
  const { moments, momentId, _momentHandler } = useMoment();

  const chapterHandler: ChapterHandler = {
    addChapter: (chapter: ChapterObj) => {
      _chapterHandler.addChapter(chapter);
      _momentHandler.updateMoments([]);
      return chapter;
    },
    goToChapter: (chapter: ChapterObj) => {
      _chapterHandler.goToChapter(chapter);
      _momentHandler.updateMoments([]);
      return chapter;
    },
    goToPrevChapter: () => {
      const chapter = _chapterHandler.goToPrevChapter();
      _momentHandler.updateMoments([]);
      return chapter;
    },
    goToNextChapter: () => {
      const chapter = _chapterHandler.goToNextChapter();
      _momentHandler.updateMoments([]);
      return chapter;
    },
  };

  const momentHandler: MomentHandler = {
    updateMoments: (moments: MomentObj[]) => {
      _momentHandler.updateMoments(moments);
      return moments;
    },
    updateMoment: (moment: MomentObj) => {
      _momentHandler.updateMoment(moment);
      return moment;
    },
    addMoment: (moment: MomentObj) => {
      _momentHandler.addMoment(moment);
      return moment;
    },
  };

  return (
    <FlowContext.Provider
      value={{
        momentHandler: momentHandler,
        chapterHandler: chapterHandler,
      }}
    >
      <FlowView
        momentId={momentId}
        moments={moments}
        chapterId={chapterId}
        chapters={chapters}
        chapterHandler={chapterHandler}
        momentHandler={momentHandler}
      />
    </FlowContext.Provider>
  );
}

export default isAuth(Page);
