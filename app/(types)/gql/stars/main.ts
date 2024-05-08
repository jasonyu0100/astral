import { amplifyClient } from '@/(api)/aws/graphql/main';
import { StarObj } from '@/(types)/model/map/constellation/star/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  deleteStarObj,
  updateStarObj,
} from '@/graphql/mutations';
import { listStarObjs } from '@/graphql/queries';
import { StarsCreateGqlHelper, starsCreateGqlHelper } from './create/main';

export interface StarsGqlHelper {
  listFromConstellation: (constellationId: string) => Promise<StarObj[]>;
  create: StarsCreateGqlHelper;
  updateMany: (updatedStarObjs: StarObj[]) => Promise<StarObj[]>;
  update: (starId: string, updatedStarObj: StarObj) => Promise<StarObj>;
  delete: (starId: string) => Promise<StarObj>;
}

export const starsGqlHelper: StarsGqlHelper = {
  create: starsCreateGqlHelper,
  listFromConstellation: async (constellationId: string) => {
    const payload = await amplifyClient.graphql({
      query: listStarObjs,
      variables: {
        filter: {
          constellationId: {
            eq: constellationId,
          },
        },
      },
    });
    const starObjs = (payload?.data.listStarObjs?.items as StarObj[]) || [];
    return starObjs;
  },
  updateMany: async (stars: StarObj[]) => {
    const updatedStarObjs = await Promise.all(
      stars.map(async (star: StarObj) => {
        console.log(star, gqlArgs(star));
        const payload = await amplifyClient.graphql({
          query: updateStarObj,
          variables: {
            input: gqlArgs(star),
          },
        });
        const updatedStar = payload.data?.updateStarObj as StarObj;
        return updatedStar;
      }),
    );
    return updatedStarObjs;
  },
  delete: async (starId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteStarObj,
      variables: {
        input: {
          id: starId,
        },
      },
    });
    const starObj = payload?.data?.deleteStarObj as StarObj;
    return starObj;
  },
  update: async (starId: string, updatedStarObj: StarObj) => {
    const payload = await amplifyClient.graphql({
      query: updateStarObj,
      variables: {
        input: gqlArgs({
          id: starId,
          title: updatedStarObj.title,
          description: updatedStarObj.description,
          x: updatedStarObj.x,
          y: updatedStarObj.y,
          variant: updatedStarObj.variant,
          file: updatedStarObj.file,
          log: updatedStarObj.log,
          link: updatedStarObj.link,
          note: updatedStarObj.note,
        }),
      },
    });
    const updatedStar = payload?.data?.updateStarObj as StarObj;
    return updatedStar;
  },
};
