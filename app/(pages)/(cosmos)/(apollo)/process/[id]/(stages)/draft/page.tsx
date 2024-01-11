"use client";

import { createContext, useState } from "react";
import { DraftView } from "./view";
import { FileObj } from "@/(pages)/(cosmos)/tables/collection/file/main";
import { StarObj } from "@/(pages)/(cosmos)/tables/draft/constellation/star/main";
import { ChapterObj } from "@/(pages)/(cosmos)/tables/space/chapter/main";
import { ConstellationObj } from "@/(pages)/(cosmos)/tables/draft/constellation/main";
import { ChapterHandler, useChapters } from "../../handler/chapters/main";
import { ConstellationHandler, StarHandler, useConstellation } from "../../handler/constellation/main";

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

export default function Page() {
  const { chapters, chapterId, _chapterHandler } = useChapters();
  const { stars, _starHandler, constellations, constellationId, _constellationHandler } = useConstellation();

  const chapterHandler: ChapterHandler = {
    addChapter: (chapter: ChapterObj) => {
      _chapterHandler.addChapter(chapter);
      // SYNC NEW CHAPTER W/ CONSTELLATIONS AND STARS
      return chapter;
    },
    goToChapter: (chapter: ChapterObj) => {
      _chapterHandler.goToChapter(chapter);
      // SYNC NEW CHAPTER W/ CONSTELLATIONS AND STARS
      return chapter;
    },
    goToPrevChapter: () => {
      const chapter = _chapterHandler.goToPrevChapter()
      // SYNC NEW CHAPTER W/ CONSTELLATIONS AND STARS
      return chapter;
    },
    goToNextChapter: () => {
      const chapter = _chapterHandler.goToPrevChapter()
      // SYNC NEW CHAPTER W/ CONSTELLATIONS AND STARS
      return chapter;
    },
  };

  const constellationHandler: ConstellationHandler = {
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
