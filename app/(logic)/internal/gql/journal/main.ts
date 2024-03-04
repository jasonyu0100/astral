import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { MomentObj } from '@/(logic)/internal/data/infra/model/flow/moment/main';
import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { ResourceVariant } from '@/(logic)/internal/data/infra/model/resource/main';
import { createMomentObj } from '@/graphql/mutations';
import { listMomentObjs } from '@/graphql/queries';

export interface JournalGqlHelper {
  queryListMoments: (
    userId: string,
    visibility: string,
  ) => Promise<MomentObj[]>;
  queryCreateFileMoment: (
    userId: string,
    visibility: string,
    title: string,
    description: string,
    file: FileObj,
    chapterId: string,
    spaceId: string,
  ) => Promise<MomentObj>;
}

export const gqlHelper = {
  queryListMoments: async (userId: string, visibility: string) => {
    const payload = await amplifyClient.graphql({
      query: listMomentObjs,
      variables: {
        filter: {
          userId: {
            eq: userId,
          },
          visibility: {
            eq: visibility,
          },
        },
      },
    });
    const moments = (payload.data?.listMomentObjs?.items as MomentObj[]) || [];
    return moments;
  },
  queryCreateFileMoment: async (
    userId: string,
    visibility: string,
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
        input: {
          chapterId: chapterId,
          spaceId: spaceId,
          userId: userId,
          time: currentDate,
          title: title,
          description: description,
          file: file,
          visibility: visibility,
          variant: ResourceVariant.FILE,
        },
      },
    });
    const moment = payload.data?.createMomentObj as MomentObj;
    return moment;
  },
};
