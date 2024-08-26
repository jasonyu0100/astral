import { UserBackerObj } from '@/(server)/model/user/backer/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createUserBackerObj,
  deleteUserBackerObj,
  updateUserBackerObj,
} from '@/graphql/mutations';
import { getUserBackerObj, listUserBackerObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';
import { GqlDbWrapper } from '../../main';

function castSingle(obj: unknown) {
  return obj as UserBackerObj;
}

function castMultiple(objs: unknown[]) {
  return objs as UserBackerObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getUserBackerObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getUserBackerObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getUserBackerObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getUserBackerObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listUserBackerObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listUserBackerObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listUserBackerObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listUserBackerObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listUserBackerObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listUserBackerObjs?.items || []);
}

async function createObj(newObj: Omit<UserBackerObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createUserBackerObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createUserBackerObj);
}

async function updateObj(id: string, updateObj: Partial<UserBackerObj>) {
  const payload = await amplifyClient.graphql({
    query: updateUserBackerObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserBackerObj);
}

async function overwriteObj(id: string, newObj: UserBackerObj) {
  const payload = await amplifyClient.graphql({
    query: updateUserBackerObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserBackerObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteUserBackerObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteUserBackerObj);
}

export const userBackerDbWrapper: GqlDbWrapper<UserBackerObj> = {
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
