import { amplifyClient } from '@/(api)/aws/graphql/main';
import { ChapterSceneObj } from '@/(model)/space/chapter/scene/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createSceneObj,
  deleteSceneObj,
  updateSceneObj,
} from '@/graphql/mutations';
import { listSceneObjs } from '@/graphql/queries';

export interface ScenesGqlHelper {
  listFromChapter: (chapterId: string) => Promise<ChapterSceneObj[]>;
  create: (
    chapterId: string,
    title: string,
    description: string,
    variant: string,
  ) => Promise<ChapterSceneObj>;
  update: (
    partId: string,
    updatedSceneObj: ChapterSceneObj,
  ) => Promise<ChapterSceneObj>;
  delete: (
    partId: string,
  ) => Promise<ChapterSceneObj>;
}

export const partsGqlHelper : ScenesGqlHelper = {
  listFromChapter: async (chapterId: string) => {
    const payload = await amplifyClient.graphql({
      query: listSceneObjs,
      variables: {
        filter: {
          chapterId: {
            eq: chapterId,
          },
        },
      },
    });
    const partObjs =
      (payload?.data.listSceneObjs?.items as ChapterSceneObj[]) || [];
    return partObjs;
  },
  create: async (
    chapterId: string,
    title: string,
    description: string,
    variant: string,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createSceneObj,
      variables: {
        input: gqlArgs({
          chapterId,
          title,
          description,
          variant,
        }),
      },
    });
    const partObj = payload?.data
      .createSceneObj as ChapterSceneObj;
    return partObj;
  },
  update: async (
    partId: string,
    updatedSceneObj: ChapterSceneObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: updateSceneObj,
      variables: {
        input: gqlArgs({
          id: partId,
          chapterId: updatedSceneObj.chapterId,
          title: updatedSceneObj.title,
          description: updatedSceneObj.description,
          variant: updatedSceneObj.variant,
        }),
      },
    });
    const partObj = payload?.data
      .updateSceneObj as ChapterSceneObj;
    return partObj;
  },
  delete: async (partId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteSceneObj,
      variables: {
        input: {
          id: partId,
        },
      },
    });
    const partObj = payload?.data
      ?.deleteSceneObj as ChapterSceneObj;
    return partObj;
  },
};
