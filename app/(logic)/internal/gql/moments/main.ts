import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { MomentObj } from '@/(logic)/internal/model/journal/moment/main';
import { gqlArgs } from '@/(logic)/utils/clean';
import { deleteMomentObj, updateMomentObj } from '@/graphql/mutations';
import { listMomentObjs } from '@/graphql/queries';
import { MomentsCreateGqlHelper, momentsCreateGqlHelper } from './create/main';

export interface MomentsGqlHelper {
  create: MomentsCreateGqlHelper;
  listFromChapter: (chapterId: string) => Promise<MomentObj[]>;
  delete: (momentId: string) => Promise<MomentObj>;
  update: (momentId: string, updatedMomentObj: MomentObj) => Promise<MomentObj>;
}

export const momentsGqlHelper: MomentsGqlHelper = {
  create: momentsCreateGqlHelper,
  listFromChapter: async (chapterId: string) => {
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
  delete: async (momentId: string) => {
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
  update: async (momentId: string, updatedMomentObj: MomentObj) => {
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
