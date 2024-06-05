import { amplifyClient } from '@/(api)/aws/graphql/main';
import { SpaceChapterObj } from '@/(model)/space/chapter/main';
import { gqlArgs } from '@/(utils)/clean';
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
  ) => Promise<SpaceChapterObj>;
  update: (
    chapterId: string,
    updatedChapterObj: SpaceChapterObj,
  ) => Promise<SpaceChapterObj>;
  delete: (chapterId: string) => Promise<SpaceChapterObj>;
  listFromSpace: (spaceId: string) => Promise<SpaceChapterObj[]>;
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
      (payload.data?.listChapterObjs?.items as SpaceChapterObj[]) || [];
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
    const chapterObj = payload.data?.createChapterObj as SpaceChapterObj;
    return chapterObj;
  },
  update: async (chapterId: string, updatedChapterObj: SpaceChapterObj) => {
    const payload = await amplifyClient.graphql({
      query: updateChapterObj,
      variables: {
        input: gqlArgs({
          id: chapterId,
          spaceId: updatedChapterObj.spaceId,
          title: updatedChapterObj.title,
          description: updatedChapterObj.summary,
          idx: updatedChapterObj.idx,
        }),
      },
    });
    const chapterObj = payload.data?.updateChapterObj as SpaceChapterObj;
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
    const chapterObj = payload.data?.deleteChapterObj as SpaceChapterObj;
    return chapterObj;
  },
};
