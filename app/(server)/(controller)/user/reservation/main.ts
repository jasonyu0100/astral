import { userDbWrapper } from '@/(server)/(db)/user/main';
import { UserObj } from '@/(server)/(model)/user/main';
import { createContext, useMemo, useState } from 'react';
import {
  BaseCreateActions,
  BaseDeleteActions,
  BaseEditActions,
  BaseGatherActions,
  BaseStateActions,
} from '@/(server)/(controller)/main';
import { UserReservationObj } from '@/(server)/(model)/user/reservation/main';
import { userReservationDbWrapper } from '@/(server)/(db)/user/reservation/main';
import { amplifyClient } from '@/(api)/aws/graphql/main';
import { gqlArgs } from '@/(utils)/clean';
import { createUserReservationObj } from '@/graphql/mutations';

type TargetObj = UserReservationObj;
const gqlDbWrapper = userReservationDbWrapper;

interface ControllerState {
  objId: string;
  obj: TargetObj;
}

interface StateActions extends BaseStateActions<TargetObj> {}
interface GatherActions extends BaseGatherActions<TargetObj> {}
interface EditActions extends BaseEditActions<TargetObj> {}
interface CreateActions extends BaseCreateActions<TargetObj> {
  reserve: (
    fname: string,
    lname: string,
    email: string,
    role: string,
  ) => Promise<TargetObj>;
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

const useControllerForUserReservationMain = (objId: string): Controller => {
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
      const getObj = await gqlDbWrapper.getObj('id', objId);
      changeObj(getObj);
      return getObj;
    },
  };

  const createActions: CreateActions = {
    reserve: async (
      fname: string,
      lname: string,
      email: string,
      role: string,
    ) => {
      const createObj: Omit<TargetObj, 'id'> = {
        created: new Date().toISOString(),
        fname: fname,
        lname: lname,
        email: email,
        role: role,
      };
      const newObj = await gqlDbWrapper.createObj(createObj);
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

const ContextForUserReservationMain = createContext({} as Controller);
export { ContextForUserReservationMain, useControllerForUserReservationMain };
