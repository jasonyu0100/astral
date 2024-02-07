import { amplifyClient } from '@/client';
import { createChatObj } from '@/graphql/mutations';
import { listChatObjs } from '@/graphql/queries';
import { ChatObj } from '@/tables/storm/chat/main';
import { chatTable } from '@/tables/storm/table';
import { useEffect, useState } from 'react';

export interface ChatHandler {
  updateChats: (chats: ChatObj[]) => ChatObj[];
  updateChat: (chat: ChatObj) => ChatObj;
  selectChat: (chat: ChatObj) => ChatObj;
  queryListChats: () => Promise<ChatObj[]>;
  queryCreateChat: (title: string, summary: string) => Promise<ChatObj>;
}

export interface useChatInterface {
  chat?: ChatObj;
  chats: ChatObj[];
  chatId: string;
  _chatHandler: ChatHandler;
}

export const useChats = (chapterId: string): useChatInterface => {
  const [chats, changeChats] = useState<ChatObj[]>(chatTable.examples);
  const [chatId, changeChatId] = useState<string>(chats?.at(0)?.id || '');

  const chat = chats.filter((chat) => chat.id === chatId).at(0);

  useEffect(() => {
    if (!chapterId) {
      changeChats([]);
      return;
    }
    _chatHandler.queryListChats();
  }, [chapterId]);

  const gqlHelper = {
    queryListChats: async () => {
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
      const chats = payload.data?.listChatObjs?.items as ChatObj[] || [];
      return chats;
    },
    queryCreateChat: async (title: string, summary: string) => {
      const payload = await amplifyClient.graphql({
        query: createChatObj,
        variables: {
          input: {
            title: title,
            summary: summary,
            chapterId: chapterId,
            time: new Date().toISOString(),
          },
        },
      });
      const chat = payload.data?.createChatObj as ChatObj;
      return chat;
    },
  };

  const _chatHandler: ChatHandler = {
    queryListChats: async () => {
      const chats = await gqlHelper.queryListChats();
      changeChats(chats);
      changeChatId(chats.at(0)?.id || '');
      return chats;
    },
    queryCreateChat: async (title: string, summary: string) => {
      const chat = await gqlHelper.queryCreateChat(title, summary);
      changeChats((prev) => [...prev, chat]);
      changeChatId(chat.id);
      return chat;
    },
    updateChats: (chats: ChatObj[]) => {
      changeChats(chats);
      changeChatId(chats.at(0)?.id || '');
      return chats;
    },
    updateChat: (chat: ChatObj) => {
      changeChatId(chat.id);
      return chat;
    },
    selectChat: (chat: ChatObj) => {
      changeChatId(chat.id);
      return chat;
    },
  };

  return {
    chat,
    chats,
    chatId,
    _chatHandler,
  };
};
