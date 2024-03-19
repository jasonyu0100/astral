import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { ChatObj } from '@/(logic)/internal/model/storm/chat/main';
import { createChatObj } from '@/graphql/mutations';
import { listChatObjs } from '@/graphql/queries';

export interface ChatsGqlHelper {
  queryListChats: (chapterId: string) => Promise<ChatObj[]>;
  queryCreateChat: (
    chapterId: string,
    title: string,
    summary: string,
  ) => Promise<ChatObj>;
}

export const gqlHelper: ChatsGqlHelper = {
  queryListChats: async (chapterId: string) => {
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
    const chats = (payload.data?.listChatObjs?.items as ChatObj[]) || [];
    return chats;
  },
  queryCreateChat: async (
    chapterId: string,
    title: string,
    summary: string,
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
};
