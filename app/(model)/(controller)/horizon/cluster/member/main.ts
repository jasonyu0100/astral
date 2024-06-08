import { chapterChatDbWrapper } from '@/(model)/(db)/space/chapter/chat/main';
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
  chatId: string;
  chat: ChapterChatObj;
}

interface StateActions {
}

interface GatherActions {
  get: () => Promise<ChapterChatObj>;
}

interface EditActions {
  edit: (partialObj: Partial<ChapterChatObj>) => Promise<ChapterChatObj>;
}

interface CreateActions {
  duplicate: () => Promise<ChapterChatObj>;
}

interface DeleteActions {
  delete: () => Promise<ChapterChatObj>;
}

export interface ChapterChatsController {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForChapterChat = createContext({} as ChapterChatsController);

export const useControllerForChapterChat = (targetId: string): ChapterChatsController => {
  const [chapterChat, changeChapterChat] = useState<ChapterChatObj>({} as ChapterChatObj);
  const dbWrapper = chapterChatDbWrapper;

  const controllerState: ControllerState = {
    chatId: targetId,
    chat: chapterChat,
  }
  
  const stateActions : StateActions = {
  };

  const gatherActions: GatherActions = {
    get: async () => {
      const getObj = await dbWrapper.getObj('id', targetId);
      changeChapterChat(getObj);
      return getObj;
    },
  };

  const createActions: CreateActions = {
    duplicate: async () => {
      const copyObj = chapterChat as Omit<ChapterChatObj, 'id'>;
      const datedCopy = { ...copyObj, created: new Date().toISOString() };
      const newObj = await dbWrapper.createObj(datedCopy);
      return newObj;
    }
  };

  const editActions: EditActions = {
    edit: async (partialObj: Partial<ChapterChatObj>) => {
      const updatedObj = await dbWrapper.updateObj("id", partialObj);
      return updatedObj;
    },
  };

  const deleteActions: DeleteActions = {
    delete: async () => {
      const deletedObj = await dbWrapper.deleteObj(targetId);
      return deletedObj;
    },
  }

  const controllerActions: ControllerActions = {
    deleteActions: deleteActions,
    stateActions: stateActions,
    gatherActions: gatherActions,
    createActions: createActions,
    editActions: editActions,
  }

  useMemo(() => {
    if (!targetId) {
      changeChapterChat({} as ChapterChatObj);
    } else {
      controllerActions.gatherActions.get();
    }
  }, [controllerActions.gatherActions, targetId]);

  return {
    state: controllerState,
    actions: controllerActions,
  };
};
