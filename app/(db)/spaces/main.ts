import { amplifyClient } from '@/(api)/aws/graphql/main';
import { FileObj } from '@/(model)/media/resource/file/main';
import { SpaceObj } from '@/(model)/space/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createSpaceObj,
  deleteSpaceObj,
  updateSpaceObj,
} from '@/graphql/mutations';
import { getSpaceObj, listSpaceObjs } from '@/graphql/queries';

export interface SpacesGqlHelper {
  get: (id: string) => Promise<SpaceObj>;
  listFromUser: (userId: string) => Promise<SpaceObj[]>;
  create: (
    userId: string,
    title: string,
    description: string,
    thumbnail: FileObj,
    variant: string,
  ) => Promise<SpaceObj>;
  update: (
    spaceId: string,
    updatedSpaceObj: SpaceObj,
  ) => Promise<SpaceObj>;
  delete: (spaceId: string) => Promise<SpaceObj>;
}

export const spacesGqlHelper: SpacesGqlHelper = {
  get: async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getSpaceObj,
      variables: {
        id: id,
      },
    });

    const spaceObj: SpaceObj = payload?.data.getSpaceObj as SpaceObj;
    return spaceObj;
  },
  create: async (
    userId: string,
    title: string,
    description: string,
    thumbnail: FileObj,
    variant: string,
  ) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createSpaceObj,
      variables: {
        input: gqlArgs({
          userId: userId,
          title: title,
          description: description,
          time: currentDate,
          thumbnail: thumbnail,
          variant: variant,
        }),
      },
    });
    const spaceObj = payload?.data?.createSpaceObj as SpaceObj;
    return spaceObj;
  },
  listFromUser: async (userId: string) => {
    const payload = await amplifyClient.graphql({
      query: listSpaceObjs,
      variables: {
        filter: {
          userId: {
            eq: userId,
          },
        },
      },
    });
    const spaceObjs = (payload?.data?.listSpaceObjs?.items as SpaceObj[]) || [];
    return spaceObjs;
  },
  delete: async (spaceId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteSpaceObj,
      variables: {
        input: {
          id: spaceId,
        },
      },
    });
    const spaceObj = payload?.data?.deleteSpaceObj as SpaceObj;
    return spaceObj;
  },
  update: async (spaceId: string, updatedSpaceObj: SpaceObj) => {
    const payload = await amplifyClient.graphql({
      query: updateSpaceObj,
      variables: {
        input: gqlArgs({
          id: spaceId,
          userId: updatedSpaceObj.userId,
          title: updatedSpaceObj.title,
          time: updatedSpaceObj.time,
          description: updatedSpaceObj.description,
          thumbnail: updatedSpaceObj.thumbnail,
          variant: updatedSpaceObj.variant,
          moveId: updatedSpaceObj.moveId,
        }),
      },
    });
    const spaceObj = payload?.data?.updateSpaceObj as SpaceObj;
    return spaceObj;
  },
};
