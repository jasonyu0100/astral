import { amplifyClient } from '@/(api)/aws/graphql/main';
import { UserBackerTermsObj } from '@/(server)/(model)/user/backer/term/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createUserBackerTermsObj,
  deleteUserBackerTermsObj,
  updateUserBackerTermsObj,
} from '@/graphql/mutations';
import {
  getUserBackerTermsObj,
  listUserBackerTermsObjs,
} from '@/graphql/queries';
import { GqlDbWrapper } from '../../../main';

function castSingle(obj: unknown) {
  return obj as UserBackerTermsObj;
}

function castMultiple(objs: unknown[]) {
  return objs as UserBackerTermsObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getUserBackerTermsObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getUserBackerTermsObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getUserBackerTermsObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getUserBackerTermsObj);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listUserBackerTermsObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listUserBackerTermsObjs?.items || []);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listUserBackerTermsObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listUserBackerTermsObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listUserBackerTermsObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listUserBackerTermsObjs?.items || []);
}

async function createObj(newObj: Omit<UserBackerTermsObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createUserBackerTermsObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createUserBackerTermsObj);
}

async function updateObj(id: string, updateObj: Partial<UserBackerTermsObj>) {
  const payload = await amplifyClient.graphql({
    query: updateUserBackerTermsObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserBackerTermsObj);
}

async function overwriteObj(id: string, newObj: UserBackerTermsObj) {
  const payload = await amplifyClient.graphql({
    query: updateUserBackerTermsObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserBackerTermsObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteUserBackerTermsObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteUserBackerTermsObj);
}

export const userBackerTermsDbWrapper: GqlDbWrapper<UserBackerTermsObj> = {
  getObj,
  listObjs,
  listAllObjs,
  createObj,
  updateObj,
  overwriteObj,
  deleteObj,
  getFromVariables,
  listFromVariables,
};
