import { amplifyClient } from '@/client';
import { createChapterObj } from '@/graphql/mutations';
import { listChapterObjs } from '@/graphql/queries';
import { ChapterObj } from '@/tables/space/chapter/main';
import { useEffect, useState } from 'react';

export interface ChapterHandler {
  addChapter: (chapter: ChapterObj) => ChapterObj;
  goToChapter: (chapter: ChapterObj) => ChapterObj;
  goToPrevChapter: () => ChapterObj | undefined;
  goToNextChapter: () => ChapterObj | undefined;
  queryListChapters: () => Promise<ChapterObj[]>;
  queryCreateChapter: (
    title: string,
    description: string,
  ) => Promise<ChapterObj>;
}

export interface useChaptersInterface {
  chapter?: ChapterObj;
  chapterId: string;
  chapters: ChapterObj[];
  _chapterHandler: ChapterHandler;
}

export const useChapters = (spaceId: string): useChaptersInterface => {
  const [chapters, changeChapters] = useState<ChapterObj[]>([]);

  const [chapterId, changeChapterId] = useState<string>(
    chapters.at(0)?.id || '',
  );

  const chapter = chapters.filter((chapter) => chapter.id === chapterId).at(0);

  useEffect(() => {
    if (!spaceId) {
      changeChapters([]);
      return;
    }
    _chapterHandler.queryListChapters();
  }, [spaceId]);

  const gqlHelper = {
    queryListChapters: async () => {
      const payload = await amplifyClient.graphql({
        query: listChapterObjs,
        variables: {
          filter: {
            spaceId: {
              eq: spaceId,
            },
          },
        },
      });
      const chapters = payload.data?.listChapterObjs?.items as ChapterObj[];
      return chapters;
    },
    queryCreateChapter: async (title: string, description: string) => {
      const payload = await amplifyClient.graphql({
        query: createChapterObj,
        variables: {
          input: {
            title,
            description,
            spaceId,
          },
        },
      });
      const chapter = payload.data?.createChapterObj as ChapterObj;
      return chapter;
    },
  };

  const _chapterHandler: ChapterHandler = {
    queryListChapters: async () => {
      const chapters = await gqlHelper.queryListChapters();
      changeChapters(chapters);
      changeChapterId(chapters.at(0)?.id || '');
      return chapters;
    },
    queryCreateChapter: async (title: string, description: string) => {
      const chapter = await gqlHelper.queryCreateChapter(title, description);
      changeChapters((prev) => [...prev, chapter]);
      changeChapterId(chapter.id);
      return chapter;
    },
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
        (chapter) => chapter.id === chapterId,
      );
      const previousIndex = currentIndex - 1;
      console.log(previousIndex);

      if (previousIndex >= 0) {
        const previousChapter = chapters[previousIndex];
        changeChapterId(previousChapter.id);
        return previousChapter;
      }
      return undefined;
    },
    goToNextChapter: () => {
      const currentIndex = chapters.findIndex(
        (chapter) => chapter.id === chapterId,
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
