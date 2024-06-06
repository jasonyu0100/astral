import { SpaceChapterObj } from '@/(model)/space/chapter/main';
import { createContext, useMemo, useState } from 'react';
// import { chaptersGqlHelper } from '../../(db)/(archive-db)/chapters/main';

export interface ChapterActions {
  addChapter: (chapter: SpaceChapterObj) => SpaceChapterObj;
  goToChapter: (chapter: SpaceChapterObj) => SpaceChapterObj;
  goToPrevChapter: () => SpaceChapterObj | undefined;
  goToNextChapter: () => SpaceChapterObj | undefined;
  listChapters: () => Promise<SpaceChapterObj[]>;
  createChapter: (
    title: string,
    description: string,
    idx: number,
  ) => Promise<SpaceChapterObj>;
}

interface ChaptersHandler {
  chapter?: SpaceChapterObj;
  chapterId: string;
  chapters: SpaceChapterObj[];
  chapterActions: ChapterActions;
}

export const ChaptersHandlerContext = createContext({} as ChaptersHandler);

export const useChaptersHandler = (spaceId: string): ChaptersHandler => {
  const [chapters, changeChapters] = useState<SpaceChapterObj[]>([]);

  const [chapterId, changeChapterId] = useState<string>(
    chapters.at(0)?.id || '',
  );

  const chapter = chapters.filter((chapter) => chapter.id === chapterId).at(0);

  const chapterActions: ChapterActions = {
    listChapters: async () => {
      // const chapters = await chaptersGqlHelper.listFromSpace(spaceId);
      // changeChapters(chapters);
      // changeChapterId(chapters.at(0)?.id || '');
      // return chapters;
    },
    createChapter: async (title: string, description: string, index: number) => {
      // const chapter = await chaptersGqlHelper.create(title, description, index, spaceId);
      // changeChapters((prev) => [...prev, chapter]);
      // changeChapterId(chapter.id);
      // return chapter;
    },
    addChapter: (chapter: SpaceChapterObj) => {
      // changeChapterId(chapter.id);
      // changeChapters((prev) => [...prev, chapter]);
      // return chapter;
    },
    goToChapter: (chapter: SpaceChapterObj) => {
      // changeChapterId(chapter.id);
      // return chapter;
    },
    goToPrevChapter: () => {
      // const currentIndex = chapters.findIndex(
      //   (chapter) => chapter.id === chapterId,
      // );
      // const previousIndex = currentIndex - 1;

      // if (previousIndex >= 0) {
      //   const previousChapter = chapters[previousIndex];
      //   changeChapterId(previousChapter.id);
      //   return previousChapter;
      // }
      // return undefined;
    },
    goToNextChapter: () => {
      // const currentIndex = chapters.findIndex(
      //   (chapter) => chapter.id === chapterId,
      // );
      // const nextIndex = currentIndex + 1;

      // if (nextIndex < chapters.length) {
      //   const nextChapter = chapters[nextIndex];
      //   changeChapterId(nextChapter.id);
      //   return nextChapter;
      // }
      // return undefined;
    },
  };

  useMemo(() => {
    if (!spaceId) {
      changeChapters([]);
      return;
    }
    chapterActions.listChapters();
  }, [spaceId]);
  
  return {
    chapter,
    chapterId,
    chapters,
    chapterActions,
  };
};
