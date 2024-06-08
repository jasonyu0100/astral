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
import { UserReservationObj } from '@/(model)/user/reservation/main';
import { userReservationDbWrapper } from '@/(model)/(db)/user/reservation/main';

type TargetObj = UserReservationObj;
const gqlDbWrapper = userReservationDbWrapper;
interface ControllerState {
  userId: string;
  user: TargetObj;
}

interface StateActions extends BaseStateActions<TargetObj> {}
interface GatherActions extends BaseGatherActions<TargetObj> {}
interface EditActions extends BaseEditActions<TargetObj> {}
interface CreateActions extends BaseCreateActions<TargetObj> {
  reserve: (fname: string, lname: string, email: string, role: string) => Promise<TargetObj>;
}
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

const useControllerForUserReservationMain = (targetId: string): Controller => {
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
    reserve: async (fname: string, lname: string, email: string, role: string) => {
      const createObj: Omit<TargetObj, 'id'> = {
        created: new Date().toISOString(),
        fname: fname,
        lname: lname,
        email: email,
        role: role
      };
      console.log(createObj);
      const newObj = await gqlDbWrapper.createObj(createObj);
      console.log(newObj);
      return newObj;
    },
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
  }, [targetId]);

  return {
    state: controllerState,
    actions: controllerActions,
  };
};

const ContextForUserReservationMain = createContext({} as Controller);
export { ContextForUserReservationMain, useControllerForUserReservationMain };
