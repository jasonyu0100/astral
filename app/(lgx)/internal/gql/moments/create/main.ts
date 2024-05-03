import { amplifyClient } from '@/(lgx)/external/aws/graphql/main';
import {
  MomentObj,
  MomentVariant,
} from '@/(lgx)/internal/model/journal/moment/main';
import { FileObj } from '@/(lgx)/internal/model/resource/file/main';
import { LogObj } from '@/(lgx)/internal/model/resource/log/main';
import { NoteObj } from '@/(lgx)/internal/model/resource/note/main';
import { gqlArgs } from '@/(lgx)/utils/clean';
import {
  createMomentObj,
} from '@/graphql/mutations';

export interface MomentsCreateGqlHelper {
  createFromFile: (
    chapterId: string,
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    file: FileObj,
  ) => Promise<MomentObj>;
  createFromLog: (
    chapterId: string,
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    log: LogObj,
  ) => Promise<MomentObj>;
  createFromNote: (
    chapterId: string,
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    note: NoteObj,
  ) => Promise<MomentObj>;
}

export const momentsCreateGqlHelper: MomentsCreateGqlHelper = {
  createFromFile: async (
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
        input: gqlArgs({
          chapterId: chapterId,
          spaceId: spaceId,
          userId: userId,
          time: currentDate,
          title: title,
          description: description,
          file: file,
          variant: MomentVariant.FILE,
        }),
      },
    });
    const momentObj = payload.data?.createMomentObj as MomentObj;
    return momentObj;
  },
  createFromLog: async (
    chapterId: string,
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    log: LogObj,
  ) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createMomentObj,
      variables: {
        input: gqlArgs({
          chapterId: chapterId,
          spaceId: spaceId,
          userId: userId,
          time: currentDate,
          title: title,
          description: description,
          log: log,
          variant: MomentVariant.LOG,
        }),
      },
    });
    const momentObj = payload.data?.createMomentObj as MomentObj;
    return momentObj;
  },
  createFromNote: async (
    chapterId: string,
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    note: NoteObj,
  ) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createMomentObj,
      variables: {
        input: gqlArgs({
          chapterId: chapterId,
          spaceId: spaceId,
          userId: userId,
          time: currentDate,
          title: title,
          description: description,
          note: note,
          variant: MomentVariant.NOTE,
        }),
      },
    });
    const momentObj = payload.data?.createMomentObj as MomentObj;
    return momentObj;
  },
};

