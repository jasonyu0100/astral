import { ChatObj } from '@/(logic)/internal/data/infra/model/storm/chat/main';
import { chatTable } from '@/(logic)/internal/data/infra/model/storm/table';
import { createContext, useMemo, useState } from 'react';
import { gqlHelper } from '@/(logic)/internal/gql/chats/main';

export interface ChatActions {
  updateChats: (chats: ChatObj[]) => ChatObj[];
  updateChat: (chat: ChatObj) => ChatObj;
  selectChat: (chat: ChatObj) => ChatObj;
  queryListChats: () => Promise<ChatObj[]>;
  queryCreateChat: (title: string, summary: string) => Promise<ChatObj>;
}

export interface ChatsHandler {
  chat?: ChatObj;
  chats: ChatObj[];
  chatId: string;
  chatActions: ChatActions;
}

export const ChatsHandlerContext = createContext({} as ChatsHandler);

export const useChatsHandler = (chapterId: string): ChatsHandler => {
  const [chats, changeChats] = useState<ChatObj[]>(chatTable.examples);
  const [chatId, changeChatId] = useState<string>(chats?.at(0)?.id || '');

  const chat = chats.filter((chat) => chat.id === chatId).at(0);

  const chatActions: ChatActions = {
    queryListChats: async () => {
      const chats = await gqlHelper.queryListChats(chapterId);
      changeChats(chats);
      changeChatId(chats.at(0)?.id || '');
      return chats;
    },
    queryCreateChat: async (title: string, summary: string) => {
      const chat = await gqlHelper.queryCreateChat(chapterId, title, summary);
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

  useMemo(() => {
    if (!chapterId) {
      changeChats([]);
      return;
    }
    chatActions.queryListChats();
  }, [chapterId]);

  return {
    chat,
    chats,
    chatId,
    chatActions: chatActions,
  };
};
