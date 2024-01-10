"use client";

import { createContext, useState } from "react";
import { DraftView } from "./view";
import { FileObj } from "@/(pages)/(cosmos)/tables/collection/file/main";
import { StarObj } from "@/(pages)/(cosmos)/tables/draft/constellation/star/main";
import { draftTable } from "@/(pages)/(cosmos)/tables/draft/table";
import { ChapterObj } from "@/(pages)/(cosmos)/tables/space/chapter/main";
import { spaceTable } from "@/(pages)/(cosmos)/tables/space/table";
import { ConstellationObj } from "@/(pages)/(cosmos)/tables/draft/constellation/main";

export interface StarHandler {
  updateStar: (i: number, data: any) => void;
  spawnStar: (draftMedia: FileObj) => void;
}

export interface ChapterHandler {
  addChapter: (chapter: ChapterObj) => void;
  goToChapter: (chapter: ChapterObj) => void;
}

export interface ConstellationHandler {
  updateCurrentMoment: (constellation: ConstellationObj) => void;
  addConstellationToStep: (constellation: ConstellationObj) => void;
  addFileToConstellation: (file: FileObj) => void;
}

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
  const [chapters, changeChapters] = useState<ChapterObj[]>(
    spaceTable.chapter.examples
  );
  const [chapterId, changeChapterId] = useState<string>(
    chapters.at(0)?.id || ""
  );
  const [constellations, changeConstellations] = useState<ConstellationObj[]>(
    draftTable.constellation.examples
  );
  const [constellationId, changeConstellationId] = useState<string>(
    constellations.at(0)?.id || ""
  );
  const [stars, changeStars] = useState<StarObj[]>(draftTable.star.examples);

  // const syncHandler = {
  //   serialize: (obj: any) => JSON.parse(JSON.stringify(obj)),
  //   getCurrentChapter: (chapters: ChapterObj[]) =>
  //     chapters.filter((step) => step.id === chapterId).at(0),
  //   syncWithinChapters: () => {
  //     const currentChapter: ChapterObj = syncHandler.serialize(
  //       syncHandler.getCurrentChapter(chapters)
  //     );
  //     if (currentChapter) {
  //       currentChapter.points.draftPoint.stars = stars;
  //       changeChapters((prev) =>
  //         prev.map((step) => (step.id === chapterId ? currentChapter : step))
  //       );
  //     }
  //   },
  // };

  const stepHandler: ChapterHandler = {
    addChapter: (chapter: ChapterObj) => {
      // syncHandler.syncWithinChapters();
      changeChapterId(chapter.id);
      changeChapters((prev) => [...prev, chapter]);
      changeStars(draftTable.star.examples);
    },
    goToChapter: (chapter: ChapterObj) => {
      // syncHandler.syncWithinChapters();
      changeChapterId(chapter.id);
      changeStars(draftTable.star.examples);
    },
  };

  const constellationHelper = {
    updateConstellationsWithCurrent: (
      newCurrentConstellation: ConstellationObj
    ) => {
      changeConstellations((prev) =>
        prev.map((moment) =>
          moment.id === newCurrentConstellation.id
            ? newCurrentConstellation
            : moment
        )
      );
    },

    getCurrentConstellation: () => {
      for (let constellation of constellations) {
        if (constellation.id === constellationId) {
          return constellation;
        }
      }
      return null;
    },
  };

  const constellationHandler: ConstellationHandler = {
    updateCurrentMoment: (constellation: ConstellationObj) => {
      changeConstellationId(constellation.id);
      changeStars(constellation.stars);
    },

    addConstellationToStep: (constellation: ConstellationObj) => {
      changeConstellationId(constellation.id);
      changeConstellations((prev) => [...prev, constellation]);
      changeStars(constellation.stars);
    },

    addFileToConstellation: (file: FileObj) => {
      const currentConstellation =
        constellationHelper.getCurrentConstellation();
      if (currentConstellation) {
        const newConstellation = {
          ...currentConstellation,
          stars: [
            ...currentConstellation.stars,
            {
              ...draftTable.star.example,
              file: file,
            },
          ],
        };
        constellationHelper.updateConstellationsWithCurrent(newConstellation);
      }
    },
  };

  const starHandler: StarHandler = {
    updateStar: (i: number, data: any) => {
      changeStars((prev: any[]) =>
        prev.map((o: any, j: number) => (j === i ? { ...o, ...data } : o))
      );
    },

    spawnStar: (draftMedia: FileObj) => {
      changeStars((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          x: Math.random() * 500,
          y: Math.random() * 500,
          file: draftMedia,
        },
      ]);
      alert(`Spawned Star`);
    },
  };

  return (
    <DraftContext.Provider
      value={{
        starHandler: starHandler,
        chapterHandler: stepHandler,
        constellationHandler: constellationHandler,
      }}
    >
      <DraftView
        chapterId={chapterId}
        chapters={chapters}
        starHandler={starHandler}
        chapterHandler={stepHandler}
        constellationId={constellationId}
        constellations={constellations}
        constellationHandler={constellationHandler}
        stars={stars}
      />
    </DraftContext.Provider>
  );
}
