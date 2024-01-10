"use client";

import { createContext, useState } from "react";
import { DraftView } from "./view";
import { FileObj } from "@/(pages)/(cosmos)/tables/collection/file/main";
import { StarObj } from "@/(pages)/(cosmos)/tables/draft/star/main";
import { draftTable } from "@/(pages)/(cosmos)/tables/draft/table";
import { ChapterObj } from "@/(pages)/(cosmos)/tables/space/chapter/main";
import { spaceTable } from "@/(pages)/(cosmos)/tables/space/table";

export interface StarHandler {
  updateStar: (i: number, data: any) => void;
  spawnStar: (draftMedia: FileObj) => void;
}

export interface ChapterHandling {
  addChapter: (step: ChapterObj) => void;
  goToChapter: (step: ChapterObj) => void;
}

export interface DraftContextObj {
  starHandler: StarHandler;
  chapterHandling: ChapterHandling;
}

export interface DraftViewProps {
  chapterId: string;
  chapters: ChapterObj[];
  stars: StarObj[];
  starHandling: StarHandler;
  chapterHandling: ChapterHandling;
}

export const DraftContext = createContext<DraftContextObj>({});

export default function Page() {
  const [chapters, changeChapters] = useState<ChapterObj[]>(
    spaceTable.chapter.examples
  );
  const [chapterId, changeChapterId] = useState<string>(chapters.at(0)?.id || "");
  const [stars, changeStars] = useState<StarObj[]>(
    draftTable.star.examples
  );

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

  const stepHandler: ChapterHandling = {
    addChapter: (chapter: ChapterObj) => {
      // syncHandler.syncWithinChapters();
      changeChapterId(chapter.id);
      changeChapters((prev) => [...prev, chapter]);
      changeStars(draftTable.star.examples);
    },
    goToChapter: (step: ChapterObj) => {
      // syncHandler.syncWithinChapters();
      changeChapterId(step.id);
      changeStars(draftTable.star.examples);
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
        chapterHandling: stepHandler,
      }}
    >
      <DraftView
        chapterId={chapterId}
        chapters={chapters}
        starHandling={starHandler}
        chapterHandling={stepHandler}
        stars={stars}
      />
    </DraftContext.Provider>
  );
}
