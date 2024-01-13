"use client";
import { createContext } from "react";
import { FlowView } from "./view";
import { ChapterHandler, useChapters } from "../../handler/chapters/main";
import { MomentHandler, useMoment } from "../../handler/moments/main";
import { MomentObj } from "@/tables/flow/moment/main";
import isAuth from "@/utils/isAuth";
import { ChapterObj } from "@/tables/space/chapter/main";

interface FlowContextObj {
  chapter: ChapterObj | undefined;
  moment: MomentObj | undefined;
  moments: MomentObj[];
  momentId: string;
  chapterId: string;
  chapters: ChapterObj[];
  chapterHandler: ChapterHandler | any;
  momentHandler: MomentHandler | any;
}

export const FlowContext = createContext<FlowContextObj>({
  chapter: undefined,
  moment: undefined,
  moments: [],
  momentId: "",
  chapterId: "",
  chapters: [],
  chapterHandler: undefined,
  momentHandler: undefined
});

function Page() {
  const { chapter, chapters, chapterId, _chapterHandler } = useChapters();
  const { moment, moments, momentId, _momentHandler } = useMoment();

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

  const context: FlowContextObj = {
    chapter,
    moment,
    moments,
    momentId,
    chapterId,
    chapters,
    chapterHandler,
    momentHandler,
  };

  return (
    <FlowContext.Provider value={context}>
      <FlowView />
    </FlowContext.Provider>
  );
}

export default isAuth(Page);
