import { amplifyClient } from '@/(api)/aws/graphql/main';
import { ChapterChatObj } from '@/(model)/space/chapter/chat/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChatObj,
  deleteChatObj,
  updateChatObj,
} from '@/graphql/mutations';
import { listChatObjs } from '@/graphql/queries';

export interface ChatsGqlHelper {
  listFromChapter: (chapterId: string) => Promise<ChapterChatObj[]>;
  create: (
    chapterId: string,
    title: string,
    summary: string,
  ) => Promise<ChapterChatObj>;
  update: (chatId: string, updatedChatObj: ChapterChatObj) => Promise<ChapterChatObj>;
  delete: (chatId: string) => Promise<ChapterChatObj>;
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
    const chatObjs = (payload.data?.listChatObjs?.items as ChapterChatObj[]) || [];
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
    const chatObj = payload.data?.createChatObj as ChapterChatObj;
    return chatObj;
  },
  update: async (chatId: string, updatedChatObj: ChapterChatObj) => {
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
    const chatObj = payload.data?.updateChatObj as ChapterChatObj;
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
    const chatObj = payload.data?.deleteChatObj as ChapterChatObj;
    return chatObj;
  },
};
