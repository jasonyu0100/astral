import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import {
  MomentObj,
  MomentVariant,
} from '@/(logic)/internal/data/infra/model/flow/moment/main';
import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { LogObj } from '@/(logic)/internal/data/infra/model/resource/log/main';
import { NoteObj } from '@/(logic)/internal/data/infra/model/resource/note/main';
import { createMomentObj } from '@/graphql/mutations';
import { listMomentObjs } from '@/graphql/queries';

export interface MomentsGqlHelper {
    queryListMoments: (chapterId: string) => Promise<MomentObj[]>;
    queryCreateFileMoment: (
        chapterId: string,
        spaceId: string,
        userId: string,
        title: string,
        description: string,
        file: FileObj,
        visibility: string,
    ) => Promise<MomentObj>;
    queryCreateLogMoment: (
        chapterId: string,
        spaceId: string,
        userId: string,
        title: string,
        description: string,
        log: LogObj,
        visibility: string,
    ) => Promise<MomentObj>;
    queryCreateStickyMoment: (
        chapterId: string,
        spaceId: string,
        userId: string,
        title: string,
        description: string,
        note: NoteObj,
        visibility: string,
    ) => Promise<MomentObj>;
}

export const gqlHelper = {
  queryListMoments: async (chapterId: string) => {
    const payload = await amplifyClient.graphql({
      query: listMomentObjs,
      variables: {
        filter: {
          chapterId: {
            eq: chapterId,
          },
        },
      },
    });
    const moments = (payload.data?.listMomentObjs?.items as MomentObj[]) || [];
    return moments;
  },
  queryCreateFileMoment: async (
    chapterId: string,
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    file: FileObj,
    visibility: string,
  ) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createMomentObj,
      variables: {
        input: {
          chapterId: chapterId,
          spaceId: spaceId,
          userId: userId,
          time: currentDate,
          title: title,
          description: description,
          file: file,
          visibility: visibility,
          variant: MomentVariant.FILE,
        },
      },
    });
    const moment = payload.data?.createMomentObj as MomentObj;
    return moment;
  },
  queryCreateLogMoment: async (
    chapterId: string,
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    log: LogObj,
    visibility: string,
  ) => {
    const currentDate = new Date().toISOString()
    const payload = await amplifyClient.graphql({
      query: createMomentObj,
      variables: {
        input: {
          chapterId: chapterId,
          spaceId: spaceId,
          userId: userId,
          time: currentDate,
          title: title,
          description: description,
          log: log,
          visibility: visibility,
          variant: MomentVariant.LOG,
        },
      },
    });
    const moment = payload.data?.createMomentObj as MomentObj;
    return moment;
  },
  queryCreateStickyMoment: async (
    chapterId: string,
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    note: NoteObj,
    visibility: string,
  ) => {
    const currentDate = new Date().toISOString()
    const payload = await amplifyClient.graphql({
      query: createMomentObj,
      variables: {
        input: {
          chapterId: chapterId,
          spaceId: spaceId,
          userId: userId,
          time: currentDate,
          title: title,
          description: description,
          note: note,
          visibility: visibility,
          variant: MomentVariant.NOTE,
        },
      },
    });
    const moment = payload.data?.createMomentObj as MomentObj;
    return moment;
  },
};
