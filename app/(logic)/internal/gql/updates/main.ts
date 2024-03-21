import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { LogObj } from '@/(logic)/internal/model/resource/log/main';
import { NoteObj } from '@/(logic)/internal/model/resource/note/main';
import {
  createUpdateObj,
  deleteUpdateObj,
  updateUpdateObj,
} from '@/graphql/mutations';
import { listUpdateObjs } from '@/graphql/queries';
import { UpdateObj, UpdateVariant } from '../../model/update/main';
import { gqlArgs } from '@/(logic)/utils/clean';

export interface UpdatesGqlHelper {
  gqlListUpdates: (chapterId: string) => Promise<UpdateObj[]>;
  gqlCreateFileUpdate: (
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    file: FileObj,
  ) => Promise<UpdateObj>;
  gqlCreateLogUpdate: (
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    log: LogObj,
  ) => Promise<UpdateObj>;
  gqlCreateNoteUpdate: (
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    note: NoteObj,
  ) => Promise<UpdateObj>;
  gqlDeleteUpdate: (updateId: string) => Promise<UpdateObj>;
  gqlUpdateUpdate: (
    updateId: string,
    updatedUpdateObj: UpdateObj,
  ) => Promise<UpdateObj>;
  gqlUpdateUpdates: (updatedUpdateObjs: UpdateObj[]) => Promise<UpdateObj[]>;
}

export const gqlHelper: UpdatesGqlHelper = {
  gqlListUpdates: async (userId: string) => {
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
  gqlCreateFileUpdate: async (
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    file: FileObj,
  ) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createUpdateObj,
      variables: {
        input: gqlArgs({
          spaceId: spaceId,
          userId: userId,
          time: currentDate,
          title: title,
          description: description,
          file: file,
          variant: UpdateVariant.FILE,
        }),
      },
    });
    const updateObj = payload.data?.createUpdateObj as UpdateObj;
    return updateObj;
  },
  gqlCreateLogUpdate: async (
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    log: LogObj,
  ) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createUpdateObj,
      variables: {
        input: gqlArgs({
          spaceId: spaceId,
          userId: userId,
          time: currentDate,
          title: title,
          description: description,
          log: log,
          variant: UpdateVariant.LOG,
        }),
      },
    });
    const updateObj = payload.data?.createUpdateObj as UpdateObj;
    return updateObj;
  },
  gqlCreateNoteUpdate: async (
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    note: NoteObj,
  ) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createUpdateObj,
      variables: {
        input: gqlArgs({
          spaceId: spaceId,
          userId: userId,
          time: currentDate,
          title: title,
          description: description,
          note: note,
          variant: UpdateVariant.NOTE,
        }),
      },
    });
    const update = payload.data?.createUpdateObj as UpdateObj;
    return update;
  },
  gqlDeleteUpdate: async (updateId: string) => {
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
  gqlUpdateUpdate: async (updateId: string, updatedUpdateObj: UpdateObj) => {
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
  gqlUpdateUpdates: async (updates: UpdateObj[]) => {
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
};
