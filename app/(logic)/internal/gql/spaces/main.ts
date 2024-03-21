import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { StarObj } from '@/(logic)/internal/model/draft/constellation/star/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { ResourceVariant } from '@/(logic)/internal/model/resource/main';
import { SpaceObj } from '@/(logic)/internal/model/space/main';
import {
  MessageObj,
  MessageSource,
} from '@/(logic)/internal/model/storm/chat/message/main';
import { gqlArgs } from '@/(logic)/utils/clean';
import {
  createSpaceObj,
  createMessageObj,
  createStarObj,
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
  createMessageInside: async (text: string, chatId: string) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createMessageObj,
      variables: {
        input: gqlArgs({
          chatId: chatId,
          source: MessageSource.AGENT,
          time: currentDate,
          message: text,
        }),
      },
    });
    const messageObj = payload.data?.createMessageObj as MessageObj;
    return messageObj;
  },
  createStarInside: async (
    title: string,
    x: number,
    y: number,
    file: FileObj,
    constellationId: string,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createStarObj,
      variables: {
        input: gqlArgs({
          constellationId: constellationId,
          title: title,
          description: '',
          x: x,
          y: y,
          file: file,
          variant: ResourceVariant.FILE,
        }),
      },
    });
    const starObj = payload?.data.createStarObj as StarObj;
    return starObj;
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
