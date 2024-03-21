import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { ChapterObj } from '@/(logic)/internal/model/space/chapter/main';
import { gqlArgs } from '@/(logic)/utils/clean';
import {
  createChapterObj,
  deleteChapterObj,
  updateChapterObj,
} from '@/graphql/mutations';
import { listChapterObjs } from '@/graphql/queries';

export interface ChapterGqlHelper {
  gqlListChapters: (spaceId: string) => Promise<ChapterObj[]>;
  gqlCreateChapter: (
    title: string,
    description: string,
    idx: number,
    spaceId: string,
  ) => Promise<ChapterObj>;
  gqlUpdateChapter: (
    chapterId: string,
    updatedChapterObj: ChapterObj,
  ) => Promise<ChapterObj>;
  gqlDeleteChapter: (chapterId: string) => Promise<ChapterObj>;
}

export const gqlHelper: ChapterGqlHelper = {
  gqlListChapters: async (spaceId: string) => {
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
    const chapterObjs =
      (payload.data?.listChapterObjs?.items as ChapterObj[]) || [];
    const sortedChapterObjs = chapterObjs.sort((a, b) => a.idx - b.idx);
    return sortedChapterObjs;
  },
  gqlCreateChapter: async (
    title: string,
    description: string,
    idx: number,
    spaceId: string,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createChapterObj,
      variables: {
        input: gqlArgs({
          title: title,
          description: description,
          spaceId: spaceId,
          idx: idx,
        }),
      },
    });
    const chapterObj = payload.data?.createChapterObj as ChapterObj;
    return chapterObj;
  },
  gqlUpdateChapter: async (
    chapterId: string,
    updatedChapterObj: ChapterObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: updateChapterObj,
      variables: {
        input: gqlArgs({
          id: chapterId,
          spaceId: updatedChapterObj.spaceId,
          title: updatedChapterObj.title,
          description: updatedChapterObj.description,
          idx: updatedChapterObj.idx,
        }),
      },
    });
    const chapterObj = payload.data?.updateChapterObj as ChapterObj;
    return chapterObj;
  },
  gqlDeleteChapter: async (chapterId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteChapterObj,
      variables: {
        input: {
          id: chapterId,
        },
      },
    });
    const chapterObj = payload.data?.deleteChapterObj as ChapterObj;
    return chapterObj;
  },
};
