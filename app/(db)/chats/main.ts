import { amplifyClient } from '@/(api)/aws/graphql/main';
import { SpaceChatObj } from '@/(model)/space/chapter/chat/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChatObj,
  deleteChatObj,
  updateChatObj,
} from '@/graphql/mutations';
import { listChatObjs } from '@/graphql/queries';

export interface ChatsGqlHelper {
  listFromChapter: (chapterId: string) => Promise<SpaceChatObj[]>;
  create: (
    chapterId: string,
    title: string,
    summary: string,
  ) => Promise<SpaceChatObj>;
  update: (chatId: string, updatedChatObj: SpaceChatObj) => Promise<SpaceChatObj>;
  delete: (chatId: string) => Promise<SpaceChatObj>;
}

export const chatsGqlHelper: ChatsGqlHelper = {
  listFromChapter: async (chapterId: string) => {
    const payload = await amplifyClient.graphql({
      query: listChatObjs,
      variables: {
        filter: {
          chapterId: {
            eq: chapterId,
          },
        },
      },
    });
    const chatObjs = (payload.data?.listChatObjs?.items as SpaceChatObj[]) || [];
    return chatObjs;
  },
  create: async (chapterId: string, title: string, summary: string) => {
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
    const chatObj = payload.data?.createChatObj as SpaceChatObj;
    return chatObj;
  },
  update: async (chatId: string, updatedChatObj: SpaceChatObj) => {
    const payload = await amplifyClient.graphql({
      query: updateChatObj,
      variables: {
        input: gqlArgs({
          id: chatId,
          chapterId: updatedChatObj.chapterId,
          title: updatedChatObj.title,
          summary: updatedChatObj.summary,
          time: updatedChatObj.time,
        }),
      },
    });
    const chatObj = payload.data?.updateChatObj as SpaceChatObj;
    return chatObj;
  },
  delete: async (chatId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteChatObj,
      variables: {
        input: {
          id: chatId,
        },
      },
    });
    const chatObj = payload.data?.deleteChatObj as SpaceChatObj;
    return chatObj;
  },
};
