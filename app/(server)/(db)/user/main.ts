import { amplifyClient } from '@/(api)/aws/graphql/main';
import { UserObj } from '@/(server)/(model)/user/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createUserObj,
  deleteUserObj,
  updateUserObj,
} from '@/graphql/mutations';
import { getUserObj, listUserObjs } from '@/graphql/queries';
import { GqlDbWrapper } from '../main';

function castSingle(obj: any) {
  return obj as UserObj;
}

function castMultiple(objs: any[]) {
  return objs as UserObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: getUserObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getUserObj);
}

async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getUserObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getUserObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listUserObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listUserObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listUserObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listUserObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listUserObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listUserObjs?.items || []);
}

async function createObj(newObj: Omit<UserObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createUserObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createUserObj);
}

async function updateObj(id: string, updateObj: Partial<UserObj>) {
  const payload = await amplifyClient.graphql({
    query: updateUserObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserObj);
}

async function overwriteObj(id: string, newObj: UserObj) {
  const payload = await amplifyClient.graphql({
    query: updateUserObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteUserObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteUserObj);
}

export const userDbWrapper: GqlDbWrapper<UserObj> = {
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
