import {
  BaseCreateActions,
  BaseDeleteActions,
  BaseEditActions,
  BaseGatherActions,
  BaseStateActions,
} from '@/(server)/(controller)/main';
import { spaceDbWrapper } from '@/(server)/(db)/space/main';
import { SpaceObj } from '@/(server)/(model)/space/main';
import { createContext, useMemo, useState } from 'react';

type TargetObj = SpaceObj;
const gqlDbWrapper = spaceDbWrapper;

interface ControllerState {
  objId: string;
  obj: TargetObj;
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

const useControllerForSpaceMain = (objId: string): Controller => {
  const [obj, changeObj] = useState<TargetObj>({} as TargetObj);

  const controllerState: ControllerState = {
    objId: objId,
    obj: obj,
  };

  const stateActions: StateActions = {
    clear: () => {
      changeObj({} as TargetObj);
    },
    update: (newObj: Partial<TargetObj>) => {
      changeObj({ ...obj, ...newObj });
    },
  };

  const gatherActions: GatherActions = {
    get: async () => {
      const getObj = await gqlDbWrapper.getObj(objId);
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
    sync: async () => {
      const updatedObj = await gqlDbWrapper.updateObj('id', obj);
      changeObj(updatedObj);
      return updatedObj;
    },
  };

  const deleteActions: DeleteActions = {
    delete: async () => {
      const deletedObj = await gqlDbWrapper.deleteObj(objId);
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
    if (!objId) {
      changeObj({} as TargetObj);
    } else {
      controllerActions.gatherActions.get();
    }
  }, [objId]);

  return {
    state: controllerState,
    actions: controllerActions,
  };
};

const ContextForSpaceMain = createContext({} as Controller);
export { ContextForSpaceMain, useControllerForSpaceMain };
