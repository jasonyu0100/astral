import {
  BaseCreateActions,
  BaseDeleteActions,
  BaseEditActions,
  BaseGatherActions,
  BaseStateActions,
} from '@/(server)/(controller)/main';
import { userDbWrapper } from '@/(server)/(db)/user/main';
import {
  FileElem,
  exampleDisplayPictureFileElem,
} from '@/(server)/(model)/elements/file/main';
import { UserObj } from '@/(server)/(model)/user/main';
import bcrypt from 'bcryptjs';
import { createContext, useMemo, useState } from 'react';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

type TargetObj = UserObj;
const gqlDbWrapper = userDbWrapper;
interface ControllerState {
  objId: string;
  obj: TargetObj;
}
interface StateActions extends BaseStateActions<TargetObj> {
  checkEmail(email: string): Promise<boolean>;
  loginFromEmail(email: string, password: string): Promise<TargetObj>;
  loginFromGoogle(email: string, googleId: string): Promise<TargetObj>;
}
interface GatherActions extends BaseGatherActions<TargetObj> {}
interface EditActions extends BaseEditActions<TargetObj> {}
interface CreateActions extends BaseCreateActions<TargetObj> {
  registerFromEmail(
    fname: string,
    lname: string,
    role: string,
    email: string,
    password: string,
  ): Promise<TargetObj>;
  registerFromGoogle(
    fname: string,
    lname: string,
    email: string,
    googleId: string,
    profilePicture: FileElem,
  ): Promise<TargetObj>;
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

const useControllerForUserMain = (objId: string): Controller => {
  const [obj, changeObj] = useState<TargetObj>({} as TargetObj);

  const controllerState: ControllerState = {
    objId: objId,
    obj: obj,
  };

  const stateActions: StateActions = {
    checkEmail: async (email: string) => {
      const users = await gqlDbWrapper.listFromVariables({
        filter: {
          email: {
            eq: email,
          },
        },
      });
      return users.length > 0;
    },
    loginFromEmail: async (email: string, password: string) => {
      const users = await gqlDbWrapper.listFromVariables({
        filter: {
          email: {
            eq: email,
          },
        },
      });

      if (users.length === 0) {
        throw new Error('Email is invalid');
      } else {
        const user = users[0];
        const check = bcrypt.compare(
          password,
          user.passwordHash,
        ) as unknown as boolean;
        if (!check) {
          throw new Error('Password is invalid');
        } else if (user.subscriptionId === null) {
          const timeDiff =
            new Date().getTime() - new Date(user.created).getTime();
          const daysDifference = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          if (daysDifference > 50) {
            throw new Error('Account trial is over');
          }
        } else {
          const subscription = await stripe.subscriptions.retrieve(
            user.subscriptionId,
          );
          if (subscription.plan.active !== true) {
            throw new Error('Subscription is not active');
          }
        }
        return user;
      }
    },
    loginFromGoogle: async (email: string, googleId: string) => {
      const users = await gqlDbWrapper.listFromVariables({
        filter: {
          email: {
            eq: email,
          },
          googleId: {
            eq: googleId,
          },
        },
      });

      if (users.length === 0) {
        throw new Error('Email is invalid');
      } else {
        const user = users[0];
        if (user.subscriptionId === null) {
          const timeDiff =
            new Date().getTime() - new Date(user.created).getTime();
          const daysDifference = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          if (0 < daysDifference && daysDifference < 14) {
            throw new Error('Account trial is over');
          }
        } else {
          const subscription = await stripe.subscriptions.retrieve(
            user.subscriptionId,
          );
          if (subscription.plan.active !== true) {
            throw new Error('Subscription is not active');
          }
        }
        return user;
      }
    },
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
    registerFromEmail: async (
      fname: string,
      lname: string,
      role: string,
      email: string,
      password: string,
    ) => {
      const emailCheck = await stateActions.checkEmail(email);
      if (emailCheck) {
        return {} as TargetObj;
      }
      const passwordHash = await bcrypt.hash(password, 10);
      const user = await gqlDbWrapper.createObj({
        fname: fname,
        lname: lname,
        email: email,
        passwordHash: passwordHash,
        created: new Date().toISOString(),
        dp: exampleDisplayPictureFileElem,
        displayName: `${fname} ${lname}`,
        role: role,
        bio: `${fname} ${lname} - ${role}`,
        journalId: '',
      });
      return user;
    },
    registerFromGoogle: async (
      fname: string,
      lname: string,
      email: string,
      googleId: string,
      profilePicture: FileElem,
    ) => {
      const emailCheck = await stateActions.checkEmail(email);
      if (emailCheck) {
        return {} as TargetObj;
      }
      const user = await gqlDbWrapper.createObj({
        fname: fname,
        lname: lname,
        email: email,
        created: new Date().toISOString(),
        dp: exampleDisplayPictureFileElem,
        displayName: `${fname} ${lname}`,
        role: '',
        bio: `${fname} ${lname}`,
        journalId: '',
      });
      return user;
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

const ContextForUserMain = createContext({} as Controller);
export { ContextForUserMain, useControllerForUserMain };
