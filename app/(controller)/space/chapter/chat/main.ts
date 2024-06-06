import { chapterChatDbWrapper } from '@/(db)/space/chapter/chat/main';
import { ChapterChatObj } from '@/(model)/space/chapter/chat/main';
import { createContext, useMemo, useState } from 'react';

interface ControllerActions {
  stateActions: StateActions;
  gatherActions: GatherActions;
  createActions: CreateActions;
  editActions: EditActions;
  deleteActions: DeleteActions;
}

interface ControllerState {
  chat?: ChapterChatObj;
  chats: ChapterChatObj[];
  chatId: string;
}

interface StateActions {
  select: (chat: ChapterChatObj) => ChapterChatObj;
  overwrite: (chats: ChapterChatObj[]) => ChapterChatObj[];
}

interface GatherActions {
  list: () => Promise<ChapterChatObj[]>;
  search: (search: string) => Promise<ChapterChatObj[]>;
}

interface CreateActions {
  create: (title: string, summary: string) => Promise<ChapterChatObj>;
  duplicate: (target: ChapterChatObj) => Promise<ChapterChatObj>;
}

interface EditActions {
  edit: (id: string, chat: ChapterChatObj) => Promise<ChapterChatObj>;
}

interface DeleteActions {
  delete: (id: string) => Promise<ChapterChatObj>;
  deleteMany: (ids: string[]) => Promise<ChapterChatObj[]>;
}

export interface ChapterChatsController {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForChapterChats = createContext({} as ChapterChatsController);

export const useControllerForChapterChats = (chapterId: string): ChapterChatsController => {
  const [chats, changeChats] = useState<ChapterChatObj[]>([]);
  const [chatId, changeChatId] = useState<string>(chats?.at(0)?.id || '');
  const chat = chats.filter((chat) => chat.id === chatId).at(0);

  const controllerState: ControllerState = {
    chats,
    chatId,
    chat,
  }
  
  const stateActions : StateActions = {
    select: (chat: ChapterChatObj) => {
      changeChatId(chat.id);
      return chat;
    },
    overwrite: (chats: ChapterChatObj[]) => {
      changeChats(chats);
      changeChatId(chats.at(0)?.id || '');
      return chats;
    }
  };

  const gatherActions: GatherActions = {
    list: async () => {
      const chats = await chapterChatDbWrapper.listObjs('chapterId', chapterId);
      changeChats(chats);
      changeChatId(chats.at(0)?.id || '');
      return chats;
    },
    search: async (search: string) => {
      const chats = await chapterChatDbWrapper.listFromVariables({
        filter: {
          chapterId: chapterId,
          title: {
            contains: search,
          },
        },
      });
      changeChats(chats);
      changeChatId(chats.at(0)?.id || '');
      return chats;
    }
  };

  const createActions: CreateActions = {
    create: async (title: string, summary: string) => {
      const newObj : Omit<ChapterChatObj, 'id'> = { chapterId, title, summary, time: new Date().toISOString() };
      const chat = await chapterChatDbWrapper.createObj(newObj);
      changeChats((prev) => [...prev, chat]);
      changeChatId(chat.id);
      return chat;
    },
    duplicate: async (target: ChapterChatObj) => {
      const copy = target as Omit<ChapterChatObj, 'id'>;
      const newObj = { ...copy, time: new Date().toISOString() };
      const chat = await chapterChatDbWrapper.createObj(newObj);
      changeChats((prev) => [...prev, chat]);
      changeChatId(chat.id);
      return chat;
    }
  };

  const editActions: EditActions = {
    edit: async (id: string, chat: ChapterChatObj) => {
      const updatedChat = await chapterChatDbWrapper.updateObj(id, chat);
      changeChatId(chat.id);
      return updatedChat;
    },
  };

  const deleteActions: DeleteActions = {
    delete: async (id: string) => {
      const deletedChat = await chapterChatDbWrapper.deleteObj(id);
      changeChats((prev) => prev.filter((chat) => chat.id !== id));
      changeChatId(chats.at(0)?.id || '');
      return deletedChat;
    },
    deleteMany: async (ids: string[]) => {
      const deletedChats = await Promise.all(ids.map((id) => chapterChatDbWrapper.deleteObj(id)));
      changeChats((prev) => prev.filter((chat) => !ids.includes(chat.id)));
      changeChatId(chats.at(0)?.id || '');
      return deletedChats;
    }
  }

  const actions: ControllerActions = {
    deleteActions: deleteActions,
    stateActions: stateActions,
    gatherActions: gatherActions,
    createActions: createActions,
    editActions: editActions,
  }

  useMemo(() => {
    if (!chapterId) {
      changeChats([]);
      return;
    }
    actions.gatherActions.list();
  }, [actions.gatherActions, chapterId]);

  return {
    state: controllerState,
    actions: actions,
  };
};
