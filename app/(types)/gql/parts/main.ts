import { amplifyClient } from '@/(api)/aws/graphql/main';
import { PartObj } from '@/(types)/model/map/part/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createPartObj,
  deletePartObj,
  updatePartObj,
} from '@/graphql/mutations';
import { listPartObjs } from '@/graphql/queries';

export interface PartsGqlHelper {
  listFromChapter: (chapterId: string) => Promise<PartObj[]>;
  create: (
    chapterId: string,
    title: string,
    description: string,
    variant: string,
  ) => Promise<PartObj>;
  update: (
    partId: string,
    updatedPartObj: PartObj,
  ) => Promise<PartObj>;
  delete: (
    partId: string,
  ) => Promise<PartObj>;
}

export const partsGqlHelper : PartsGqlHelper = {
  listFromChapter: async (chapterId: string) => {
    const payload = await amplifyClient.graphql({
      query: listPartObjs,
      variables: {
        filter: {
          chapterId: {
            eq: chapterId,
          },
        },
      },
    });
    const partObjs =
      (payload?.data.listPartObjs?.items as PartObj[]) || [];
    return partObjs;
  },
  create: async (
    chapterId: string,
    title: string,
    description: string,
    variant: string,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createPartObj,
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
      .createPartObj as PartObj;
    return partObj;
  },
  update: async (
    partId: string,
    updatedPartObj: PartObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: updatePartObj,
      variables: {
        input: gqlArgs({
          id: partId,
          chapterId: updatedPartObj.chapterId,
          title: updatedPartObj.title,
          description: updatedPartObj.description,
          variant: updatedPartObj.variant,
        }),
      },
    });
    const partObj = payload?.data
      .updatePartObj as PartObj;
    return partObj;
  },
  delete: async (partId: string) => {
    const payload = await amplifyClient.graphql({
      query: deletePartObj,
      variables: {
        input: {
          id: partId,
        },
      },
    });
    const partObj = payload?.data
      ?.deletePartObj as PartObj;
    return partObj;
  },
};
