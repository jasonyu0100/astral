import { SpaceChatObj } from '@/(model)/space/chapter/chat/main';
import { createContext, useMemo, useState } from 'react';
import { chatsGqlHelper } from '@/(db)/chats/main';

export interface ChatActions {
  updateChats: (chats: SpaceChatObj[]) => SpaceChatObj[];
  updateChat: (chat: SpaceChatObj) => SpaceChatObj;
  selectChat: (chat: SpaceChatObj) => SpaceChatObj;
  listChats: () => Promise<SpaceChatObj[]>;
  createChat: (title: string, summary: string) => Promise<SpaceChatObj>;
}

export interface ChatsHandler {
  chat?: SpaceChatObj;
  chats: SpaceChatObj[];
  chatId: string;
  chatActions: ChatActions;
}

export const ChatsHandlerContext = createContext({} as ChatsHandler);

export const useChatsHandler = (chapterId: string): ChatsHandler => {
  const [chats, changeChats] = useState<SpaceChatObj[]>([]);
  const [chatId, changeChatId] = useState<string>(chats?.at(0)?.id || '');

  const chat = chats.filter((chat) => chat.id === chatId).at(0);

  const chatActions: ChatActions = {
    listChats: async () => {
      const chats = await chatsGqlHelper.listFromChapter(chapterId);
      changeChats(chats);
      changeChatId(chats.at(0)?.id || '');
      return chats;
    },
    createChat: async (title: string, summary: string) => {
      const chat = await chatsGqlHelper.create(chapterId, title, summary);
      changeChats((prev) => [...prev, chat]);
      changeChatId(chat.id);
      return chat;
    },
    updateChats: (chats: SpaceChatObj[]) => {
      changeChats(chats);
      changeChatId(chats.at(0)?.id || '');
      return chats;
    },
    updateChat: (chat: SpaceChatObj) => {
      changeChatId(chat.id);
      return chat;
    },
    selectChat: (chat: SpaceChatObj) => {
      changeChatId(chat.id);
      return chat;
    },
  };

  useMemo(() => {
    if (!chapterId) {
      changeChats([]);
      return;
    }
    chatActions.listChats();
  }, [chapterId]);

  return {
    chat,
    chats,
    chatId,
    chatActions,
  };
};
