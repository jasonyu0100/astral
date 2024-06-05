import { amplifyClient } from '@/(api)/aws/graphql/main';
import { FileElem } from '@/(model)/elements/file/main';
import { SpaceObj } from '@/(model)/space/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createSpaceObj,
  deleteSpaceObj,
  updateSpaceObj,
} from '@/graphql/mutations';
import { getSpaceObj, listSpaceObjs } from '@/graphql/queries';

export interface SpacesGqlHelper {
  get: (key: string, value: string) => Promise<SpaceObj>;
  list: (key: string, value: string) => Promise<SpaceObj[]>;
  create: (spaceObj: SpaceObj) => Promise<SpaceObj>;
  update: (
    spaceId: string,
    updatedSpaceObj: SpaceObj,
  ) => Promise<SpaceObj>;
  delete: (spaceId: string) => Promise<SpaceObj>;
}


function castToSpace(obj: any): SpaceObj {
  return obj as SpaceObj;
}

function getSpace(key: string, value: string): Promise<SpaceObj> {
  return amplifyClient.graphql({
    query: getSpaceObj,
    variables: {
      [key]: value,
    },
  }).then((res: any) => castToSpace(res?.data.getSpaceObj));
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
    thumbnail: FileElem,
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
  list: async (userId: string) => {
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
