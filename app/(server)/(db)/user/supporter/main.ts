import { amplifyClient } from '@/(api)/aws/graphql/main';
import { UserSupporterObj } from '@/(server)/(model)/user/supporter/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createUserSupporterObj,
  deleteUserSupporterObj,
  updateUserSupporterObj,
} from '@/graphql/mutations';
import { getUserSupporterObj, listUserSupporterObjs } from '@/graphql/queries';
import { GqlDbWrapper } from '../../main';

function castSingle(obj: unknown) {
  return obj as UserSupporterObj;
}

function castMultiple(objs: unknown[]) {
  return objs as UserSupporterObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getUserSupporterObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getUserSupporterObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getUserSupporterObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getUserSupporterObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listUserSupporterObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listUserSupporterObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listUserSupporterObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listUserSupporterObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listUserSupporterObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listUserSupporterObjs?.items || []);
}

async function createObj(newObj: Omit<UserSupporterObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createUserSupporterObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createUserSupporterObj);
}

async function updateObj(id: string, updateObj: Partial<UserSupporterObj>) {
  const payload = await amplifyClient.graphql({
    query: updateUserSupporterObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserSupporterObj);
}

async function overwriteObj(id: string, newObj: UserSupporterObj) {
  const payload = await amplifyClient.graphql({
    query: updateUserSupporterObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserSupporterObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteUserSupporterObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteUserSupporterObj);
}

export const userSupporterDbWrapper: GqlDbWrapper<UserSupporterObj> = {
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
