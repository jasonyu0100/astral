import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { ConstellationObj } from '@/(logic)/internal/data/infra/model/draft/constellation/main';
import { StarObj } from '@/(logic)/internal/data/infra/model/draft/constellation/star/main';
import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { ResourceVariant } from '@/(logic)/internal/data/infra/model/resource/main';
import { ChapterObj } from '@/(logic)/internal/data/infra/model/space/chapter/main';
import { SpaceObj } from '@/(logic)/internal/data/infra/model/space/main';
import { ChatObj } from '@/(logic)/internal/data/infra/model/storm/chat/main';
import { MessageObj, MessageSource } from '@/(logic)/internal/data/infra/model/storm/chat/message/main';
import {
  createSpaceObj,
  createChapterObj,
  createChatObj,
  createConstellationObj,
  createMessageObj,
  createStarObj,
} from '@/graphql/mutations';
import { getSpaceObj, listSpaceObjs } from '@/graphql/queries';

export interface SpacesGqlHelper {
    queryGetSpace: (id: string) => Promise<SpaceObj>,
    queryCreateSpace: (
        userId: string,
        title: string,
        description: string,
        thumbnail: FileObj,
        variant: string,
    ) => Promise<SpaceObj>;
    queryListSpaces: (userId: string) => Promise<SpaceObj[]>;
    queryCreateChapterWithinSpace: (
        title: string,
        description: string,
        idx: number,
        spaceId: string,
    ) => Promise<ChapterObj>;
    queryCreateChatWithinChapter: (
        title: string,
        summary: string,
        chapterId: string,
    ) => Promise<ChatObj>;
    queryCreateConstellationWithinChapter: (
        title: string,
        description: string,
        variant: string,
        chapterId: string,
    ) => Promise<ConstellationObj>;
    queryCreateAgentMessageWithinChat: (
        text: string,
        chatId: string,
    ) => Promise<MessageObj>;
    queryCreateFileStarWithinConstellation: (
        title: string,
        x: number,
        y: number,
        file: FileObj,
        constellationId: string,
    ) => Promise<StarObj>;
}

export const gqlHelper: SpacesGqlHelper = {
  queryGetSpace: async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getSpaceObj,
      variables: {
        id: id,
      },
    });

    const space: SpaceObj = payload?.data.getSpaceObj as SpaceObj;
    return space;
  },
  queryCreateSpace: async (
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
        input: {
          userId: userId,
          title,
          description,
          time: currentDate,
          thumbnail,
          variant: variant,
        },
      },
    });
    const space = payload?.data?.createSpaceObj as SpaceObj;
    return space;
  },
  queryListSpaces: async (userId: string) => {
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
    const spaces = (payload?.data?.listSpaceObjs?.items as SpaceObj[]) || [];
    return spaces;
  },
  queryCreateChapterWithinSpace: async (
    title: string,
    description: string,
    idx: number,
    spaceId: string,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createChapterObj,
      variables: {
        input: {
          title,
          description,
          spaceId,
          idx,
        },
      },
    });
    const chapter = payload.data?.createChapterObj as ChapterObj;
    return chapter;
  },
  queryCreateChatWithinChapter: async (
    title: string,
    summary: string,
    chapterId: string,
  ) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createChatObj,
      variables: {
        input: {
          title: title,
          summary: summary,
          chapterId: chapterId,
          time: currentDate,
        },
      },
    });
    const chat = payload.data?.createChatObj as ChatObj;
    return chat;
  },
  queryCreateConstellationWithinChapter: async (
    title: string,
    description: string,
    variant: string,
    chapterId: string,
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
  queryCreateAgentMessageWithinChat: async (text: string, chatId: string) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createMessageObj,
      variables: {
        input: {
          chatId: chatId,
          source: MessageSource.AGENT,
          time: currentDate,
          message: text,
        },
      },
    });
    const message = payload.data?.createMessageObj as MessageObj;
    return message;
  },
  queryCreateFileStarWithinConstellation: async (
    title: string,
    x: number,
    y: number,
    file: FileObj,
    constellationId: string,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createStarObj,
      variables: {
        input: {
          constellationId: constellationId,
          title: title,
          description: '',
          x,
          y,
          file: {
            id: file.id,
            src: file.src,
            title: file.title,
            size: file.size,
            fileType: file.fileType,
            variant: file.variant,
          },
          variant: ResourceVariant.FILE,
        },
      },
    });
    const star = payload?.data.createStarObj as StarObj;
    return star;
  },
};
