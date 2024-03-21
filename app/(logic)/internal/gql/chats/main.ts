import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { ChatObj } from '@/(logic)/internal/model/storm/chat/main';
import { gqlArgs } from '@/(logic)/utils/clean';
import {
  createChatObj,
  deleteChatObj,
  updateChatObj,
} from '@/graphql/mutations';
import { listChatObjs } from '@/graphql/queries';

export interface ChatsGqlHelper {
  gqlListChats: (chapterId: string) => Promise<ChatObj[]>;
  gqlCreateChat: (
    chapterId: string,
    title: string,
    summary: string,
  ) => Promise<ChatObj>;
  gqlUpdateChat: (chatId: string, updatedChatObj: ChatObj) => Promise<ChatObj>;
  gqlDeleteChat: (chatId: string) => Promise<ChatObj>;
}

export const gqlHelper: ChatsGqlHelper = {
  gqlListChats: async (chapterId: string) => {
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
  gqlCreateChat: async (chapterId: string, title: string, summary: string) => {
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
  gqlUpdateChat: async (chatId: string, updatedChatObj: ChatObj) => {
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
  gqlDeleteChat: async (chatId: string) => {
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
