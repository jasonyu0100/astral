import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { MomentObj } from '@/(logic)/internal/model/flow/moment/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { ResourceVariant } from '@/(logic)/internal/model/resource/main';
import { gqlArgs } from '@/(logic)/utils/clean';
import { createMomentObj } from '@/graphql/mutations';
import { listMomentObjs } from '@/graphql/queries';

export interface JournalGqlHelper {
  gqlListMoments: (
    userId: string,
    visibility: string,
  ) => Promise<MomentObj[]>;
  gqlCreateFileMoment: (
    userId: string,
    title: string,
    description: string,
    file: FileObj,
    chapterId: string,
    spaceId: string,
  ) => Promise<MomentObj>;
}

export const gqlHelper = {
  queryListMoments: async (userId: string) => {
    const payload = await amplifyClient.graphql({
      query: listMomentObjs,
      variables: {
        filter: {
          userId: {
            eq: userId,
          },
        },
      },
    });
    const moments = (payload.data?.listMomentObjs?.items as MomentObj[]) || [];
    return moments;
  },
  queryCreateFileMoment: async (
    userId: string,
    title: string,
    description: string,
    file: FileObj,
    chapterId: string,
    spaceId: string,
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
          variant: ResourceVariant.FILE,
        }),
      },
    });
    const moment = payload.data?.createMomentObj as MomentObj;
    return moment;
  },
};
