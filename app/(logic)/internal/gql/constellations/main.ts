import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { ConstellationObj } from '@/(logic)/internal/model/draft/constellation/main';
import { createConstellationObj } from '@/graphql/mutations';
import { listConstellationObjs } from '@/graphql/queries';

export interface constellationGqlHelper {
  queryListConstellations: (chapterId: string) => Promise<ConstellationObj[]>;
  queryCreateConstellation: (
    chapterId: string,
    title: string,
    description: string,
    variant: string,
  ) => Promise<ConstellationObj>;
}

export const gqlHelper = {
  queryListConstellations: async (chapterId: string) => {
    const payload = await amplifyClient.graphql({
      query: listConstellationObjs,
      variables: {
        filter: {
          chapterId: {
            eq: chapterId,
          },
        },
      },
    });
    const constellations =
      (payload?.data.listConstellationObjs?.items as ConstellationObj[]) || [];
    return constellations;
  },
  queryCreateConstellation: async (
    chapterId: string,
    title: string,
    description: string,
    variant: string,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createConstellationObj,
      variables: {
        input: {
          chapterId,
          title,
          description,
          variant,
        },
      },
    });
    const constellation = payload?.data
      .createConstellationObj as ConstellationObj;
    return constellation;
  },
};
