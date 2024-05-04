import { amplifyClient } from '@/(lgx)/external/aws/graphql/main';
import {
  deleteUpdateObj,
  updateUpdateObj,
} from '@/graphql/mutations';
import { listUpdateObjs } from '@/graphql/queries';
import { gqlArgs } from '@/(lgx)/utils/clean';
import { UpdatesCreateGqlHelper, updatesCreateGqlHelper } from './create/main';
import { UpdateObj } from '@/(types)/model/sea/update/main';

export interface UpdatesGqlHelper {
  create: UpdatesCreateGqlHelper;
  listFromChapter: (chapterId: string) => Promise<UpdateObj[]>;
  delete: (updateId: string) => Promise<UpdateObj>;
  update: (updateId: string, updatedUpdateObj: UpdateObj) => Promise<UpdateObj>;
  updateMany: (updatedUpdateObjs: UpdateObj[]) => Promise<UpdateObj[]>;
}

export const updatesGqlHelper: UpdatesGqlHelper = {
  listFromChapter: async (userId: string) => {
    const payload = await amplifyClient.graphql({
      query: listUpdateObjs,
      variables: {
        filter: {
          userId: {
            eq: userId,
          },
        },
      },
    });
    const updateObjs =
      (payload.data?.listUpdateObjs?.items as UpdateObj[]) || [];
    return updateObjs;
  },
  delete: async (updateId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteUpdateObj,
      variables: {
        input: gqlArgs({
          id: updateId,
        }),
      },
    });
    const updateObj = payload?.data?.deleteUpdateObj as UpdateObj;
    return updateObj;
  },
  update: async (updateId: string, updatedUpdateObj: UpdateObj) => {
    const payload = await amplifyClient.graphql({
      query: updateUpdateObj,
      variables: {
        input: gqlArgs({
          id: updateId,
          spaceId: updatedUpdateObj.spaceId,
          userId: updatedUpdateObj.userId,
          title: updatedUpdateObj.title,
          time: updatedUpdateObj.time,
          description: updatedUpdateObj.description,
          variant: updatedUpdateObj.variant,
          file: updatedUpdateObj.file,
          log: updatedUpdateObj.log,
          link: updatedUpdateObj.link,
          note: updatedUpdateObj.note,
        }),
      },
    });
    const updateObj = payload?.data?.updateUpdateObj as UpdateObj;
    return updateObj;
  },
  updateMany: async (updates: UpdateObj[]) => {
    const updatedUpdateObjs = await Promise.all(
      updates.map(async (update: UpdateObj) => {
        const payload = await amplifyClient.graphql({
          query: updateUpdateObj,
          variables: {
            input: gqlArgs(update),
          },
        });
        const updatedUpdate = payload.data?.updateUpdateObj as UpdateObj;
        return updatedUpdate;
      }),
    );
    return updatedUpdateObjs;
  },
  create: updatesCreateGqlHelper,
};
