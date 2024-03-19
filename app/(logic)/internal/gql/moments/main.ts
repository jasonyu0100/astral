import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import {
  MomentObj,
  MomentVariant,
} from '@/(logic)/internal/model/flow/moment/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { LogObj } from '@/(logic)/internal/model/resource/log/main';
import { NoteObj } from '@/(logic)/internal/model/resource/note/main';
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
    ) => Promise<MomentObj>;
    queryCreateLogMoment: (
        chapterId: string,
        spaceId: string,
        userId: string,
        title: string,
        description: string,
        log: LogObj,
    ) => Promise<MomentObj>;
    queryCreateStickyMoment: (
        chapterId: string,
        spaceId: string,
        userId: string,
        title: string,
        description: string,
        note: NoteObj,
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
          variant: MomentVariant.NOTE,
        },
      },
    });
    const moment = payload.data?.createMomentObj as MomentObj;
    return moment;
  },
};
