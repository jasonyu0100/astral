import { amplifyClient } from '@/(api)/aws/graphql/main';
import { ConstellationObj } from '@/(types)/model/map/constellation/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createConstellationObj,
  deleteConstellationObj,
  updateConstellationObj,
} from '@/graphql/mutations';
import { listConstellationObjs } from '@/graphql/queries';

export interface ConstellationsGqlHelper {
  listFromChapter: (chapterId: string) => Promise<ConstellationObj[]>;
  create: (
    chapterId: string,
    title: string,
    description: string,
    variant: string,
  ) => Promise<ConstellationObj>;
  update: (
    constellationId: string,
    updatedConstellationObj: ConstellationObj,
  ) => Promise<ConstellationObj>;
  delete: (
    constellationId: string,
  ) => Promise<ConstellationObj>;
}

export const constellationsGqlHelper : ConstellationsGqlHelper = {
  listFromChapter: async (chapterId: string) => {
    const payload = await amplifyClient.graphql({
      query: listConstellationObjs,
      variables: {
        filter: {
          chapterId: {
            eq: chapterId,
          },
        },
      },
    });
    const constellationObjs =
      (payload?.data.listConstellationObjs?.items as ConstellationObj[]) || [];
    return constellationObjs;
  },
  create: async (
    chapterId: string,
    title: string,
    description: string,
    variant: string,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createConstellationObj,
      variables: {
        input: gqlArgs({
          chapterId,
          title,
          description,
          variant,
        }),
      },
    });
    const constellationObj = payload?.data
      .createConstellationObj as ConstellationObj;
    return constellationObj;
  },
  update: async (
    constellationId: string,
    updatedConstellationObj: ConstellationObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: updateConstellationObj,
      variables: {
        input: gqlArgs({
          id: constellationId,
          chapterId: updatedConstellationObj.chapterId,
          title: updatedConstellationObj.title,
          description: updatedConstellationObj.description,
          variant: updatedConstellationObj.variant,
        }),
      },
    });
    const constellationObj = payload?.data
      .updateConstellationObj as ConstellationObj;
    return constellationObj;
  },
  delete: async (constellationId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteConstellationObj,
      variables: {
        input: {
          id: constellationId,
        },
      },
    });
    const constellationObj = payload?.data
      ?.deleteConstellationObj as ConstellationObj;
    return constellationObj;
  },
};
