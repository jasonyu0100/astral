import { amplifyClient } from '@/(api)/aws/graphql/main';
import { ChatObj } from '@/(model)/storm/chat/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChatObj,
  deleteChatObj,
  updateChatObj,
} from '@/graphql/mutations';
import { listChatObjs } from '@/graphql/queries';

export interface ChatsGqlHelper {
  listFromChapter: (chapterId: string) => Promise<ChatObj[]>;
  create: (
    chapterId: string,
    title: string,
    summary: string,
  ) => Promise<ChatObj>;
  update: (chatId: string, updatedChatObj: ChatObj) => Promise<ChatObj>;
  delete: (chatId: string) => Promise<ChatObj>;
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
    const chatObjs = (payload.data?.listChatObjs?.items as ChatObj[]) || [];
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
    const chatObj = payload.data?.createChatObj as ChatObj;
    return chatObj;
  },
  update: async (chatId: string, updatedChatObj: ChatObj) => {
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
    const chatObj = payload.data?.updateChatObj as ChatObj;
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
    const chatObj = payload.data?.deleteChatObj as ChatObj;
    return chatObj;
  },
};
