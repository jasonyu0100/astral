import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { ConstellationObj } from '@/(logic)/internal/model/draft/constellation/main';
import { StarObj } from '@/(logic)/internal/model/draft/constellation/star/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { ResourceVariant } from '@/(logic)/internal/model/resource/main';
import { ChapterObj } from '@/(logic)/internal/model/space/chapter/main';
import { SpaceObj } from '@/(logic)/internal/model/space/main';
import { ChatObj } from '@/(logic)/internal/model/storm/chat/main';
import {
  MessageObj,
  MessageSource,
} from '@/(logic)/internal/model/storm/chat/message/main';
import { gqlArgs } from '@/(logic)/utils/clean';
import {
  createSpaceObj,
  createChapterObj,
  createChatObj,
  createConstellationObj,
  createMessageObj,
  createStarObj,
  deleteSpaceObj,
  updateSpaceObj,
} from '@/graphql/mutations';
import { getSpaceObj, listSpaceObjs } from '@/graphql/queries';

export interface SpacesGqlHelper {
  gqlGetSpace: (id: string) => Promise<SpaceObj>;
  gqlCreateSpace: (
    userId: string,
    title: string,
    description: string,
    thumbnail: FileObj,
    variant: string,
  ) => Promise<SpaceObj>;
  gqlListSpaces: (userId: string) => Promise<SpaceObj[]>;
  gqlCreateChapterWithinSpace: (
    title: string,
    description: string,
    idx: number,
    spaceId: string,
  ) => Promise<ChapterObj>;
  gqlCreateChatWithinChapter: (
    title: string,
    summary: string,
    chapterId: string,
  ) => Promise<ChatObj>;
  gqlCreateConstellationWithinChapter: (
    title: string,
    description: string,
    variant: string,
    chapterId: string,
  ) => Promise<ConstellationObj>;
  gqlCreateAgentMessageWithinChat: (
    text: string,
    chatId: string,
  ) => Promise<MessageObj>;
  gqlCreateFileStarWithinConstellation: (
    title: string,
    x: number,
    y: number,
    file: FileObj,
    constellationId: string,
  ) => Promise<StarObj>;
  gqlUpdateSpace: (
    spaceId: string,
    updatedSpaceObj: SpaceObj,
  ) => Promise<SpaceObj>;
  gqlDeleteSpace: (spaceId: string) => Promise<SpaceObj>;
}

export const gqlHelper: SpacesGqlHelper = {
  gqlGetSpace: async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getSpaceObj,
      variables: {
        id: id,
      },
    });

    const spaceObj: SpaceObj = payload?.data.getSpaceObj as SpaceObj;
    return spaceObj;
  },
  gqlCreateSpace: async (
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
  gqlListSpaces: async (userId: string) => {
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
  gqlCreateChapterWithinSpace: async (
    title: string,
    description: string,
    idx: number,
    spaceId: string,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createChapterObj,
      variables: {
        input: gqlArgs({
          title: title,
          description: description,
          spaceId: spaceId,
          idx: idx,
        }),
      },
    });
    const chapterObj = payload.data?.createChapterObj as ChapterObj;
    return chapterObj;
  },
  gqlCreateChatWithinChapter: async (
    title: string,
    summary: string,
    chapterId: string,
  ) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createChatObj,
      variables: {
        input: gqlArgs({
          title: title,
          summary: summary,
          chapterId: chapterId,
          time: currentDate,
        }),
      },
    });
    const chatObj = payload.data?.createChatObj as ChatObj;
    return chatObj;
  },
  gqlCreateConstellationWithinChapter: async (
    title: string,
    description: string,
    variant: string,
    chapterId: string,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createConstellationObj,
      variables: {
        input: gqlArgs({
          chapterId,
          title,
          description,
          variant,
        }),
      },
    });
    const constellationObj = payload?.data
      .createConstellationObj as ConstellationObj;
    return constellationObj;
  },
  gqlCreateAgentMessageWithinChat: async (text: string, chatId: string) => {
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
  gqlCreateFileStarWithinConstellation: async (
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
  gqlDeleteSpace: async (spaceId: string) => {
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
  gqlUpdateSpace: async (spaceId: string, updatedSpaceObj: SpaceObj) => {
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
