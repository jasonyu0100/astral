import { ChapterChatObj } from '@/(model)/space/chapter/chat/main';
import { createContext, useMemo, useState } from 'react';
import { chatsGqlHelper } from '@/(db)/(archive-db)/chats/main';

export interface ChatActions {
  updateChats: (chats: ChapterChatObj[]) => ChapterChatObj[];
  updateChat: (chat: ChapterChatObj) => ChapterChatObj;
  selectChat: (chat: ChapterChatObj) => ChapterChatObj;
  listChats: () => Promise<ChapterChatObj[]>;
  createChat: (title: string, description: string) => Promise<ChapterChatObj>;
}

export interface ChatsHandler {
  chat?: ChapterChatObj;
  chats: ChapterChatObj[];
  chatId: string;
  chatActions: ChatActions;
}

export const ChatsHandlerContext = createContext({} as ChatsHandler);

export const useChatsHandler = (chapterId: string): ChatsHandler => {
  const [chats, changeChats] = useState<ChapterChatObj[]>([]);
  const [chatId, changeChatId] = useState<string>(chats?.at(0)?.id || '');

  const chat = chats.filter((chat) => chat.id === chatId).at(0);

  const chatActions: ChatActions = {
    listChats: async () => {
      const chats = await chatsGqlHelper.listFromChapter(chapterId);
      changeChats(chats);
      changeChatId(chats.at(0)?.id || '');
      return chats;
    },
    createChat: async (title: string, description: string) => {
      const chat = await chatsGqlHelper.create(chapterId, title, summary);
      changeChats((prev) => [...prev, chat]);
      changeChatId(chat.id);
      return chat;
    },
    updateChats: (chats: ChapterChatObj[]) => {
      changeChats(chats);
      changeChatId(chats.at(0)?.id || '');
      return chats;
    },
    updateChat: (chat: ChapterChatObj) => {
      changeChatId(chat.id);
      return chat;
    },
    selectChat: (chat: ChapterChatObj) => {
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
