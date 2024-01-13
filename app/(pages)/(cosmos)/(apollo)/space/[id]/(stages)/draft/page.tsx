"use client";

import { createContext } from "react";
import { DraftView } from "./view";
import { StarObj } from "@/tables/draft/constellation/star/main";
import { ChapterObj } from "@/tables/space/chapter/main";
import { ConstellationObj } from "@/tables/draft/constellation/main";
import { ChapterHandler, useChapters } from "../../handler/chapters/main";
import {
  ConstellationHandler,
  StarHandler,
  useConstellation,
} from "../../handler/constellations/main";
import isAuth from "@/utils/isAuth";
import { ResourceObj } from "@/tables/resource/main";

export interface DraftContextObj {
  chapterId: string;
  chapter: ChapterObj | undefined;
  chapters: ChapterObj[];
  constellation: ConstellationObj | undefined;
  constellations: ConstellationObj[];
  constellationId: string;
  stars: StarObj[];
  starHandler: StarHandler;
  chapterHandler: ChapterHandler;
  constellationHandler: ConstellationHandler;
}

export interface DraftViewProps {
  chapterId: string;
  chapter: ChapterObj | undefined;
  chapters: ChapterObj[];
  constellation: ConstellationObj | undefined;
  constellations: ConstellationObj[];
  constellationId: string;
  stars: StarObj[];
  starHandler: StarHandler;
  chapterHandler: ChapterHandler;
  constellationHandler: ConstellationHandler;
}

export const DraftContext = createContext<DraftContextObj>({});

function Page() {
  const { chapter, chapters, chapterId, _chapterHandler } = useChapters();
  const {
    stars,
    _starHandler,
    constellation,
    constellations,
    constellationId,
    _constellationHandler,
  } = useConstellation();

  const chapterHandler: ChapterHandler = {
    addChapter: (chapter: ChapterObj) => {
      _chapterHandler.addChapter(chapter);
      _constellationHandler.updateConstellations([]);
      // SYNC NEW CHAPTER W/ CONSTELLATIONS AND STARS
      return chapter;
    },
    goToChapter: (chapter: ChapterObj) => {
      _chapterHandler.goToChapter(chapter);
      _constellationHandler.updateConstellations([]);
      // SYNC NEW CHAPTER W/ CONSTELLATIONS AND STARS
      return chapter;
    },
    goToPrevChapter: () => {
      const chapter = _chapterHandler.goToPrevChapter();
      _constellationHandler.updateConstellations([]);
      // SYNC NEW CHAPTER W/ CONSTELLATIONS AND STARS
      return chapter;
    },
    goToNextChapter: () => {
      const chapter = _chapterHandler.goToNextChapter();
      _constellationHandler.updateConstellations([]);
      // SYNC NEW CHAPTER W/ CONSTELLATIONS AND STARS
      return chapter;
    },
  };

  const constellationHandler: ConstellationHandler = {
    updateConstellation: (constellation: ConstellationObj) => {
      _constellationHandler.updateConstellation(constellation);
      return constellation;
    },
    updateConstellations: (constellations: ConstellationObj[]) => {
      _constellationHandler.updateConstellations(constellations);
      return constellations;
    },
    goToConstellation: (constellation: ConstellationObj) => {
      _constellationHandler.goToConstellation(constellation);
      return constellation;
    },

    addConstellation: (constellation: ConstellationObj) => {
      _constellationHandler.addConstellation(constellation);
      return constellation;
    },

    addStarToConstellation: (resource: ResourceObj) => {
      const constellation =
        _constellationHandler.addStarToConstellation(resource);
      return constellation;
    },
  };

  const starHandler: StarHandler = {
    updateStar: (starId: string, data: any) => {
      _starHandler.updateStar(starId, data);
    },
    spawnStar: (resource: ResourceObj) => {
      return _starHandler.spawnStar(resource);
    },
  };

  const context : DraftContextObj = {
    chapter: chapter,
    constellation: constellation,
    stars: stars,
    chapterId: chapterId,
    chapters: chapters,
    starHandler: starHandler,
    chapterHandler: chapterHandler,
    constellationId: constellationId,
    constellations: constellations,
    constellationHandler: constellationHandler,
  };

  return (
    <DraftContext.Provider value={context}>
      <DraftView/>
    </DraftContext.Provider>
  );
}

export default isAuth(Page);
