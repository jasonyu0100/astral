import { userDbWrapper } from '@/(model)/(db)/user/main';
import { UserObj } from '@/(model)/user/main';
import { createContext, useMemo, useState } from 'react';
import {
  BaseCreateActions,
  BaseDeleteActions,
  BaseEditActions,
  BaseGatherActions,
  BaseStateActions,
} from '@/(model)/(controller)/main';
import { ConversationMessageObj } from '@/(model)/space/chapter/chat/conversation/message/main';
import { conversationMessageDbWrapper } from '@/(model)/(db)/space/chapter/chat/conversation/message/main';

type TargetObj = ConversationMessageObj;
const gqlDbWrapper = conversationMessageDbWrapper;
interface ControllerState {
  userId: string;
  user: TargetObj;
}

interface StateActions extends BaseStateActions<TargetObj> {}
interface GatherActions extends BaseGatherActions<TargetObj> {}
interface EditActions extends BaseEditActions<TargetObj> {}
interface CreateActions extends BaseCreateActions<TargetObj> {}
interface DeleteActions extends BaseDeleteActions<TargetObj> {}
interface ControllerActions {
  stateActions: StateActions;
  gatherActions: GatherActions;
  createActions: CreateActions;
  editActions: EditActions;
  deleteActions: DeleteActions;
}

export interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

const useControllerForConversationMessageMain = (targetId: string): Controller => {
  const [obj, changeObj] = useState<TargetObj>({} as TargetObj);

  const controllerState: ControllerState = {
    userId: targetId,
    user: obj,
  };

  const stateActions: StateActions = {
    clear: () => {
      changeObj({} as TargetObj);
    },
  };

  const gatherActions: GatherActions = {
    get: async () => {
      const getObj = await gqlDbWrapper.getObj('id', targetId);
      changeObj(getObj);
      return getObj;
    },
  };

  const createActions: CreateActions = {
    duplicate: async () => {
      const copyObj = obj as Omit<TargetObj, 'id'>;
      const datedCopy = { ...copyObj, created: new Date().toISOString() };
      const newObj = await gqlDbWrapper.createObj(datedCopy);
      return newObj;
    },
  };

  const editActions: EditActions = {
    edit: async (partialObj: Partial<TargetObj>) => {
      const updatedObj = await gqlDbWrapper.updateObj('id', partialObj);
      changeObj(updatedObj);
      return updatedObj;
    },
  };

  const deleteActions: DeleteActions = {
    delete: async () => {
      const deletedObj = await gqlDbWrapper.deleteObj(targetId);
      changeObj({} as TargetObj);
      return deletedObj;
    },
  };

  const controllerActions: ControllerActions = {
    deleteActions: deleteActions,
    stateActions: stateActions,
    gatherActions: gatherActions,
    createActions: createActions,
    editActions: editActions,
  };

  useMemo(() => {
    if (!targetId) {
      changeObj({} as TargetObj);
    } else {
      controllerActions.gatherActions.get();
    }
  }, [controllerActions.gatherActions, targetId]);

  return {
    state: controllerState,
    actions: controllerActions,
  };
};

const ContextForConversationMessageMain = createContext({} as Controller);
export { ContextForConversationMessageMain, useControllerForConversationMessageMain as useControllerForUserObj };
