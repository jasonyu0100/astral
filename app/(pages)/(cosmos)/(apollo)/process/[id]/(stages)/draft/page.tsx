"use client";

import { createContext, useState } from "react";
import { DraftView } from "./view";
import { FileObj } from "@/tables/collection/file/main";
import { StarObj } from "@/tables/draft/constellation/star/main";
import { ChapterObj } from "@/tables/space/chapter/main";
import { ConstellationObj } from "@/tables/draft/constellation/main";
import { ChapterHandler, useChapters } from "../../handler/chapters/main";
import { ConstellationHandler, StarHandler, useConstellation } from "../../handler/constellations/main";
import isAuth from "@/utils/isAuth";

export interface DraftContextObj {
  starHandler: StarHandler;
  chapterHandler: ChapterHandler;
  constellationHandler: ConstellationHandler;
}

export interface DraftViewProps {
  chapterId: string;
  chapters: ChapterObj[];
  constellations: ConstellationObj[];
  constellationId: string;
  stars: StarObj[];
  starHandler: StarHandler;
  chapterHandler: ChapterHandler;
  constellationHandler: ConstellationHandler;
}

export const DraftContext = createContext<DraftContextObj>({});

function Page() {
  const { chapters, chapterId, _chapterHandler } = useChapters();
  const { stars, _starHandler, constellations, constellationId, _constellationHandler } = useConstellation();

  const chapterHandler: ChapterHandler = {
    addChapter: (chapter: ChapterObj) => {
      _chapterHandler.addChapter(chapter);
      _constellationHandler.updateConstellations([])
      // SYNC NEW CHAPTER W/ CONSTELLATIONS AND STARS
      return chapter;
    },
    goToChapter: (chapter: ChapterObj) => {
      _chapterHandler.goToChapter(chapter);
      _constellationHandler.updateConstellations([])
      // SYNC NEW CHAPTER W/ CONSTELLATIONS AND STARS
      return chapter;
    },
    goToPrevChapter: () => {
      const chapter = _chapterHandler.goToPrevChapter()
      _constellationHandler.updateConstellations([])
      // SYNC NEW CHAPTER W/ CONSTELLATIONS AND STARS
      return chapter;
    },
    goToNextChapter: () => {
      const chapter = _chapterHandler.goToNextChapter()
      _constellationHandler.updateConstellations([])
      // SYNC NEW CHAPTER W/ CONSTELLATIONS AND STARS
      return chapter;
    },
  };

  const constellationHandler: ConstellationHandler = {
    updateConstellation: (constellation: ConstellationObj) => {
      _constellationHandler.updateConstellation(constellation)
      return constellation;
    },
    updateConstellations: (constellations: ConstellationObj[]) => {
      _constellationHandler.updateConstellations(constellations);
      return constellations;
    },
    goToConstellation: (constellation: ConstellationObj) => {
      _constellationHandler.goToConstellation(constellation)
      return constellation
    },

    addConstellation: (constellation: ConstellationObj) => {
      _constellationHandler.addConstellation(constellation)
      return constellation
    },

    addFileToConstellation: (file: FileObj) => {
      const constellation = _constellationHandler.addFileToConstellation(file)
      return constellation
    },
  };

  const starHandler: StarHandler = {
    updateStar: (starId: string, data: any) => {
      _starHandler.updateStar(starId, data)
    },
    spawnStar: (file: FileObj) => {
      return _starHandler.spawnStar(file)
    },
  }

  return (
    <DraftContext.Provider
      value={{
        starHandler: starHandler,
        chapterHandler: chapterHandler,
        constellationHandler: constellationHandler,
      }}
    >
      <DraftView
        stars={stars}
        chapterId={chapterId}
        chapters={chapters}
        starHandler={starHandler}
        chapterHandler={chapterHandler}
        constellationId={constellationId}
        constellations={constellations}
        constellationHandler={constellationHandler}
      />
    </DraftContext.Provider>
  );
}

export default isAuth(Page);