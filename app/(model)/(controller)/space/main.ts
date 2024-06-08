import { UserObj } from '@/(model)/user/main';
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
  chat: UserObj;
}

interface StateActions {
}

interface GatherActions {
  get: () => Promise<UserObj>;
}

interface EditActions {
  edit: (partialObj: Partial<UserObj>) => Promise<UserObj>;
}

interface CreateActions {
  duplicate: () => Promise<UserObj>;
}

interface DeleteActions {
  delete: () => Promise<UserObj>;
}

export interface ChapterChatsController {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForChapterChat = createContext({} as ChapterChatsController);

export const useControllerForChapterChat = (targetId: string): ChapterChatsController => {
  const [chapterChat, changeChapterChat] = useState<UserObj>({} as UserObj);
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
      const copyObj = chapterChat as Omit<UserObj, 'id'>;
      const datedCopy = { ...copyObj, created: new Date().toISOString() };
      const newObj = await dbWrapper.createObj(datedCopy);
      return newObj;
    }
  };

  const editActions: EditActions = {
    edit: async (partialObj: Partial<UserObj>) => {
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
      changeChapterChat({} as UserObj);
    } else {
      controllerActions.gatherActions.get();
    }
  }, [controllerActions.gatherActions, targetId]);

  return {
    state: controllerState,
    actions: controllerActions,
  };
};
