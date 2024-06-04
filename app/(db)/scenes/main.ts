import { amplifyClient } from '@/(api)/aws/graphql/main';
import { SceneObj } from '@/(model)/space/chapter/scene/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createSceneObj,
  deleteSceneObj,
  updateSceneObj,
} from '@/graphql/mutations';
import { listSceneObjs } from '@/graphql/queries';

export interface ScenesGqlHelper {
  listFromChapter: (chapterId: string) => Promise<SceneObj[]>;
  create: (
    chapterId: string,
    title: string,
    description: string,
    variant: string,
  ) => Promise<SceneObj>;
  update: (
    partId: string,
    updatedSceneObj: SceneObj,
  ) => Promise<SceneObj>;
  delete: (
    partId: string,
  ) => Promise<SceneObj>;
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
      (payload?.data.listSceneObjs?.items as SceneObj[]) || [];
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
      .createSceneObj as SceneObj;
    return partObj;
  },
  update: async (
    partId: string,
    updatedSceneObj: SceneObj,
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
      .updateSceneObj as SceneObj;
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
      ?.deleteSceneObj as SceneObj;
    return partObj;
  },
};
