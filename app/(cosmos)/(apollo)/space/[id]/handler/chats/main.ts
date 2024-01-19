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
  addChat: (chat: ChatObj) => ChatObj;
  queryListChats: () => Promise<ChatObj[]>;
  queryCreateChat: (title: string, summary: string) => Promise<ChatObj>;
}

export interface useChatInterface {
  chat?: ChatObj;
  chats: ChatObj[];
  chatId: string;
  _chatHandler: ChatHandler;
}

export const useChat = (chapterId: string): useChatInterface => {
  const [chats, changeChats] = useState<ChatObj[]>(chatTable.examples);
  const [chatId, changeChatId] = useState<string>(chats?.at(0)?.id || '');

  const chat = chats.filter((chat) => chat.id === chatId).at(0);

  useEffect(() => {
    _chatHandler.queryListChats().then((chats) => {
      changeChats(chats);
      const chatId = chats.at(0)?.id || '';
      changeChatId(chatId);
    });
  }, [chapterId]);

  const _chatHandler: ChatHandler = {
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
      const chats = payload.data?.listChatObjs?.items as ChatObj[];
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
    updateChats: (chats: ChatObj[]) => {
      changeChats(chats);
      changeChatId(chats.at(0)?.id || '');
      const chat = chats.filter((chat) => chat.id === chatId).at(0);
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
    addChat: (chat: ChatObj) => {
      changeChats((prev) => [...prev, chat]);
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
