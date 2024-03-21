import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import {
  MomentObj,
  MomentVariant,
} from '@/(logic)/internal/model/flow/moment/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { LogObj } from '@/(logic)/internal/model/resource/log/main';
import { NoteObj } from '@/(logic)/internal/model/resource/note/main';
import { gqlArgs } from '@/(logic)/utils/clean';
import {
  createMomentObj,
  deleteMomentObj,
  updateMomentObj,
} from '@/graphql/mutations';
import { listMomentObjs } from '@/graphql/queries';

export interface MomentsGqlHelper {
  gqlListMoments: (chapterId: string) => Promise<MomentObj[]>;
  gqlCreateFileMoment: (
    chapterId: string,
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    file: FileObj,
  ) => Promise<MomentObj>;
  gqlCreateLogMoment: (
    chapterId: string,
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    log: LogObj,
  ) => Promise<MomentObj>;
  gqlCreateStickyMoment: (
    chapterId: string,
    spaceId: string,
    userId: string,
    title: string,
    description: string,
    note: NoteObj,
  ) => Promise<MomentObj>;
  gqlDeleteMoment: (momentId: string) => Promise<MomentObj>;
  gqlUpdateMoment: (
    momentId: string,
    updatedMomentObj: MomentObj,
  ) => Promise<MomentObj>;
}

export const gqlHelper: MomentsGqlHelper = {
  gqlListMoments: async (chapterId: string) => {
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
    const momentObjs =
      (payload.data?.listMomentObjs?.items as MomentObj[]) || [];
    return momentObjs;
  },
  gqlCreateFileMoment: async (
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
  gqlCreateLogMoment: async (
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
  gqlCreateStickyMoment: async (
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
  gqlDeleteMoment: async (momentId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteMomentObj,
      variables: {
        input: {
          id: momentId,
        },
      },
    });
    const momentObj = payload.data?.deleteMomentObj as MomentObj;
    return momentObj;
  },
  gqlUpdateMoment: async (momentId: string, updatedMomentObj: MomentObj) => {
    const payload = await amplifyClient.graphql({
      query: updateMomentObj,
      variables: {
        input: gqlArgs({
          id: momentId,
          chapterId: updatedMomentObj.chapterId,
          spaceId: updatedMomentObj.spaceId,
          userId: updatedMomentObj.userId,
          time: updatedMomentObj.time,
          description: updatedMomentObj.description,
          variant: updatedMomentObj.variant,
          file: updatedMomentObj.file,
          log: updatedMomentObj.log,
          link: updatedMomentObj.link,
          note: updatedMomentObj.note,
        }),
      },
    });
    const momentObj = payload.data?.updateMomentObj as MomentObj;
    return momentObj;
  },
};
