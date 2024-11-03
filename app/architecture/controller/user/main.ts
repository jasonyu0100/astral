import { userDbWrapper } from '@/architecture/client/user/main';
import {
  BaseCreateActions,
  BaseDeleteActions,
  BaseEditActions,
  BaseGatherActions,
  BaseStateActions,
} from '@/architecture/controller/main';
import { exampleDisplayPictureFileElement } from '@/architecture/model/elements/file/main';
import { UserObj, UserProfileVisibility } from '@/architecture/model/user/main';
import bcrypt from 'bcryptjs';
import { createContext, useMemo, useState } from 'react';
const STRIPE_SK =
  process.env.LIVE_MODE === 'true'
    ? process.env.STRIPE_SK_LIVE
    : process.env.STRIPE_SK_TEST;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require('stripe')(STRIPE_SK);

type TargetObj = UserObj;
const gqlDbWrapper = userDbWrapper;
interface ControllerState {
  objId: string;
  obj: TargetObj;
}
interface StateActions extends BaseStateActions<TargetObj> {
  checkEmail(email: string): Promise<boolean>;
  loginFromEmail(email: string, password: string): Promise<TargetObj>;
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
  ): Promise<TargetObj | undefined>;
}
interface DeleteActions extends BaseDeleteActions<TargetObj> {}
interface ControllerActions {
  stateActions: StateActions;
  gatherActions: GatherActions;
  createActions: CreateActions;
  editActions: EditActions;
  deleteActions: DeleteActions;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const useControllerForUserMain = (objId: string): Controller => {
  const [obj, changeObj] = useState<TargetObj>({} as TargetObj);

  const controllerState: ControllerState = {
    objId: objId,
    obj: obj,
  };

  const stateActions: StateActions = {
    checkEmail: async (email: string) => {
      // Email validation regex pattern
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Check if email is valid
      if (!emailRegex.test(email)) {
        alert('Invalid email format');
        return false; // Invalid email format
      }

      // Proceed with database query if email is valid
      const usersWithSameEmail = await gqlDbWrapper.listFromVariables({
        filter: {
          email: {
            eq: email,
          },
        },
      });

      if (usersWithSameEmail.length > 0) {
        alert('Email already registered');
        return false;
      }

      return true;
    },
    loginFromEmail: async (email: string, password: string) => {
      const returnedUsers = await gqlDbWrapper.listFromVariables({
        filter: {
          email: {
            eq: email,
          },
        },
      });

      if (returnedUsers.length === 0) {
        alert('User is invalid');
        throw new Error('User is invalid');
      } else {
        const user = returnedUsers[0];
        if (!user.passwordHash) {
          alert('Password does not exist');
          throw new Error('Password hash is missing');
        }
        const check = await bcrypt.compare(password, user.passwordHash);
        if (!check) {
          alert("Password doesn't match");
          throw new Error('Password is invalid');
        } else if (user.subscriptionId === null) {
          // Always check for new users who have over 100 days
          const timeDiff =
            new Date().getTime() - new Date(user.created).getTime();
          const daysDifference = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          if (daysDifference > 100) {
            alert('Trial is over');
            throw new Error('Trial is over');
          }
        } else if (
          user.subscriptionId &&
          user.customerId &&
          user.priceId &&
          user.productId
        ) {
          try {
            const subscription = await stripe.subscriptions.retrieve(
              user.subscriptionId as string,
            );
            if (subscription.plan.active !== true && user.priceId !== null) {
              alert('Subscription is not active');
              throw new Error('Subscription is not active');
            }
          } catch (e) {
            alert('Subscription is invalid');
            throw new Error(`Subscription is invalid: ${e}`);
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
      if (!emailCheck) {
        return undefined;
      }
      const passwordHash = await bcrypt.hash(password, 10);
      const user = await gqlDbWrapper.createObj({
        fname: fname,
        lname: lname,
        email: email,
        passwordHash: passwordHash,
        created: new Date().toISOString(),
        dp: exampleDisplayPictureFileElement,
        displayName: `${fname} ${lname}`,
        role: role,
        bio: `${fname} ${lname} - ${role}`,
        journalId: '',
        visibility: UserProfileVisibility.PUBLIC,
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

export const ContextForUserMain = createContext({} as Controller);
