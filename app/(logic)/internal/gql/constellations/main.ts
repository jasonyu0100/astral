import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { ConstellationObj } from '@/(logic)/internal/model/draft/constellation/main';
import { gqlArgs } from '@/(logic)/utils/clean';
import {
  createConstellationObj,
  deleteConstellationObj,
  updateConstellationObj,
} from '@/graphql/mutations';
import { listConstellationObjs } from '@/graphql/queries';

export interface ConstellationGqlHelper {
  gqlListConstellations: (chapterId: string) => Promise<ConstellationObj[]>;
  gqlCreateConstellation: (
    chapterId: string,
    title: string,
    description: string,
    variant: string,
  ) => Promise<ConstellationObj>;
  gqlUpdateConstellation: (
    constellationId: string,
    updatedConstellationObj: ConstellationObj,
  ) => Promise<ConstellationObj>;
  gqlDeleteConstellation: (
    constellationId: string,
  ) => Promise<ConstellationObj>;
}

export const gqlHelper : ConstellationGqlHelper = {
  gqlListConstellations: async (chapterId: string) => {
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
  gqlCreateConstellation: async (
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
  gqlUpdateConstellation: async (
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
  gqlDeleteConstellation: async (constellationId: string) => {
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
