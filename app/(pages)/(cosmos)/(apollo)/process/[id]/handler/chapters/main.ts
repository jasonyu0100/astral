import { ChapterObj } from "@/(pages)/(cosmos)/tables/space/chapter/main";
import { spaceTable } from "@/(pages)/(cosmos)/tables/space/table";
import { useState } from "react";

export interface ChapterHandler {
  addChapter: (chapter: ChapterObj) => ChapterObj;
  goToChapter: (chapter: ChapterObj) => ChapterObj;
  goToPrevChapter: () => ChapterObj | undefined;
  goToNextChapter: () => ChapterObj | undefined;
}

export interface useChaptersInterface {
  chapter: ChapterObj | undefined;
  chapterId: string;
  chapters: ChapterObj[];
  _chapterHandler: ChapterHandler;
}

export const useChapters = (): useChaptersInterface => {
  const [chapters, changeChapters] = useState<ChapterObj[]>(
    spaceTable.chapter.examples
  );

  const [chapterId, changeChapterId] = useState<string>(
    chapters.at(0)?.id || ""
  );

  const chapter = chapters.filter((chapter) => chapter.id === chapterId).at(0);

  const _chapterHandler: ChapterHandler = {
    addChapter: (chapter: ChapterObj) => {
      changeChapterId(chapter.id);
      changeChapters((prev) => [...prev, chapter]);
      return chapter;
    },
    goToChapter: (chapter: ChapterObj) => {
      changeChapterId(chapter.id);
      return chapter;
    },
    goToPrevChapter: () => {
      const currentIndex = chapters.findIndex(
        (chapter) => chapter.id === chapterId
      );
      const previousIndex = currentIndex - 1;

      if (previousIndex >= 0) {
        const previousChapter = chapters[previousIndex];
        changeChapterId(previousChapter.id);
        return previousChapter;
      }
      return undefined;
    },
    goToNextChapter: () => {
      const currentIndex = chapters.findIndex(
        (chapter) => chapter.id === chapterId
      );
      const nextIndex = currentIndex + 1;

      if (nextIndex < chapters.length) {
        const nextChapter = chapters[nextIndex];
        changeChapterId(nextChapter.id);
        return nextChapter;
      }
      return undefined;
    },
  };
  return {
    chapter,
    chapterId,
    chapters,
    _chapterHandler,
  };
};
