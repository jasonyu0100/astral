import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { LogObj } from '@/(logic)/internal/model/resource/log/main';
import { NoteObj } from '@/(logic)/internal/model/resource/note/main';
import { createUpdateObj } from '@/graphql/mutations';
import { listUpdateObjs } from '@/graphql/queries';
import { UpdateObj, UpdateVariant } from '../../model/update/main';

export interface UpdatesGqlHelper {
    queryListUpdates: (chapterId: string) => Promise<UpdateObj[]>;
    queryCreateFileUpdate: (
        chapterId: string,
        spaceId: string,
        userId: string,
        title: string,
        description: string,
        file: FileObj,
    ) => Promise<UpdateObj>;
    queryCreateLogUpdate: (
        chapterId: string,
        spaceId: string,
        userId: string,
        title: string,
        description: string,
        log: LogObj,
    ) => Promise<UpdateObj>;
    queryCreateStickyUpdate: (
        chapterId: string,
        spaceId: string,
        userId: string,
        title: string,
        description: string,
        note: NoteObj,
    ) => Promise<UpdateObj>;
}

export const gqlHelper = {
  queryListUpdates: async (userId: string) => {
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
    const updates = (payload.data?.listUpdateObjs?.items as UpdateObj[]) || [];
    return updates;
  },
  queryCreateFileUpdate: async (
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
        input: {
          spaceId: spaceId,
          userId: userId,
          time: currentDate,
          title: title,
          description: description,
          file: file,
          variant: UpdateVariant.FILE,
        },
      },
    });
    const update = payload.data?.createUpdateObj as UpdateObj;
    return update;
  },
  queryCreateLogUpdate: async (
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    log: LogObj,
  ) => {
    const currentDate = new Date().toISOString()
    const payload = await amplifyClient.graphql({
      query: createUpdateObj,
      variables: {
        input: {
          spaceId: spaceId,
          userId: userId,
          time: currentDate,
          title: title,
          description: description,
          log: log,
          variant: UpdateVariant.LOG,
        },
      },
    });
    const update = payload.data?.createUpdateObj as UpdateObj;
    return update;
  },
  queryCreateStickyUpdate: async (
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    note: NoteObj,
  ) => {
    const currentDate = new Date().toISOString()
    const payload = await amplifyClient.graphql({
      query: createUpdateObj,
      variables: {
        input: {
          spaceId: spaceId,
          userId: userId,
          time: currentDate,
          title: title,
          description: description,
          note: note,
          variant: UpdateVariant.NOTE,
        },
      },
    });
    const update = payload.data?.createUpdateObj as UpdateObj;
    return update;
  },
};
