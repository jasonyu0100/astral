import { amplifyClient } from '@/(lgx)/external/aws/graphql/main';
import { ChapterObj } from '@/(types)/model/space/chapter/main';
import { gqlArgs } from '@/(lgx)/utils/clean';
import {
  createChapterObj,
  deleteChapterObj,
  updateChapterObj,
} from '@/graphql/mutations';
import { listChapterObjs } from '@/graphql/queries';

export interface ChaptersGqlHelper {
  create: (
    title: string,
    description: string,
    idx: number,
    spaceId: string,
  ) => Promise<ChapterObj>;
  update: (
    chapterId: string,
    updatedChapterObj: ChapterObj,
  ) => Promise<ChapterObj>;
  delete: (chapterId: string) => Promise<ChapterObj>;
  listFromSpace: (spaceId: string) => Promise<ChapterObj[]>;
}

export const chaptersGqlHelper: ChaptersGqlHelper = {
  listFromSpace: async (spaceId: string) => {
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
  create: async (
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
  update: async (chapterId: string, updatedChapterObj: ChapterObj) => {
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
  delete: async (chapterId: string) => {
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
