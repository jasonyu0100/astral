import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import {
  createUpdateObj,
} from '@/graphql/mutations';
import { UpdateObj, UpdateVariant } from '@/(logic)/internal/model/update/main';
import { gqlArgs } from '@/(logic)/utils/clean';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { LogObj } from '@/(logic)/internal/model/resource/log/main';
import { NoteObj } from '@/(logic)/internal/model/resource/note/main';

export interface UpdatesCreateGqlHelper {
  createFromFile: (
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    file: FileObj,
  ) => Promise<UpdateObj>;
  createFromLog: (
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    log: LogObj,
  ) => Promise<UpdateObj>;
  createFromNote: (
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    note: NoteObj,
  ) => Promise<UpdateObj>;
}

export const updatesCreateGqlHelper: UpdatesCreateGqlHelper = {
  createFromFile: async (
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
  createFromLog: async (
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
  createFromNote: async (
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
};

