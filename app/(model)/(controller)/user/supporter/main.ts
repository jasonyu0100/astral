import { userSupporterDbWrapper } from '@/(model)/(db)/user/supporter/main';
import { UserSupporterObj } from '@/(model)/user/supporter/main';
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
  chat: UserSupporterObj;
}

interface StateActions {
}

interface GatherActions {
  get: () => Promise<UserSupporterObj>;
}

interface EditActions {
  edit: (partialObj: Partial<UserSupporterObj>) => Promise<UserSupporterObj>;
}

interface CreateActions {
  duplicate: () => Promise<UserSupporterObj>;
}

interface DeleteActions {
  delete: () => Promise<UserSupporterObj>;
}

export interface UserSupportersController {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForUserSupporter = createContext({} as UserSupportersController);

export const useControllerForUserSupporter = (targetId: string): UserSupportersController => {
  const [userSupporter, changeUserSupporter] = useState<UserSupporterObj>({} as UserSupporterObj);
  const dbWrapper = userSupporterDbWrapper;

  const controllerState: ControllerState = {
    chatId: targetId,
    chat: userSupporter,
  }
  
  const stateActions : StateActions = {
  };

  const gatherActions: GatherActions = {
    get: async () => {
      const getObj = await dbWrapper.getObj('id', targetId);
      changeUserSupporter(getObj);
      return getObj;
    },
  };

  const createActions: CreateActions = {
    duplicate: async () => {
      const copyObj = userSupporter as Omit<UserSupporterObj, 'id'>;
      const datedCopy = { ...copyObj, time: new Date().toISOString() };
      const newObj = await dbWrapper.createObj(datedCopy);
      return newObj;
    }
  };

  const editActions: EditActions = {
    edit: async (partialObj: Partial<UserSupporterObj>) => {
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
      changeUserSupporter({} as UserSupporterObj);
    } else {
      controllerActions.gatherActions.get();
    }
  }, [controllerActions.gatherActions, targetId]);

  return {
    state: controllerState,
    actions: controllerActions,
  };
};
